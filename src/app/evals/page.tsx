"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

interface AggregateScore {
  microF1?: number;
  microPrecision?: number;
  microRecall?: number;
  avgF1?: number;
}

export default function EvalsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const utils = api.useUtils();
  const { data: evalRuns, isLoading } = api.evals.list.useQuery({ limit: 50 });
  const { data: datasets } = api.datasets.list.useQuery();
  const { data: prompts } = api.prompts.list.useQuery();
  const { data: models } = api.models.listActive.useQuery();

  const createMutation = api.evals.create.useMutation({
    onSuccess: (run) => {
      void utils.evals.list.invalidate();
      setShowCreateForm(false);
      executeMutation.mutate({ id: run.id });
    },
  });

  const executeMutation = api.evals.execute.useMutation({
    onSuccess: () => {
      void utils.evals.list.invalidate();
    },
  });

  const deleteMutation = api.evals.delete.useMutation({
    onSuccess: () => {
      void utils.evals.list.invalidate();
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDataset || !selectedPrompt || !selectedModel) return;
    createMutation.mutate({
      datasetId: selectedDataset,
      promptId: selectedPrompt,
      modelConfigId: selectedModel,
    });
  };

  const handleRerun = (runId: string) => {
    executeMutation.mutate({ id: runId });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Evaluations</h1>
          <p className="text-text-secondary mt-1">
            Run and compare model evaluations on your datasets
          </p>
        </div>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="btn btn-primary"
        >
          {showCreateForm ? "Cancel" : "+ New Evaluation"}
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <form onSubmit={handleCreate} className="card mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Run New Evaluation
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Dataset *
              </label>
              <select
                className="input"
                value={selectedDataset}
                onChange={(e) => setSelectedDataset(e.target.value)}
                required
              >
                <option value="">Select dataset...</option>
                {datasets?.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d._count.documents} docs)
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Prompt *
              </label>
              <select
                className="input"
                value={selectedPrompt}
                onChange={(e) => setSelectedPrompt(e.target.value)}
                required
              >
                <option value="">Select prompt...</option>
                {prompts?.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} v{p.version}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Model *
              </label>
              <select
                className="input"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                required
              >
                <option value="">Select model...</option>
                {models?.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.displayName} ({m.provider})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {(!datasets?.length || !prompts?.length || !models?.length) && (
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-3 mb-4">
              <p className="text-sm text-warning">
                {!datasets?.length && (
                  <span>
                    No datasets available.{" "}
                    <Link href="/datasets" className="underline">
                      Create one first
                    </Link>
                    .{" "}
                  </span>
                )}
                {!prompts?.length && (
                  <span>
                    No prompts available.{" "}
                    <Link href="/prompts" className="underline">
                      Create one first
                    </Link>
                    .{" "}
                  </span>
                )}
                {!models?.length && (
                  <span>
                    No active models.{" "}
                    <Link href="/models" className="underline">
                      Configure models first
                    </Link>
                    .
                  </span>
                )}
              </p>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              createMutation.isPending ||
              executeMutation.isPending ||
              !selectedDataset ||
              !selectedPrompt ||
              !selectedModel
            }
          >
            {createMutation.isPending || executeMutation.isPending
              ? "Running..."
              : "Run Evaluation"}
          </button>
        </form>
      )}

      {/* Eval Runs List */}
      {isLoading ? (
        <div className="text-center py-8 text-text-tertiary">Loading...</div>
      ) : evalRuns?.runs.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-text-tertiary mb-2">No evaluations yet</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="text-accent hover:text-accent-hover"
          >
            Run your first evaluation
          </button>
        </div>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Dataset</th>
                <th>Prompt</th>
                <th>Model</th>
                <th>Status</th>
                <th>F1</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>Results</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {evalRuns?.runs.map((run) => {
                const score = run.aggregateScore as AggregateScore | null;
                return (
                  <tr key={run.id}>
                    <td className="font-medium">{run.dataset.name}</td>
                    <td>
                      {run.prompt.name} v{run.prompt.version}
                    </td>
                    <td>
                      <span className="badge badge-neutral">
                        {run.modelConfig.provider}
                      </span>{" "}
                      {run.modelConfig.displayName}
                    </td>
                    <td>
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
                    </td>
                    <td className="font-mono">
                      {score?.microF1 !== undefined
                        ? `${(score.microF1 * 100).toFixed(1)}%`
                        : "—"}
                    </td>
                    <td className="font-mono text-text-secondary">
                      {score?.microPrecision !== undefined
                        ? `${(score.microPrecision * 100).toFixed(1)}%`
                        : "—"}
                    </td>
                    <td className="font-mono text-text-secondary">
                      {score?.microRecall !== undefined
                        ? `${(score.microRecall * 100).toFixed(1)}%`
                        : "—"}
                    </td>
                    <td>{run._count.results}</td>
                    <td>
                      <div className="flex gap-2">
                        <Link
                          href={`/evals/${run.id}`}
                          className="btn btn-ghost text-sm py-1 px-2"
                        >
                          View
                        </Link>
                        {run.status === "failed" && (
                          <button
                            onClick={() => handleRerun(run.id)}
                            className="btn btn-secondary text-sm py-1 px-2"
                            disabled={executeMutation.isPending}
                          >
                            Retry
                          </button>
                        )}
                        <button
                          onClick={() => deleteMutation.mutate({ id: run.id })}
                          className="btn btn-danger text-sm py-1 px-2"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

