import { api, HydrateClient } from "@/trpc/server";
import Link from "next/link";

export default async function Dashboard() {
  const [recentEvals, datasets, prompts, reviewStats] = await Promise.all([
    api.evals.list({ limit: 5 }),
    api.datasets.list(),
    api.prompts.list(),
    api.reviews.getStats({}),
  ]);

  return (
    <HydrateClient>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-1">
            Overview of your PDF evaluation pipeline
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="metric-card">
            <div className="metric-value">{datasets.length}</div>
            <div className="metric-label">Datasets</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">{prompts.length}</div>
            <div className="metric-label">Prompt Templates</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">{reviewStats.pendingReviews}</div>
            <div className="metric-label">Pending Reviews</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              {reviewStats.totalReviews > 0
                ? `${(reviewStats.averageScore * 100).toFixed(0)}%`
                : "—"}
            </div>
            <div className="metric-label">Avg Review Score</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Link href="/documents" className="card hover:border-accent/50 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📄</span>
              <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                Upload Documents
              </h3>
            </div>
            <p className="text-sm text-text-secondary">
              Add PDF documents to extract and evaluate
            </p>
          </Link>

          <Link href="/prompts" className="card hover:border-accent/50 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">✏️</span>
              <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                Create Prompt
              </h3>
            </div>
            <p className="text-sm text-text-secondary">
              Design prompts for entity extraction
            </p>
          </Link>

          <Link href="/evals" className="card hover:border-accent/50 transition-colors group">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🧪</span>
              <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                Run Evaluation
              </h3>
            </div>
            <p className="text-sm text-text-secondary">
              Test prompts against datasets
            </p>
          </Link>
        </div>

        {/* Recent Evaluations */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">
              Recent Evaluations
            </h2>
            <Link
              href="/evals"
              className="text-sm text-accent hover:text-accent-hover"
            >
              View all →
            </Link>
          </div>

          {recentEvals.runs.length === 0 ? (
            <div className="text-center py-8 text-text-tertiary">
              <p>No evaluations yet</p>
              <Link href="/evals" className="text-accent hover:text-accent-hover text-sm">
                Run your first evaluation
              </Link>
            </div>
          ) : (
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Node</th>
                    <th>Dataset</th>
                    <th>Prompt</th>
                    <th>Model</th>
                    <th>Status</th>
                    <th>F1 Score</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEvals.runs.map((run) => {
                    const score = run.aggregateScore as {
                      microF1?: number;
                    } | null;
                    return (
                      <tr key={run.id}>
                        <td>
                          {run.prompt?.node ? (
                            <span className="badge badge-neutral text-xs">
                              {run.prompt.node}
                            </span>
                          ) : (
                            <span className="text-text-tertiary">—</span>
                          )}
                        </td>
                        <td className="font-medium">{run.dataset?.name ?? "Unknown"}</td>
                        <td>
                          {run.prompt?.name ?? "Unknown"} v{run.prompt?.version ?? "?"}
                        </td>
                        <td>{run.modelConfig?.displayName ?? "Unknown Model"}</td>
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
                        <td>
                          {score?.microF1 !== undefined
                            ? `${(score.microF1 * 100).toFixed(1)}%`
                            : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </HydrateClient>
  );
}
