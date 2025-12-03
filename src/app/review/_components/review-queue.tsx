"use client";

import Link from "next/link";

interface QueueResult {
  id: string;
  document: {
    id: string;
    name: string;
    originalName: string;
  } | null;
  evalRun: {
    id: string;
    prompt: {
      name: string;
      version: number;
      node: string | null;
    } | null;
    modelConfig: {
      displayName: string;
    } | null;
  } | null;
}

interface ReviewQueueProps {
  results: QueueResult[];
  selectedResultId: string | null;
  onSelectResult: (id: string) => void;
  isLoading: boolean;
}

export function ReviewQueue({
  results,
  selectedResultId,
  onSelectResult,
  isLoading,
}: ReviewQueueProps) {
  if (isLoading) {
    return (
      <div className="p-4">
        <div className="text-text-tertiary text-sm">Loading queue...</div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-text-tertiary text-sm mb-2">No pending reviews</p>
        <Link
          href="/evals"
          className="text-accent hover:text-accent-hover text-xs"
        >
          Run an evaluation first
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-1 p-2">
      {results.map((result) => (
        <button
          key={result.id}
          onClick={() => onSelectResult(result.id)}
          className={`w-full text-left p-3 rounded-lg transition-all duration-150 ${
            selectedResultId === result.id
              ? "bg-accent/15 border border-accent/50 shadow-sm shadow-accent/10"
              : "bg-bg-tertiary/50 hover:bg-bg-elevated border border-transparent hover:border-border"
          }`}
        >
          <div className="font-medium text-text-primary text-sm truncate">
            {result.document?.name ?? "Unknown Document"}
          </div>
          <div className="text-xs text-text-tertiary mt-1 flex items-center gap-1 flex-wrap">
            {result.evalRun?.prompt?.node && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-bg-elevated text-text-secondary text-[10px]">
                {result.evalRun.prompt.node}
              </span>
            )}
            <span className="truncate">
              {result.evalRun?.modelConfig?.displayName ?? "Unknown Model"}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}

