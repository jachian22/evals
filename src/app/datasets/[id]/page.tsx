"use client";

import { useState, use } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

interface Entity {
  name: string;
  type: string;
  contexts?: string[];
}

interface GroundTruth {
  entities: Entity[];
}

export default function DatasetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [showAddDoc, setShowAddDoc] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState("");
  const [editingGroundTruth, setEditingGroundTruth] = useState<string | null>(
    null
  );
  const [groundTruthJson, setGroundTruthJson] = useState("");

  const utils = api.useUtils();
  const { data: dataset, isLoading } = api.datasets.getById.useQuery({ id });
  const { data: allDocuments } = api.documents.list.useQuery({ limit: 100 });

  const addDocMutation = api.datasets.addDocument.useMutation({
    onSuccess: () => {
      void utils.datasets.getById.invalidate({ id });
      setShowAddDoc(false);
      setSelectedDocId("");
    },
  });

  const removeDocMutation = api.datasets.removeDocument.useMutation({
    onSuccess: () => {
      void utils.datasets.getById.invalidate({ id });
    },
  });

  const updateGroundTruthMutation = api.datasets.updateGroundTruth.useMutation({
    onSuccess: () => {
      void utils.datasets.getById.invalidate({ id });
      setEditingGroundTruth(null);
      setGroundTruthJson("");
    },
  });

  const availableDocs = allDocuments?.documents.filter(
    (doc) => !dataset?.documents.some((dd) => dd.document.id === doc.id)
  );

  const handleAddDocument = () => {
    if (!selectedDocId) return;
    addDocMutation.mutate({
      datasetId: id,
      documentId: selectedDocId,
    });
  };

  const handleEditGroundTruth = (docId: string, currentGt: GroundTruth | null) => {
    setEditingGroundTruth(docId);
    setGroundTruthJson(
      currentGt
        ? JSON.stringify(currentGt, null, 2)
        : JSON.stringify(
            {
              entities: [
                { name: "Example Entity", type: "PERSON", contexts: [] },
              ],
            },
            null,
            2
          )
    );
  };

  const handleSaveGroundTruth = (docId: string) => {
    try {
      const parsed = JSON.parse(groundTruthJson) as GroundTruth;
      updateGroundTruthMutation.mutate({
        datasetId: id,
        documentId: docId,
        groundTruth: parsed,
      });
    } catch {
      alert("Invalid JSON format");
    }
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="text-text-tertiary">Loading dataset...</div>
      </div>
    );
  }

  if (!dataset) {
    return (
      <div className="p-8">
        <div className="text-error">Dataset not found</div>
        <Link href="/datasets" className="text-accent hover:text-accent-hover">
          ← Back to datasets
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link
          href="/datasets"
          className="text-text-secondary hover:text-text-primary text-sm"
        >
          ← Back to datasets
        </Link>
      </div>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            {dataset.name}
          </h1>
          {dataset.description && (
            <p className="text-text-secondary mt-1">{dataset.description}</p>
          )}
        </div>
        <button
          onClick={() => setShowAddDoc(!showAddDoc)}
          className="btn btn-primary"
        >
          {showAddDoc ? "Cancel" : "+ Add Document"}
        </button>
      </div>

      {/* Add Document Form */}
      {showAddDoc && (
        <div className="card mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Add Document to Dataset
          </h2>
          <div className="flex gap-4">
            <select
              className="input flex-1"
              value={selectedDocId}
              onChange={(e) => setSelectedDocId(e.target.value)}
            >
              <option value="">Select a document...</option>
              {availableDocs?.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name} ({doc.originalName})
                </option>
              ))}
            </select>
            <button
              onClick={handleAddDocument}
              className="btn btn-primary"
              disabled={!selectedDocId || addDocMutation.isPending}
            >
              Add
            </button>
          </div>
          {availableDocs?.length === 0 && (
            <p className="text-sm text-text-tertiary mt-2">
              No available documents.{" "}
              <Link href="/documents" className="text-accent">
                Upload some first
              </Link>
              .
            </p>
          )}
        </div>
      )}

      {/* Documents List */}
      <div className="card">
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Documents ({dataset.documents.length})
        </h2>

        {dataset.documents.length === 0 ? (
          <div className="text-center py-8 text-text-tertiary">
            <p>No documents in this dataset</p>
            <button
              onClick={() => setShowAddDoc(true)}
              className="text-accent hover:text-accent-hover text-sm"
            >
              Add your first document
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {dataset.documents.map((dd) => {
              const gt = dd.groundTruth as GroundTruth | null;
              const isEditing = editingGroundTruth === dd.document.id;

              return (
                <div
                  key={dd.id}
                  className="bg-bg-tertiary rounded-lg p-4 border border-border"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Link
                        href={`/documents/${dd.document.id}`}
                        className="font-medium text-text-primary hover:text-accent"
                      >
                        {dd.document.name}
                      </Link>
                      <p className="text-sm text-text-tertiary">
                        {dd.document.originalName} • {dd.document.pageCount}{" "}
                        pages
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          removeDocMutation.mutate({
                            datasetId: id,
                            documentId: dd.document.id,
                          })
                        }
                        className="btn btn-danger text-sm py-1 px-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Ground Truth Section */}
                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-secondary">
                        Ground Truth
                      </span>
                      {!isEditing && (
                        <button
                          onClick={() =>
                            handleEditGroundTruth(dd.document.id, gt)
                          }
                          className="btn btn-ghost text-sm py-1 px-2"
                        >
                          {gt ? "Edit" : "Add"}
                        </button>
                      )}
                    </div>

                    {isEditing ? (
                      <div className="space-y-3">
                        <textarea
                          className="textarea h-48 font-mono text-xs"
                          value={groundTruthJson}
                          onChange={(e) => setGroundTruthJson(e.target.value)}
                          placeholder="Enter ground truth JSON..."
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSaveGroundTruth(dd.document.id)}
                            className="btn btn-primary text-sm"
                            disabled={updateGroundTruthMutation.isPending}
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingGroundTruth(null)}
                            className="btn btn-secondary text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : gt ? (
                      <div className="bg-bg-secondary rounded p-3">
                        <div className="text-sm text-text-secondary mb-2">
                          {gt.entities.length} entities defined
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {gt.entities.slice(0, 5).map((entity, i) => (
                            <span
                              key={i}
                              className="badge badge-info text-xs"
                            >
                              {entity.name} ({entity.type})
                            </span>
                          ))}
                          {gt.entities.length > 5 && (
                            <span className="badge badge-neutral text-xs">
                              +{gt.entities.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-text-tertiary italic">
                        No ground truth defined
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

