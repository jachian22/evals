import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const groundTruthSchema = z.object({
  entities: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      contexts: z.array(z.string()).optional(),
    })
  ),
});

export const datasetsRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const datasets = await ctx.db.dataset.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { documents: true, evalRuns: true },
        },
      },
    });

    return datasets;
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const dataset = await ctx.db.dataset.findUnique({
        where: { id: input.id },
        include: {
          documents: {
            include: {
              document: {
                select: {
                  id: true,
                  name: true,
                  originalName: true,
                  pageCount: true,
                  createdAt: true,
                },
              },
            },
          },
        },
      });

      if (!dataset) {
        throw new Error("Dataset not found");
      }

      return dataset;
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const dataset = await ctx.db.dataset.create({
        data: {
          name: input.name,
          description: input.description,
        },
      });

      return dataset;
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const dataset = await ctx.db.dataset.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
        },
      });

      return dataset;
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.dataset.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  addDocument: publicProcedure
    .input(
      z.object({
        datasetId: z.string(),
        documentId: z.string(),
        groundTruth: groundTruthSchema.optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const datasetDoc = await ctx.db.datasetDocument.create({
        data: {
          datasetId: input.datasetId,
          documentId: input.documentId,
          groundTruth: input.groundTruth,
        },
        include: {
          document: true,
        },
      });

      return datasetDoc;
    }),

  removeDocument: publicProcedure
    .input(
      z.object({
        datasetId: z.string(),
        documentId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.datasetDocument.delete({
        where: {
          datasetId_documentId: {
            datasetId: input.datasetId,
            documentId: input.documentId,
          },
        },
      });

      return { success: true };
    }),

  updateGroundTruth: publicProcedure
    .input(
      z.object({
        datasetId: z.string(),
        documentId: z.string(),
        groundTruth: groundTruthSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const datasetDoc = await ctx.db.datasetDocument.update({
        where: {
          datasetId_documentId: {
            datasetId: input.datasetId,
            documentId: input.documentId,
          },
        },
        data: {
          groundTruth: input.groundTruth,
        },
      });

      return datasetDoc;
    }),

  importGroundTruth: publicProcedure
    .input(
      z.object({
        datasetId: z.string(),
        groundTruthData: z.array(
          z.object({
            documentId: z.string(),
            groundTruth: groundTruthSchema,
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Use concurrency limit for batch updates
      const concurrency = 10;
      const queue = [...input.groundTruthData];
      let updatedCount = 0;

      const worker = async () => {
        while (queue.length > 0) {
          const item = queue.shift();
          if (item) {
            await ctx.db.datasetDocument.upsert({
              where: {
                datasetId_documentId: {
                  datasetId: input.datasetId,
                  documentId: item.documentId,
                },
              },
              update: {
                groundTruth: item.groundTruth,
              },
              create: {
                datasetId: input.datasetId,
                documentId: item.documentId,
                groundTruth: item.groundTruth,
              },
            });
            updatedCount++;
          }
        }
      };

      await Promise.all(Array.from({ length: concurrency }, worker));

      return { updated: updatedCount };
    }),
});

