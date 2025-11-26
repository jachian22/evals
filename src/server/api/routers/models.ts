import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { AVAILABLE_MODELS } from "@/server/services/llm";

export const modelsRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const models = await ctx.db.modelConfig.findMany({
      orderBy: [{ provider: "asc" }, { displayName: "asc" }],
    });

    return models;
  }),

  listActive: publicProcedure.query(async ({ ctx }) => {
    const models = await ctx.db.modelConfig.findMany({
      where: { isActive: true },
      orderBy: [{ provider: "asc" }, { displayName: "asc" }],
    });

    return models;
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const model = await ctx.db.modelConfig.findUnique({
        where: { id: input.id },
      });

      if (!model) {
        throw new Error("Model not found");
      }

      return model;
    }),

  create: publicProcedure
    .input(
      z.object({
        provider: z.enum(["openai", "anthropic"]),
        modelId: z.string().min(1),
        displayName: z.string().min(1),
        isActive: z.boolean().default(true),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const model = await ctx.db.modelConfig.create({
        data: {
          provider: input.provider,
          modelId: input.modelId,
          displayName: input.displayName,
          isActive: input.isActive,
        },
      });

      return model;
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        displayName: z.string().min(1).optional(),
        isActive: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const model = await ctx.db.modelConfig.update({
        where: { id: input.id },
        data: {
          displayName: input.displayName,
          isActive: input.isActive,
        },
      });

      return model;
    }),

  toggleActive: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const current = await ctx.db.modelConfig.findUnique({
        where: { id: input.id },
      });

      if (!current) {
        throw new Error("Model not found");
      }

      const model = await ctx.db.modelConfig.update({
        where: { id: input.id },
        data: { isActive: !current.isActive },
      });

      return model;
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.modelConfig.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  // Seed default models
  seedDefaults: publicProcedure.mutation(async ({ ctx }) => {
    const allModels = [
      ...AVAILABLE_MODELS.openai.map((m) => ({
        provider: "openai" as const,
        modelId: m.id,
        displayName: m.name,
      })),
      ...AVAILABLE_MODELS.anthropic.map((m) => ({
        provider: "anthropic" as const,
        modelId: m.id,
        displayName: m.name,
      })),
    ];

    const results = await Promise.all(
      allModels.map((model) =>
        ctx.db.modelConfig.upsert({
          where: {
            provider_modelId: {
              provider: model.provider,
              modelId: model.modelId,
            },
          },
          update: {},
          create: {
            provider: model.provider,
            modelId: model.modelId,
            displayName: model.displayName,
            isActive: true,
          },
        })
      )
    );

    return { seeded: results.length };
  }),

  // Get available models from LLM service (for reference)
  getAvailableModels: publicProcedure.query(() => {
    return AVAILABLE_MODELS;
  }),
});

