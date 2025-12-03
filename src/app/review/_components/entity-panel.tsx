"use client";

import { useState } from "react";
import { EntityRow, type EntityState } from "./entity-row";
import { AddEntityModal } from "./add-entity-modal";

interface EntityPanelProps {
  documentName: string;
  modelName: string;
  promptName: string;
  promptNode?: string | null;
  entities: EntityState[];
  onEntityAccept: (index: number) => void;
  onEntityReject: (index: number) => void;
  onEntityEdit: (index: number, correctedName: string) => void;
  onEntityAdd: (name: string, type: string) => void;
  onEntityHover?: (entity: EntityState | null) => void;
  onEntityClick?: (entity: EntityState) => void;
  highlightedEntityIndex?: number | null;
}

export function EntityPanel({
  documentName,
  modelName,
  promptName,
  promptNode,
  entities,
  onEntityAccept,
  onEntityReject,
  onEntityEdit,
  onEntityAdd,
  onEntityHover,
  onEntityClick,
  highlightedEntityIndex,
}: EntityPanelProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const acceptedCount = entities.filter((e) => e.status === "accepted").length;
  const rejectedCount = entities.filter((e) => e.status === "rejected").length;
  const editedCount = entities.filter((e) => e.status === "edited").length;
  const pendingCount = entities.filter((e) => e.status === "pending").length;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-border bg-bg-secondary/50">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-text-primary truncate text-lg">
              {documentName}
            </h2>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              {promptNode && (
                <span className="badge badge-neutral text-xs">{promptNode}</span>
              )}
              <span className="text-xs text-text-tertiary">
                {modelName} • {promptName}
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="btn btn-secondary text-xs py-1.5 px-3 flex-shrink-0"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Entity
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs">
          <span className="text-text-tertiary">
            <span className="font-medium text-text-secondary">{entities.length}</span> total
          </span>
          {pendingCount > 0 && (
            <span className="text-text-tertiary">
              <span className="font-medium text-text-secondary">{pendingCount}</span> pending
            </span>
          )}
          {acceptedCount > 0 && (
            <span className="text-success/80">
              <span className="font-medium text-success">{acceptedCount}</span> accepted
            </span>
          )}
          {rejectedCount > 0 && (
            <span className="text-error/80">
              <span className="font-medium text-error">{rejectedCount}</span> rejected
            </span>
          )}
          {editedCount > 0 && (
            <span className="text-warning/80">
              <span className="font-medium text-warning">{editedCount}</span> edited
            </span>
          )}
        </div>
      </div>

      {/* Entity List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {entities.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-text-tertiary text-sm mb-2">No entities extracted</p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="text-accent hover:text-accent-hover text-sm"
            >
              Add the first entity manually
            </button>
          </div>
        ) : (
          entities.map((entity, index) => (
            <EntityRow
              key={`${entity.name}-${entity.type}-${index}`}
              entity={entity}
              index={index}
              onAccept={onEntityAccept}
              onReject={onEntityReject}
              onEdit={onEntityEdit}
              onHover={onEntityHover}
              onClick={onEntityClick}
              isHighlighted={highlightedEntityIndex === index}
            />
          ))
        )}
      </div>

      {/* Add Entity Modal */}
      <AddEntityModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={onEntityAdd}
      />
    </div>
  );
}

