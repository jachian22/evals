"use client";

import { useState, useEffect, useRef } from "react";

const ENTITY_TYPES = [
  "Applicant",
  "Company",
  "Position",
  "Skill",
  "Education",
  "School",
  "Degree",
  "Date",
  "Location",
  "Other",
] as const;

interface AddEntityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string, type: string) => void;
  initialText?: string;
}

export function AddEntityModal({
  isOpen,
  onClose,
  onAdd,
  initialText = "",
}: AddEntityModalProps) {
  const [name, setName] = useState(initialText);
  const [type, setType] = useState<string>(ENTITY_TYPES[0]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setName(initialText);
      setType(ENTITY_TYPES[0]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, initialText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim(), type);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-bg-secondary border border-border rounded-xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-text-primary">
            Add Missing Entity
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-bg-elevated text-text-tertiary hover:text-text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Entity Name
            </label>
            <input
              ref={inputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Google, John Doe, Python"
              className="input"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Entity Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {ENTITY_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    type === t
                      ? "bg-accent text-bg-primary"
                      : "bg-bg-tertiary text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1"
              disabled={!name.trim()}
            >
              Add Entity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

