"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

const UNGROUPED_KEY = "Ungrouped";

interface AggregateScore {
  microF1?: number;
  microPrecision?: number;
  microRecall?: number;
  avgF1?: number;
}

type EvalRun = {
  id: string;
  status: string;
  aggregateScore: unknown;
  dataset: { id: string; name: string };
  prompt: { id: string; name: string; version: number; node: string | null };
  modelConfig: { id: string; displayName: string; provider: string };
  _count: { results: number };
};

type GroupedRuns = Record<string, EvalRun[]>;

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function EvalRunRow({
  run,
  onRerun,
  onDelete,
  isExecuting,
}: {
  run: EvalRun;
  onRerun: (id: string) => void;
  onDelete: (id: string) => void;
  isExecuting: boolean;
}) {
  const score = run.aggregateScore as AggregateScore | null;

  return (
    <tr>
      <td className="font-medium">{run.dataset.name}</td>
      <td>
        {run.prompt.name} v{run.prompt.version}
      </td>
      <td>
        <span className="badge badge-neutral">{run.modelConfig.provider}</span>{" "}
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
        {score?.microF1 !== undefined ? `${(score.microF1 * 100).toFixed(1)}%` : "—"}
      </td>
      <td className="font-mono text-text-secondary">
        {score?.microPrecision !== undefined
          ? `${(score.microPrecision * 100).toFixed(1)}%`
          : "—"}
      </td>
      <td className="font-mono text-text-secondary">
        {score?.microRecall !== undefined ? `${(score.microRecall * 100).toFixed(1)}%` : "—"}
      </td>
      <td>{run._count.results}</td>
      <td>
        <div className="flex gap-2">
          <Link href={`/evals/${run.id}`} className="btn btn-ghost text-sm py-1 px-2">
            View
          </Link>
          {run.status === "failed" && (
            <button
              onClick={() => onRerun(run.id)}
              className="btn btn-secondary text-sm py-1 px-2"
              disabled={isExecuting}
            >
              Retry
            </button>
          )}
          <button onClick={() => onDelete(run.id)} className="btn btn-danger text-sm py-1 px-2">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

function NodeGroup({
  nodeName,
  runs,
  defaultExpanded,
  onRerun,
  onDelete,
  isExecuting,
}: {
  nodeName: string;
  runs: EvalRun[];
  defaultExpanded: boolean;
  onRerun: (id: string) => void;
  onDelete: (id: string) => void;
  isExecuting: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const isUngrouped = nodeName === UNGROUPED_KEY;

  return (
    <div className="mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          isUngrouped
            ? "bg-warning/10 hover:bg-warning/20 border border-warning/30"
            : "bg-surface-secondary hover:bg-surface-tertiary"
        }`}
      >
        <ChevronIcon expanded={expanded} />
        <span className={`font-semibold ${isUngrouped ? "text-warning" : "text-text-primary"}`}>
          {nodeName}
        </span>
        <span className="text-text-tertiary text-sm">
          ({runs.length} run{runs.length !== 1 ? "s" : ""})
        </span>
        {isUngrouped && (
          <Link
            href="/prompts"
            onClick={(e) => e.stopPropagation()}
            className="ml-auto text-sm text-warning hover:text-warning/80 underline"
          >
            Assign nodes in Prompts →
          </Link>
        )}
      </button>

      {expanded && (
        <div className="mt-2 table-container">
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
              {runs.map((run) => (
                <EvalRunRow
                  key={run.id}
                  run={run}
                  onRerun={onRerun}
                  onDelete={onDelete}
                  isExecuting={isExecuting}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
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

  // Group runs by node
  const groupedRuns = useMemo(() => {
    if (!evalRuns?.runs) return {} as GroupedRuns;

    const groups: GroupedRuns = {};
    for (const run of evalRuns.runs) {
      const node = run.prompt.node ?? UNGROUPED_KEY;
      groups[node] ??= [];
      groups[node].push(run);
    }

    return groups;
  }, [evalRuns?.runs]);

  // Sort node names alphabetically, but keep "Ungrouped" at the end
  const sortedNodeNames = useMemo(() => {
    const names = Object.keys(groupedRuns);
    return names.sort((a, b) => {
      if (a === UNGROUPED_KEY) return 1;
      if (b === UNGROUPED_KEY) return -1;
      return a.localeCompare(b);
    });
  }, [groupedRuns]);

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

  const handleDelete = (runId: string) => {
    deleteMutation.mutate({ id: runId });
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

      {/* Eval Runs List - Grouped by Node */}
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
        <div className="space-y-2">
          {sortedNodeNames.map((nodeName) => (
            <NodeGroup
              key={nodeName}
              nodeName={nodeName}
              runs={groupedRuns[nodeName]!}
              defaultExpanded={false}
              onRerun={handleRerun}
              onDelete={handleDelete}
              isExecuting={executeMutation.isPending}
            />
          ))}
        </div>
      )}
    </div>
  );
}
