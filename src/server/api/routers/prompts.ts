import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const promptsRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const prompts = await ctx.db.promptTemplate.findMany({
      orderBy: [{ name: "asc" }, { version: "desc" }],
    });

    // Group by name and get latest version
    const latestByName = new Map<
      string,
      (typeof prompts)[0] & { allVersions: number[] }
    >();
    for (const prompt of prompts) {
      const existing = latestByName.get(prompt.name);
      if (!existing) {
        latestByName.set(prompt.name, { ...prompt, allVersions: [prompt.version] });
      } else {
        existing.allVersions.push(prompt.version);
        if (prompt.version > existing.version) {
          latestByName.set(prompt.name, {
            ...prompt,
            allVersions: existing.allVersions,
          });
        }
      }
    }

    return Array.from(latestByName.values());
  }),

  listAllVersions: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      const prompts = await ctx.db.promptTemplate.findMany({
        where: { name: input.name },
        orderBy: { version: "desc" },
      });

      return prompts;
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const prompt = await ctx.db.promptTemplate.findUnique({
        where: { id: input.id },
      });

      if (!prompt) {
        throw new Error("Prompt not found");
      }

      return prompt;
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        systemPrompt: z.string(),
        userPrompt: z.string(),
        outputSchema: z.any().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Check if a prompt with this name already exists
      const existing = await ctx.db.promptTemplate.findFirst({
        where: { name: input.name },
        orderBy: { version: "desc" },
      });

      const version = existing ? existing.version + 1 : 1;

      const prompt = await ctx.db.promptTemplate.create({
        data: {
          name: input.name,
          version,
          systemPrompt: input.systemPrompt,
          userPrompt: input.userPrompt,
          outputSchema: input.outputSchema as object | undefined,
        },
      });

      return prompt;
    }),

  createNewVersion: publicProcedure
    .input(
      z.object({
        name: z.string(),
        systemPrompt: z.string(),
        userPrompt: z.string(),
        outputSchema: z.any().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Get the latest version
      const existing = await ctx.db.promptTemplate.findFirst({
        where: { name: input.name },
        orderBy: { version: "desc" },
      });

      if (!existing) {
        throw new Error("Prompt not found");
      }

      const prompt = await ctx.db.promptTemplate.create({
        data: {
          name: input.name,
          version: existing.version + 1,
          systemPrompt: input.systemPrompt,
          userPrompt: input.userPrompt,
          outputSchema: input.outputSchema as object | undefined,
        },
      });

      return prompt;
    }),

  fork: publicProcedure
    .input(
      z.object({
        sourceId: z.string(),
        newName: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const source = await ctx.db.promptTemplate.findUnique({
        where: { id: input.sourceId },
      });

      if (!source) {
        throw new Error("Source prompt not found");
      }

      // Check if name is already taken
      const existingWithName = await ctx.db.promptTemplate.findFirst({
        where: { name: input.newName },
      });

      if (existingWithName) {
        throw new Error("A prompt with this name already exists");
      }

      const prompt = await ctx.db.promptTemplate.create({
        data: {
          name: input.newName,
          version: 1,
          systemPrompt: source.systemPrompt,
          userPrompt: source.userPrompt,
          outputSchema: source.outputSchema as object | undefined,
        },
      });

      return prompt;
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.promptTemplate.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  deleteAllVersions: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.promptTemplate.deleteMany({
        where: { name: input.name },
      });

      return { success: true };
    }),
});

