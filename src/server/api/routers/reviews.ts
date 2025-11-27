import { z } from "zod";
import { createTRPCRouter, publicProcedure, viewerProcedure, adminProcedure } from "@/server/api/trpc";

export const reviewsRouter = createTRPCRouter({
  // Get review queue - results without reviews
  getQueue: viewerProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(50),
        cursor: z.string().optional(),
        evalRunId: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const results = await ctx.db.evalResult.findMany({
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        where: {
          humanReview: null,
          ...(input.evalRunId ? { evalRunId: input.evalRunId } : {}),
        },
        orderBy: { evalRun: { createdAt: "desc" } },
        include: {
          document: {
            select: { id: true, name: true, originalName: true },
          },
          evalRun: {
            select: {
              id: true,
              prompt: { select: { name: true, version: true } },
              modelConfig: { select: { displayName: true } },
            },
          },
        },
      });

      let nextCursor: string | undefined = undefined;
      if (results.length > input.limit) {
        const nextItem = results.pop();
        nextCursor = nextItem?.id;
      }

      return { results, nextCursor };
    }),

  // Get a specific result for review
  getResultForReview: viewerProcedure
    .input(z.object({ resultId: z.string() }))
    .query(async ({ ctx, input }) => {
      const result = await ctx.db.evalResult.findUnique({
        where: { id: input.resultId },
        include: {
          document: true,
          evalRun: {
            include: {
              prompt: true,
              modelConfig: true,
              dataset: true,
            },
          },
          humanReview: true,
        },
      });

      if (!result) {
        throw new Error("Result not found");
      }

      // Get ground truth for this document
      const datasetDoc = await ctx.db.datasetDocument.findUnique({
        where: {
          datasetId_documentId: {
            datasetId: result.evalRun.datasetId,
            documentId: result.documentId,
          },
        },
      });

      return {
        ...result,
        groundTruth: datasetDoc?.groundTruth,
      };
    }),

  // Submit a review
  submit: adminProcedure
    .input(
      z.object({
        evalResultId: z.string(),
        score: z.number().min(0).max(1),
        entityScores: z
          .array(
            z.object({
              entityName: z.string(),
              correct: z.boolean(),
              notes: z.string().optional(),
            })
          )
          .optional(),
        notes: z.string().optional(),
        reviewerId: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const review = await ctx.db.humanReview.create({
        data: {
          evalResultId: input.evalResultId,
          score: input.score,
          entityScores: input.entityScores,
          notes: input.notes,
          reviewerId: input.reviewerId,
        },
      });

      return review;
    }),

  // Update a review
  update: adminProcedure
    .input(
      z.object({
        id: z.string(),
        score: z.number().min(0).max(1).optional(),
        entityScores: z
          .array(
            z.object({
              entityName: z.string(),
              correct: z.boolean(),
              notes: z.string().optional(),
            })
          )
          .optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const review = await ctx.db.humanReview.update({
        where: { id: input.id },
        data: {
          score: input.score,
          entityScores: input.entityScores,
          notes: input.notes,
        },
      });

      return review;
    }),

  // Delete a review
  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.humanReview.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  // Get reviews for a specific eval run
  getByEvalRun: viewerProcedure
    .input(z.object({ evalRunId: z.string() }))
    .query(async ({ ctx, input }) => {
      const reviews = await ctx.db.humanReview.findMany({
        where: {
          evalResult: {
            evalRunId: input.evalRunId,
          },
        },
        include: {
          evalResult: {
            include: {
              document: {
                select: { id: true, name: true },
              },
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      return reviews;
    }),

  // Get review statistics - public for dashboard access
  getStats: publicProcedure
    .input(
      z.object({
        evalRunId: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where = input.evalRunId
        ? { evalResult: { evalRunId: input.evalRunId } }
        : {};

      const reviews = await ctx.db.humanReview.findMany({
        where,
        select: { score: true },
      });

      const totalReviews = reviews.length;
      const avgScore =
        totalReviews > 0
          ? reviews.reduce((sum, r) => sum + r.score, 0) / totalReviews
          : 0;

      const pendingCount = await ctx.db.evalResult.count({
        where: {
          humanReview: null,
          ...(input.evalRunId ? { evalRunId: input.evalRunId } : {}),
        },
      });

      return {
        totalReviews,
        averageScore: avgScore,
        pendingReviews: pendingCount,
      };
    }),
});

