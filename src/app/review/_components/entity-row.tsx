"use client";

import { useState, useRef, useEffect } from "react";

export type EntityStatus = "pending" | "accepted" | "rejected" | "edited";

export interface Entity {
  name: string;
  type: string;
  contexts?: string[];
  boundingBox?: {
    page: number;
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface EntityState extends Entity {
  status: EntityStatus;
  correctedName?: string;
}

interface EntityRowProps {
  entity: EntityState;
  index: number;
  onAccept: (index: number) => void;
  onReject: (index: number) => void;
  onEdit: (index: number, correctedName: string) => void;
  onHover?: (entity: EntityState | null) => void;
  onClick?: (entity: EntityState) => void;
  isHighlighted?: boolean;
}

const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  applicant: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  name: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  person: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  company: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
  organization: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
  employer: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
  skill: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
  technology: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
  date: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30" },
  education: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
  school: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
  degree: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
  location: { bg: "bg-rose-500/20", text: "text-rose-400", border: "border-rose-500/30" },
  title: { bg: "bg-indigo-500/20", text: "text-indigo-400", border: "border-indigo-500/30" },
  position: { bg: "bg-indigo-500/20", text: "text-indigo-400", border: "border-indigo-500/30" },
  role: { bg: "bg-indigo-500/20", text: "text-indigo-400", border: "border-indigo-500/30" },
};

function getTypeColors(type: string) {
  const normalizedType = type.toLowerCase();
  return TYPE_COLORS[normalizedType] ?? {
    bg: "bg-zinc-500/20",
    text: "text-zinc-400",
    border: "border-zinc-500/30",
  };
}

export function EntityRow({
  entity,
  index,
  onAccept,
  onReject,
  onEdit,
  onHover,
  onClick,
  isHighlighted,
}: EntityRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(entity.correctedName ?? entity.name);
  const inputRef = useRef<HTMLInputElement>(null);
  const colors = getTypeColors(entity.type);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleStartEdit = () => {
    setEditValue(entity.correctedName ?? entity.name);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() && editValue !== entity.name) {
      onEdit(index, editValue.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditValue(entity.correctedName ?? entity.name);
    }
  };

  const statusStyles = {
    pending: "bg-bg-tertiary border-border",
    accepted: "bg-success/10 border-success/30",
    rejected: "bg-error/10 border-error/30",
    edited: "bg-warning/10 border-warning/30",
  };

  const displayName = entity.correctedName ?? entity.name;

  return (
    <div
      className={`group relative rounded-lg border p-3 transition-all duration-150 ${statusStyles[entity.status]} ${
        isHighlighted ? "ring-2 ring-accent ring-offset-1 ring-offset-bg-primary" : ""
      }`}
      onMouseEnter={() => onHover?.(entity)}
      onMouseLeave={() => onHover?.(null)}
      onClick={() => onClick?.(entity)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${colors.bg} ${colors.text} border ${colors.border}`}
            >
              {entity.type}
            </span>
            {entity.status !== "pending" && (
              <span
                className={`text-[10px] font-medium uppercase tracking-wide ${
                  entity.status === "accepted"
                    ? "text-success"
                    : entity.status === "rejected"
                    ? "text-error"
                    : "text-warning"
                }`}
              >
                {entity.status}
              </span>
            )}
          </div>

          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={handleSaveEdit}
              onKeyDown={handleKeyDown}
              className="w-full px-2 py-1 bg-bg-secondary border-2 border-warning rounded text-text-primary text-sm font-medium focus:outline-none focus:border-accent"
            />
          ) : (
            <div className="font-medium text-text-primary text-sm truncate">
              {displayName}
              {entity.correctedName && entity.correctedName !== entity.name && (
                <span className="text-text-tertiary text-xs ml-2 line-through">
                  {entity.name}
                </span>
              )}
            </div>
          )}

          {entity.contexts && entity.contexts.length > 0 && (
            <p className="text-xs text-text-tertiary mt-1 truncate">
              &ldquo;{entity.contexts[0]}&rdquo;
            </p>
          )}
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAccept(index);
            }}
            className={`p-1.5 rounded transition-colors ${
              entity.status === "accepted"
                ? "bg-success/30 text-success"
                : "hover:bg-success/20 text-text-tertiary hover:text-success"
            }`}
            title="Accept"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onReject(index);
            }}
            className={`p-1.5 rounded transition-colors ${
              entity.status === "rejected"
                ? "bg-error/30 text-error"
                : "hover:bg-error/20 text-text-tertiary hover:text-error"
            }`}
            title="Reject"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleStartEdit();
            }}
            className="p-1.5 rounded hover:bg-warning/20 text-text-tertiary hover:text-warning transition-colors"
            title="Edit"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

