"use client";

import { use } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

interface Entity {
  name: string;
  type: string;
  contexts?: string[];
}

interface ParsedOutput {
  entities?: Entity[];
}

interface AutoScore {
  precision?: number;
  recall?: number;
  f1?: number;
  truePositives?: number;
  falsePositives?: number;
  falseNegatives?: number;
}

interface AggregateScore {
  microF1?: number;
  microPrecision?: number;
  microRecall?: number;
  avgF1?: number;
  totalTruePositives?: number;
  totalFalsePositives?: number;
  totalFalseNegatives?: number;
}

export default function EvalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: run, isLoading } = api.evals.getById.useQuery({ id });

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="text-text-tertiary">Loading evaluation...</div>
      </div>
    );
  }

  if (!run) {
    return (
      <div className="p-8">
        <div className="text-error">Evaluation not found</div>
        <Link href="/evals" className="text-accent hover:text-accent-hover">
          ← Back to evaluations
        </Link>
      </div>
    );
  }

  const score = run.aggregateScore as AggregateScore | null;

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link
          href="/evals"
          className="text-text-secondary hover:text-text-primary text-sm"
        >
          ← Back to evaluations
        </Link>
      </div>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Evaluation Results
          </h1>
          <div className="flex items-center gap-4 mt-2">
            {run.prompt.node && (
              <>
                <span className="badge badge-neutral">{run.prompt.node}</span>
                <span className="text-text-tertiary">•</span>
              </>
            )}
            <span className="text-text-secondary">{run.dataset.name}</span>
            <span className="text-text-tertiary">•</span>
            <span className="text-text-secondary">
              {run.prompt?.name ?? "Unknown"} v{run.prompt?.version ?? "?"}
            </span>
            <span className="text-text-tertiary">•</span>
            <span className="text-text-secondary">
              {run.modelConfig?.displayName ?? "Unknown Model"}
            </span>
          </div>
        </div>
        <span
          className={`badge ${
            run.status === "completed"
              ? "badge-success"
              : run.status === "failed"
                ? "badge-error"
                : run.status === "running"
                  ? "badge-warning"
                  : "badge-neutral"
          }`}
        >
          {run.status}
        </span>
      </div>

      {/* Aggregate Scores */}
      {score && (
        <div className="grid grid-cols-6 gap-4 mb-8">
          <div className="metric-card">
            <div className="metric-value text-accent">
              {score.microF1 !== undefined
                ? `${(score.microF1 * 100).toFixed(1)}%`
                : "—"}
            </div>
            <div className="metric-label">Micro F1</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              {score.microPrecision !== undefined
                ? `${(score.microPrecision * 100).toFixed(1)}%`
                : "—"}
            </div>
            <div className="metric-label">Micro Precision</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              {score.microRecall !== undefined
                ? `${(score.microRecall * 100).toFixed(1)}%`
                : "—"}
            </div>
            <div className="metric-label">Micro Recall</div>
          </div>
          <div className="metric-card">
            <div className="metric-value text-success">
              {score.totalTruePositives ?? 0}
            </div>
            <div className="metric-label">True Positives</div>
          </div>
          <div className="metric-card">
            <div className="metric-value text-warning">
              {score.totalFalsePositives ?? 0}
            </div>
            <div className="metric-label">False Positives</div>
          </div>
          <div className="metric-card">
            <div className="metric-value text-error">
              {score.totalFalseNegatives ?? 0}
            </div>
            <div className="metric-label">False Negatives</div>
          </div>
        </div>
      )}

      {/* Results by Document */}
      <div className="card">
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Results by Document ({run.results.length})
        </h2>

        <div className="space-y-4">
          {run.results.map((result) => {
            const resultScore = result.autoScore as AutoScore | null;
            const parsed = result.parsedOutput as ParsedOutput | null;
            const entities = parsed?.entities ?? [];

            return (
              <div
                key={result.id}
                className="bg-bg-tertiary rounded-lg p-4 border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Link
                      href={`/documents/${result.document.id}`}
                      className="font-medium text-text-primary hover:text-accent"
                    >
                      {result.document.name}
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-text-tertiary mt-1">
                      <span>{result.latencyMs}ms</span>
                      {result.tokenUsage && (
                        <span>
                          {(result.tokenUsage as { input: number }).input} in /{" "}
                          {(result.tokenUsage as { output: number }).output} out
                          tokens
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {resultScore && (
                      <div className="text-right">
                        <div className="text-sm font-medium text-text-primary">
                          F1: {(resultScore.f1! * 100).toFixed(1)}%
                        </div>
                        <div className="text-xs text-text-tertiary">
                          P: {(resultScore.precision! * 100).toFixed(0)}% / R:{" "}
                          {(resultScore.recall! * 100).toFixed(0)}%
                        </div>
                      </div>
                    )}
                    {result.humanReview ? (
                      <span className="badge badge-success">Reviewed</span>
                    ) : (
                      <Link
                        href={`/review?resultId=${result.id}`}
                        className="btn btn-secondary text-sm py-1 px-3"
                      >
                        Review
                      </Link>
                    )}
                  </div>
                </div>

                {/* Extracted Entities */}
                <div className="border-t border-border pt-3 mt-3">
                  <div className="text-sm text-text-secondary mb-2">
                    Extracted Entities ({entities.length})
                  </div>
                  {entities.length === 0 ? (
                    <p className="text-sm text-text-tertiary italic">
                      No entities extracted
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {entities.map((entity, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-bg-secondary rounded text-sm"
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
                  )}
                </div>

                {/* Raw Output (collapsible) */}
                <details className="mt-3">
                  <summary className="text-sm text-text-tertiary cursor-pointer hover:text-text-secondary">
                    View raw output
                  </summary>
                  <pre className="mt-2 p-3 bg-bg-secondary rounded text-xs text-text-secondary overflow-x-auto font-mono">
                    {result.rawOutput}
                  </pre>
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

