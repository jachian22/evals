import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { documentsRouter } from "@/server/api/routers/documents";
import { datasetsRouter } from "@/server/api/routers/datasets";
import { promptsRouter } from "@/server/api/routers/prompts";
import { modelsRouter } from "@/server/api/routers/models";
import { evalsRouter } from "@/server/api/routers/evals";
import { reviewsRouter } from "@/server/api/routers/reviews";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  documents: documentsRouter,
  datasets: datasetsRouter,
  prompts: promptsRouter,
  models: modelsRouter,
  evals: evalsRouter,
  reviews: reviewsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.documents.list();
 */
export const createCaller = createCallerFactory(appRouter);
