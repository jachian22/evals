"use client";

import { useState } from "react";

interface ReviewFooterProps {
  notes: string;
  onNotesChange: (notes: string) => void;
  onApprove: () => void;
  onReject: () => void;
  isSubmitting: boolean;
  canSubmit: boolean;
  stats: {
    total: number;
    accepted: number;
    rejected: number;
    edited: number;
    pending: number;
  };
}

export function ReviewFooter({
  notes,
  onNotesChange,
  onApprove,
  onReject,
  isSubmitting,
  canSubmit,
  stats,
}: ReviewFooterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const allReviewed = stats.pending === 0 && stats.total > 0;
  const calculatedScore =
    stats.total > 0
      ? ((stats.accepted + stats.edited) / stats.total) * 100
      : 0;

  return (
    <div className="flex-shrink-0 border-t border-border bg-bg-secondary/80 backdrop-blur-sm">
      {/* Notes Section (Collapsible) */}
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="p-4 border-b border-border">
          <label className="block text-xs font-medium text-text-secondary mb-2">
            Session Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            placeholder="Add notes about this review session (e.g., 'Model struggled with two-column layout')..."
            className="textarea h-24 text-sm"
          />
        </div>
      </div>

      {/* Main Footer */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs text-text-tertiary hover:text-text-secondary transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            {isExpanded ? "Hide notes" : "Add notes"}
          </button>

          {allReviewed && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-tertiary">Calculated score:</span>
              <span
                className={`text-sm font-semibold ${
                  calculatedScore >= 80
                    ? "text-success"
                    : calculatedScore >= 50
                    ? "text-warning"
                    : "text-error"
                }`}
              >
                {calculatedScore.toFixed(0)}%
              </span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {stats.total > 0 && (
          <div className="mb-3">
            <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden flex">
              {stats.accepted > 0 && (
                <div
                  className="h-full bg-success transition-all duration-300"
                  style={{ width: `${(stats.accepted / stats.total) * 100}%` }}
                />
              )}
              {stats.edited > 0 && (
                <div
                  className="h-full bg-warning transition-all duration-300"
                  style={{ width: `${(stats.edited / stats.total) * 100}%` }}
                />
              )}
              {stats.rejected > 0 && (
                <div
                  className="h-full bg-error transition-all duration-300"
                  style={{ width: `${(stats.rejected / stats.total) * 100}%` }}
                />
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onReject}
            disabled={isSubmitting || !canSubmit}
            className="btn btn-secondary flex-1 text-sm"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </span>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Flag for Re-Labeling
              </>
            )}
          </button>
          <button
            onClick={onApprove}
            disabled={isSubmitting || !canSubmit || !allReviewed}
            className="btn btn-primary flex-1 text-sm"
            title={!allReviewed ? "Review all entities before approving" : ""}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </span>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Approve Verified
              </>
            )}
          </button>
        </div>

        {!allReviewed && stats.total > 0 && (
          <p className="text-xs text-text-tertiary text-center mt-2">
            Review all {stats.pending} pending {stats.pending === 1 ? "entity" : "entities"} to enable approval
          </p>
        )}
      </div>
    </div>
  );
}

