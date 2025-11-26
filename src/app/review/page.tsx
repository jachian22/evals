"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { api } from "@/trpc/react";

interface Entity {
  name: string;
  type: string;
  contexts?: string[];
}

interface ParsedOutput {
  entities?: Entity[];
}

interface GroundTruth {
  entities?: Entity[];
}

function ReviewPageContent() {
  const searchParams = useSearchParams();
  const resultIdFromUrl = searchParams.get("resultId");

  const [selectedResultId, setSelectedResultId] = useState<string | null>(
    resultIdFromUrl
  );
  const [score, setScore] = useState(0.5);
  const [notes, setNotes] = useState("");
  const [entityScores, setEntityScores] = useState<
    { entityName: string; correct: boolean; notes?: string }[]
  >([]);

  const utils = api.useUtils();
  const { data: queue, isLoading: queueLoading } =
    api.reviews.getQueue.useQuery({ limit: 50 });
  const { data: stats } = api.reviews.getStats.useQuery({});
  const { data: resultData, isLoading: resultLoading } =
    api.reviews.getResultForReview.useQuery(
      { resultId: selectedResultId! },
      { enabled: !!selectedResultId }
    );

  const submitMutation = api.reviews.submit.useMutation({
    onSuccess: () => {
      void utils.reviews.getQueue.invalidate();
      void utils.reviews.getStats.invalidate();
      setSelectedResultId(null);
      setScore(0.5);
      setNotes("");
      setEntityScores([]);
    },
  });

  const handleSelectResult = (id: string) => {
    setSelectedResultId(id);
    setScore(0.5);
    setNotes("");
    setEntityScores([]);
  };

  const handleSubmit = () => {
    if (!selectedResultId) return;
    submitMutation.mutate({
      evalResultId: selectedResultId,
      score,
      notes: notes || undefined,
      entityScores: entityScores.length > 0 ? entityScores : undefined,
    });
  };

  const toggleEntityScore = (entityName: string) => {
    setEntityScores((prev) => {
      const existing = prev.find((e) => e.entityName === entityName);
      if (existing) {
        return prev.map((e) =>
          e.entityName === entityName ? { ...e, correct: !e.correct } : e
        );
      }
      return [...prev, { entityName, correct: true }];
    });
  };

  const parsed = resultData?.parsedOutput as ParsedOutput | null;
  const entities = parsed?.entities ?? [];
  const groundTruth = resultData?.groundTruth as GroundTruth | null;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">Review Queue</h1>
        <p className="text-text-secondary mt-1">
          Review and score extraction results for quality assessment
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="metric-card">
          <div className="metric-value">{stats?.pendingReviews ?? 0}</div>
          <div className="metric-label">Pending Reviews</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">{stats?.totalReviews ?? 0}</div>
          <div className="metric-label">Completed Reviews</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">
            {stats && stats.totalReviews > 0
              ? `${(stats.averageScore * 100).toFixed(0)}%`
              : "—"}
          </div>
          <div className="metric-label">Average Score</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Queue */}
        <div className="col-span-1">
          <div className="card sticky top-8">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Pending ({queue?.results.length ?? 0})
            </h2>

            {queueLoading ? (
              <div className="text-text-tertiary">Loading...</div>
            ) : queue?.results.length === 0 ? (
              <div className="text-center py-8 text-text-tertiary">
                <p>No pending reviews</p>
                <Link
                  href="/evals"
                  className="text-accent hover:text-accent-hover text-sm"
                >
                  Run an evaluation first
                </Link>
              </div>
            ) : (
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {queue?.results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSelectResult(result.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedResultId === result.id
                        ? "bg-accent/10 border border-accent"
                        : "bg-bg-tertiary hover:bg-bg-elevated border border-transparent"
                    }`}
                  >
                    <div className="font-medium text-text-primary truncate">
                      {result.document.name}
                    </div>
                    <div className="text-xs text-text-tertiary mt-1">
                      {result.evalRun.modelConfig.displayName} •{" "}
                      {result.evalRun.prompt.name}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Review Panel */}
        <div className="col-span-2">
          {!selectedResultId ? (
            <div className="card text-center py-12">
              <p className="text-text-tertiary">
                Select a result from the queue to review
              </p>
            </div>
          ) : resultLoading ? (
            <div className="card">
              <div className="text-text-tertiary">Loading result...</div>
            </div>
          ) : !resultData ? (
            <div className="card">
              <div className="text-error">Result not found</div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Document Info */}
              <div className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {resultData.document.name}
                    </h3>
                    <div className="text-sm text-text-tertiary">
                      {resultData.evalRun.modelConfig.displayName} •{" "}
                      {resultData.evalRun.prompt.name} v
                      {resultData.evalRun.prompt.version}
                    </div>
                  </div>
                  <Link
                    href={`/documents/${resultData.document.id}`}
                    className="btn btn-secondary text-sm"
                  >
                    View Document
                  </Link>
                </div>
              </div>

              {/* Extracted Entities */}
              <div className="card">
                <h3 className="font-semibold text-text-primary mb-4">
                  Extracted Entities ({entities.length})
                </h3>
                {entities.length === 0 ? (
                  <p className="text-text-tertiary italic">
                    No entities extracted
                  </p>
                ) : (
                  <div className="space-y-2">
                    {entities.map((entity, i) => {
                      const entityScore = entityScores.find(
                        (e) => e.entityName === entity.name
                      );
                      const isMarked = entityScore !== undefined;
                      const isCorrect = entityScore?.correct ?? false;

                      return (
                        <div
                          key={i}
                          className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                            isMarked
                              ? isCorrect
                                ? "bg-success/10 border-success/30"
                                : "bg-error/10 border-error/30"
                              : "bg-bg-tertiary border-border"
                          }`}
                        >
                          <div>
                            <span className="font-medium text-text-primary">
                              {entity.name}
                            </span>
                            <span className="text-text-tertiary ml-2">
                              ({entity.type})
                            </span>
                            {entity.contexts && entity.contexts.length > 0 && (
                              <p className="text-xs text-text-tertiary mt-1">
                                Context: {entity.contexts[0]}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => toggleEntityScore(entity.name)}
                            className={`btn text-sm py-1 px-3 ${
                              isMarked
                                ? isCorrect
                                  ? "btn-primary"
                                  : "btn-danger"
                                : "btn-secondary"
                            }`}
                          >
                            {isMarked
                              ? isCorrect
                                ? "✓ Correct"
                                : "✗ Incorrect"
                              : "Mark"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Ground Truth Comparison */}
              {groundTruth?.entities && (
                <div className="card">
                  <h3 className="font-semibold text-text-primary mb-4">
                    Ground Truth ({groundTruth.entities.length} entities)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {groundTruth.entities.map((entity, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-info/20 rounded text-sm"
                      >
                        <span className="font-medium text-text-primary">
                          {entity.name}
                        </span>
                        <span className="text-text-tertiary">
                          ({entity.type})
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Scoring */}
              <div className="card">
                <h3 className="font-semibold text-text-primary mb-4">
                  Overall Score
                </h3>
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={score}
                    onChange={(e) => setScore(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-text-tertiary mt-1">
                    <span>0%</span>
                    <span className="text-text-primary font-medium">
                      {(score * 100).toFixed(0)}%
                    </span>
                    <span>100%</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-text-secondary mb-2">
                    Notes (optional)
                  </label>
                  <textarea
                    className="textarea h-24"
                    placeholder="Add any notes about this extraction..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn btn-primary w-full"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending
                    ? "Submitting..."
                    : "Submit Review"}
                </button>
              </div>

              {/* Raw Output */}
              <details className="card">
                <summary className="text-text-secondary cursor-pointer hover:text-text-primary font-medium">
                  View Raw LLM Output
                </summary>
                <pre className="mt-4 p-3 bg-bg-tertiary rounded text-xs text-text-secondary overflow-x-auto font-mono">
                  {resultData.rawOutput}
                </pre>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ReviewPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-primary">Review Queue</h1>
            <p className="text-text-secondary mt-1">Loading...</p>
          </div>
        </div>
      }
    >
      <ReviewPageContent />
    </Suspense>
  );
}

