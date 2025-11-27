import { z } from "zod";
import { createTRPCRouter, publicProcedure, viewerProcedure, adminProcedure } from "@/server/api/trpc";
import { callLLM, interpolatePrompt } from "@/server/services/llm";
import {
  scoreEntities,
  aggregateScores,
  parseEntityOutput,
  type GroundTruth,
  type ScoringResult,
} from "@/server/services/scoring";

export const evalsRouter = createTRPCRouter({
  // Public for dashboard access
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(50),
        cursor: z.string().optional(),
        datasetId: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const runs = await ctx.db.evalRun.findMany({
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        where: input.datasetId ? { datasetId: input.datasetId } : undefined,
        orderBy: { createdAt: "desc" },
        include: {
          dataset: { select: { id: true, name: true } },
          prompt: { select: { id: true, name: true, version: true } },
          modelConfig: {
            select: { id: true, displayName: true, provider: true },
          },
          _count: { select: { results: true } },
        },
      });

      let nextCursor: string | undefined = undefined;
      if (runs.length > input.limit) {
        const nextItem = runs.pop();
        nextCursor = nextItem?.id;
      }

      return { runs, nextCursor };
    }),

  getById: viewerProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const run = await ctx.db.evalRun.findUnique({
        where: { id: input.id },
        include: {
          dataset: true,
          prompt: true,
          modelConfig: true,
          results: {
            include: {
              document: {
                select: { id: true, name: true, originalName: true },
              },
              humanReview: true,
            },
          },
        },
      });

      if (!run) {
        throw new Error("Eval run not found");
      }

      return run;
    }),

  create: adminProcedure
    .input(
      z.object({
        datasetId: z.string(),
        promptId: z.string(),
        modelConfigId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const run = await ctx.db.evalRun.create({
        data: {
          datasetId: input.datasetId,
          promptId: input.promptId,
          modelConfigId: input.modelConfigId,
          status: "pending",
        },
      });

      return run;
    }),

  execute: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const run = await ctx.db.evalRun.findUnique({
        where: { id: input.id },
        include: {
          dataset: {
            include: {
              documents: {
                include: {
                  document: true,
                },
              },
            },
          },
          prompt: true,
          modelConfig: true,
        },
      });

      if (!run) {
        throw new Error("Eval run not found");
      }

      // Update status to running
      await ctx.db.evalRun.update({
        where: { id: input.id },
        data: { status: "running", startedAt: new Date() },
      });

      const scores: ScoringResult[] = [];

      try {
        const processDocument = async (datasetDoc: typeof run.dataset.documents[number]) => {
          const doc = datasetDoc.document;

          // Interpolate the prompt with the document text
          const userPrompt = interpolatePrompt(run.prompt.userPrompt, {
            text: doc.extractedText,
          });

          // Call the LLM
          const response = await callLLM({
            provider: run.modelConfig.provider as "openai" | "anthropic",
            modelId: run.modelConfig.modelId,
            systemPrompt: run.prompt.systemPrompt,
            userPrompt,
          });

          // Parse the output
          const parsedEntities = parseEntityOutput(response.content);

          // Score against ground truth if available
          let autoScore: ScoringResult | null = null;
          if (datasetDoc.groundTruth) {
            const gt = datasetDoc.groundTruth as unknown as GroundTruth;
            autoScore = scoreEntities(parsedEntities, gt.entities);
          }

          // Create the result
          await ctx.db.evalResult.create({
            data: {
              evalRunId: run.id,
              documentId: doc.id,
              rawOutput: response.content,
              parsedOutput: { entities: parsedEntities } as object,
              latencyMs: response.latencyMs,
              tokenUsage: response.tokenUsage as object,
              autoScore: autoScore as unknown as object | undefined,
            },
          });

          return autoScore;
        };

        // Process documents with concurrency limit
        const concurrency = 5;
        const queue = [...run.dataset.documents];
        
        const worker = async () => {
          while (queue.length > 0) {
            const doc = queue.shift();
            if (doc) {
              const score = await processDocument(doc);
              if (score) scores.push(score);
            }
          }
        };

        await Promise.all(Array.from({ length: concurrency }, worker));

        // Calculate aggregate scores
        const aggregatedScores = aggregateScores(scores);

        // Update run as completed
        await ctx.db.evalRun.update({
          where: { id: input.id },
          data: {
            status: "completed",
            completedAt: new Date(),
            aggregateScore: aggregatedScores,
          },
        });

        return { success: true, aggregateScore: aggregatedScores };
      } catch (error) {
        // Update run as failed
        await ctx.db.evalRun.update({
          where: { id: input.id },
          data: {
            status: "failed",
            completedAt: new Date(),
          },
        });

        throw error;
      }
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.evalRun.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  // Compare multiple runs
  compare: viewerProcedure
    .input(z.object({ runIds: z.array(z.string()).min(2) }))
    .query(async ({ ctx, input }) => {
      const runs = await ctx.db.evalRun.findMany({
        where: { id: { in: input.runIds } },
        include: {
          dataset: { select: { id: true, name: true } },
          prompt: { select: { id: true, name: true, version: true } },
          modelConfig: {
            select: { id: true, displayName: true, provider: true },
          },
          results: {
            include: {
              document: {
                select: { id: true, name: true },
              },
            },
          },
        },
      });

      // Group results by document for easy comparison
      const documentResults = new Map<
        string,
        {
          documentName: string;
          results: Array<{
            runId: string;
            modelName: string;
            promptName: string;
            autoScore: ScoringResult | null;
          }>;
        }
      >();

      for (const run of runs) {
        for (const result of run.results) {
          const docId = result.document.id;
          if (!documentResults.has(docId)) {
            documentResults.set(docId, {
              documentName: result.document.name,
              results: [],
            });
          }

          documentResults.get(docId)!.results.push({
            runId: run.id,
            modelName: run.modelConfig.displayName,
            promptName: `${run.prompt.name} v${run.prompt.version}`,
            autoScore: result.autoScore as ScoringResult | null,
          });
        }
      }

      return {
        runs: runs.map((r) => ({
          id: r.id,
          model: r.modelConfig.displayName,
          prompt: `${r.prompt.name} v${r.prompt.version}`,
          aggregateScore: r.aggregateScore,
        })),
        documentComparison: Array.from(documentResults.entries()).map(
          ([docId, data]) => ({
            documentId: docId,
            documentName: data.documentName,
            results: data.results,
          })
        ),
      };
    }),
});
