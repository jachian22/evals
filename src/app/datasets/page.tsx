"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

export default function DatasetsPage() {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  const utils = api.useUtils();
  const { data: datasets, isLoading } = api.datasets.list.useQuery();

  const createMutation = api.datasets.create.useMutation({
    onSuccess: () => {
      void utils.datasets.list.invalidate();
      setNewName("");
      setNewDescription("");
      setShowCreateForm(false);
    },
  });

  const deleteMutation = api.datasets.delete.useMutation({
    onSuccess: () => {
      void utils.datasets.list.invalidate();
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    createMutation.mutate({
      name: newName.trim(),
      description: newDescription.trim() || undefined,
    });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Datasets</h1>
          <p className="text-text-secondary mt-1">
            Organize documents with ground truth labels for evaluation
          </p>
        </div>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="btn btn-primary"
        >
          {showCreateForm ? "Cancel" : "+ New Dataset"}
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <form onSubmit={handleCreate} className="card mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Create New Dataset
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Name *
              </label>
              <input
                type="text"
                className="input"
                placeholder="e.g., Contract Documents Q1"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Description
              </label>
              <textarea
                className="textarea h-24"
                placeholder="Optional description..."
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={createMutation.isPending}
            >
              {createMutation.isPending ? "Creating..." : "Create Dataset"}
            </button>
          </div>
        </form>
      )}

      {/* Datasets List */}
      {isLoading ? (
        <div className="text-center py-8 text-text-tertiary">Loading...</div>
      ) : datasets?.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-text-tertiary mb-2">No datasets yet</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="text-accent hover:text-accent-hover"
          >
            Create your first dataset
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {datasets?.map((dataset) => (
            <div key={dataset.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Link
                    href={`/datasets/${dataset.id}`}
                    className="text-lg font-semibold text-text-primary hover:text-accent transition-colors"
                  >
                    {dataset.name}
                  </Link>
                  {dataset.description && (
                    <p className="text-sm text-text-secondary mt-1">
                      {dataset.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => deleteMutation.mutate({ id: dataset.id })}
                  className="btn btn-danger text-sm py-1 px-2"
                >
                  Delete
                </button>
              </div>
              <div className="flex gap-4 text-sm">
                <div>
                  <span className="text-text-tertiary">Documents: </span>
                  <span className="text-text-primary font-medium">
                    {dataset._count.documents}
                  </span>
                </div>
                <div>
                  <span className="text-text-tertiary">Eval Runs: </span>
                  <span className="text-text-primary font-medium">
                    {dataset._count.evalRuns}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  href={`/datasets/${dataset.id}`}
                  className="text-sm text-accent hover:text-accent-hover"
                >
                  Manage documents & ground truth →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

