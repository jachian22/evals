import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { extractTextFromPDF, deletePDF } from "@/server/services/pdf";

export const documentsRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(50),
        cursor: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const documents = await ctx.db.document.findMany({
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          originalName: true,
          pageCount: true,
          createdAt: true,
        },
      });

      let nextCursor: string | undefined = undefined;
      if (documents.length > input.limit) {
        const nextItem = documents.pop();
        nextCursor = nextItem?.id;
      }

      return { documents, nextCursor };
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const document = await ctx.db.document.findUnique({
        where: { id: input.id },
      });

      if (!document) {
        throw new Error("Document not found");
      }

      return document;
    }),

  upload: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        originalName: z.string(),
        base64Content: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const buffer = Buffer.from(input.base64Content, "base64");
      const result = await extractTextFromPDF(buffer, input.originalName);

      const document = await ctx.db.document.create({
        data: {
          name: input.name,
          originalName: input.originalName,
          storagePath: result.storagePath,
          extractedText: result.text,
          pageCount: result.pageCount,
        },
      });

      return document;
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const document = await ctx.db.document.findUnique({
        where: { id: input.id },
      });

      if (!document) {
        throw new Error("Document not found");
      }

      // Delete file from storage
      await deletePDF(document.storagePath);

      // Delete from database
      await ctx.db.document.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  updateName: publicProcedure
    .input(z.object({ id: z.string(), name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const document = await ctx.db.document.update({
        where: { id: input.id },
        data: { name: input.name },
      });

      return document;
    }),
});

