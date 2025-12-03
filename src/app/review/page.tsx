"use client";

import { useState, useCallback, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { api } from "@/trpc/react";
import { ReviewQueue } from "./_components/review-queue";
import { EntityPanel } from "./_components/entity-panel";
import { ReviewFooter } from "./_components/review-footer";
import type { EntityState, Entity } from "./_components/entity-row";
import type { Allotment as AllotmentType } from "allotment";

// Dynamic import for allotment to avoid SSR issues
const AllotmentModule = dynamic(
  () => import("allotment").then((mod) => {
    const { Allotment } = mod;
    return { default: Object.assign(Allotment, { Pane: mod.Allotment.Pane }) };
  }),
  { ssr: false }
) as unknown as typeof AllotmentType;

// Dynamic import for PDF viewer
const PDFViewer = dynamic(
  () => import("./_components/pdf-viewer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-bg-tertiary">
        <div className="text-text-tertiary text-sm">Loading PDF viewer...</div>
      </div>
    ),
  }
);

interface ParsedOutput {
  entities?: Entity[];
}

function ReviewPageContent() {
  const searchParams = useSearchParams();
  const resultIdFromUrl = searchParams.get("resultId");

  // Selection state
  const [selectedResultId, setSelectedResultId] = useState<string | null>(resultIdFromUrl);

  // Entity review state
  const [entityStates, setEntityStates] = useState<EntityState[]>([]);
  const [notes, setNotes] = useState("");

  // Highlighting state (for bi-directional highlighting - currently stubbed)
  const [hoveredEntity, setHoveredEntity] = useState<EntityState | null>(null);
  const [highlightedEntityIndex, setHighlightedEntityIndex] = useState<number | null>(null);

  // API hooks
  const utils = api.useUtils();
  const { data: queue, isLoading: queueLoading } = api.reviews.getQueue.useQuery({ limit: 50 });
  const { data: stats } = api.reviews.getStats.useQuery({});
  const { data: resultData, isLoading: resultLoading } = api.reviews.getResultForReview.useQuery(
    { resultId: selectedResultId! },
    {
      enabled: !!selectedResultId,
      refetchOnWindowFocus: false,
    }
  );

  const submitMutation = api.reviews.submit.useMutation({
    onSuccess: () => {
      void utils.reviews.getQueue.invalidate();
      void utils.reviews.getStats.invalidate();
      setSelectedResultId(null);
      setEntityStates([]);
      setNotes("");
    },
  });

  // Initialize entity states when result data loads
  const initializeEntityStates = useCallback((entities: Entity[]) => {
    setEntityStates(
      entities.map((entity) => ({
        ...entity,
        status: "pending" as const,
      }))
    );
  }, []);

  // Reset and load new result
  const handleSelectResult = useCallback(
    (id: string) => {
      setSelectedResultId(id);
      setNotes("");
      setEntityStates([]);
      setHighlightedEntityIndex(null);
      setHoveredEntity(null);
    },
    []
  );

  // Initialize entities when data loads
  useMemo(() => {
    if (resultData && entityStates.length === 0) {
      const parsed = resultData.parsedOutput as ParsedOutput | null;
      const entities = parsed?.entities ?? [];
      if (entities.length > 0) {
        initializeEntityStates(entities);
      }
    }
  }, [resultData, entityStates.length, initializeEntityStates]);

  // Entity action handlers
  const handleEntityAccept = useCallback((index: number) => {
    setEntityStates((prev) =>
      prev.map((e, i) =>
        i === index
          ? { ...e, status: e.status === "accepted" ? "pending" : "accepted" }
          : e
      )
    );
  }, []);

  const handleEntityReject = useCallback((index: number) => {
    setEntityStates((prev) =>
      prev.map((e, i) =>
        i === index
          ? { ...e, status: e.status === "rejected" ? "pending" : "rejected" }
          : e
      )
    );
  }, []);

  const handleEntityEdit = useCallback((index: number, correctedName: string) => {
    setEntityStates((prev) =>
      prev.map((e, i) =>
        i === index
          ? { ...e, status: "edited", correctedName }
          : e
      )
    );
  }, []);

  const handleEntityAdd = useCallback((name: string, type: string) => {
    setEntityStates((prev) => [
      ...prev,
      {
        name,
        type,
        status: "accepted" as const,
      },
    ]);
  }, []);

  // Calculate stats
  const entityStats = useMemo(() => {
    const total = entityStates.length;
    const accepted = entityStates.filter((e) => e.status === "accepted").length;
    const rejected = entityStates.filter((e) => e.status === "rejected").length;
    const edited = entityStates.filter((e) => e.status === "edited").length;
    const pending = entityStates.filter((e) => e.status === "pending").length;
    return { total, accepted, rejected, edited, pending };
  }, [entityStates]);

  // Submit handlers
  const handleApprove = useCallback(() => {
    if (!selectedResultId) return;

    const score =
      entityStats.total > 0
        ? (entityStats.accepted + entityStats.edited) / entityStats.total
        : 1;

    const entityScores = entityStates.map((e) => ({
      entityName: e.correctedName ?? e.name,
      correct: e.status === "accepted" || e.status === "edited",
      notes: e.status === "edited" ? `Corrected from: ${e.name}` : undefined,
    }));

    submitMutation.mutate({
      evalResultId: selectedResultId,
      score,
      notes: notes || undefined,
      entityScores,
    });
  }, [selectedResultId, entityStats, entityStates, notes, submitMutation]);

  const handleReject = useCallback(() => {
    if (!selectedResultId) return;

    submitMutation.mutate({
      evalResultId: selectedResultId,
      score: 0,
      notes: notes ? `FLAGGED FOR RE-LABELING: ${notes}` : "FLAGGED FOR RE-LABELING",
      entityScores: entityStates.map((e) => ({
        entityName: e.name,
        correct: false,
      })),
    });
  }, [selectedResultId, notes, entityStates, submitMutation]);

  // Stubbed: Bounding box click handler for right-to-left highlighting
  const handleBoundingBoxClick = useCallback((entityIndex: number) => {
    setHighlightedEntityIndex(entityIndex);
    // In future: scroll entity panel to this entity
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Queue Sidebar */}
      <div className="w-64 flex-shrink-0 border-r border-border bg-bg-secondary flex flex-col">
        <div className="p-4 border-b border-border">
          <h1 className="text-lg font-bold text-text-primary">Review Queue</h1>
          <p className="text-xs text-text-tertiary mt-0.5">
            {stats?.pendingReviews ?? 0} pending • {stats?.totalReviews ?? 0} completed
          </p>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ReviewQueue
            results={queue?.results ?? []}
            selectedResultId={selectedResultId}
            onSelectResult={handleSelectResult}
            isLoading={queueLoading}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        {!selectedResultId ? (
          <div className="h-full flex items-center justify-center bg-bg-primary">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-bg-tertiary flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-text-tertiary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-medium text-text-primary mb-1">
                Select a document to review
              </h2>
              <p className="text-sm text-text-tertiary">
                Choose from the queue on the left to begin annotation
              </p>
            </div>
          </div>
        ) : resultLoading ? (
          <div className="h-full flex items-center justify-center bg-bg-primary">
            <div className="text-text-tertiary">Loading document...</div>
          </div>
        ) : !resultData ? (
          <div className="h-full flex items-center justify-center bg-bg-primary">
            <div className="text-error">Result not found</div>
          </div>
        ) : (
          <AllotmentModule defaultSizes={[40, 60]}>
            {/* Left Panel: Entity List + Footer */}
            <AllotmentModule.Pane minSize={300}>
              <div className="h-full flex flex-col bg-bg-primary">
                <EntityPanel
                  documentName={resultData.document.name}
                  modelName={resultData.evalRun.modelConfig.displayName}
                  promptName={`${resultData.evalRun.prompt.name} v${resultData.evalRun.prompt.version}`}
                  promptNode={resultData.evalRun.prompt.node}
                  entities={entityStates}
                  onEntityAccept={handleEntityAccept}
                  onEntityReject={handleEntityReject}
                  onEntityEdit={handleEntityEdit}
                  onEntityAdd={handleEntityAdd}
                  onEntityHover={setHoveredEntity}
                  onEntityClick={(entity) => {
                    const index = entityStates.findIndex(
                      (e) => e.name === entity.name && e.type === entity.type
                    );
                    setHighlightedEntityIndex(index);
                  }}
                  highlightedEntityIndex={highlightedEntityIndex}
                />
                <ReviewFooter
                  notes={notes}
                  onNotesChange={setNotes}
                  onApprove={handleApprove}
                  onReject={handleReject}
                  isSubmitting={submitMutation.isPending}
                  canSubmit={entityStates.length > 0}
                  stats={entityStats}
                />
              </div>
            </AllotmentModule.Pane>

            {/* Right Panel: PDF Viewer */}
            <AllotmentModule.Pane minSize={400}>
              <PDFViewer
                documentId={resultData.document.id}
                highlightedEntity={hoveredEntity}
                onBoundingBoxClick={handleBoundingBoxClick}
              />
            </AllotmentModule.Pane>
          </AllotmentModule>
        )}
      </div>
    </div>
  );
}

export default function ReviewPage() {
  return (
    <Suspense
      fallback={
        <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="text-text-tertiary">Loading review interface...</div>
        </div>
      }
    >
      <ReviewPageContent />
    </Suspense>
  );
}
