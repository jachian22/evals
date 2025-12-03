"use client";

import { useState, use, useEffect } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

export default function PromptDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [systemPrompt, setSystemPrompt] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [node, setNode] = useState("");
  const [hasChanges, setHasChanges] = useState(false);

  const utils = api.useUtils();
  const { data: prompt, isLoading } = api.prompts.getById.useQuery({ id });
  const { data: allVersions } = api.prompts.listAllVersions.useQuery(
    { name: prompt?.name ?? "" },
    { enabled: !!prompt?.name }
  );

  const createVersionMutation = api.prompts.createNewVersion.useMutation({
    onSuccess: (newPrompt) => {
      void utils.prompts.list.invalidate();
      void utils.prompts.listAllVersions.invalidate({ name: newPrompt.name });
      setHasChanges(false);
    },
  });

  useEffect(() => {
    if (prompt) {
      setSystemPrompt(prompt.systemPrompt);
      setUserPrompt(prompt.userPrompt);
      setNode(prompt.node ?? "");
    }
  }, [prompt]);

  useEffect(() => {
    if (prompt) {
      const changed =
        systemPrompt !== prompt.systemPrompt ||
        userPrompt !== prompt.userPrompt ||
        node !== (prompt.node ?? "");
      setHasChanges(changed);
    }
  }, [systemPrompt, userPrompt, node, prompt]);

  const handleSaveNewVersion = () => {
    if (!prompt) return;
    createVersionMutation.mutate({
      name: prompt.name,
      systemPrompt,
      userPrompt,
      node: node.trim() || undefined,
    });
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="text-text-tertiary">Loading prompt...</div>
      </div>
    );
  }

  if (!prompt) {
    return (
      <div className="p-8">
        <div className="text-error">Prompt not found</div>
        <Link href="/prompts" className="text-accent hover:text-accent-hover">
          ← Back to prompts
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link
          href="/prompts"
          className="text-text-secondary hover:text-text-primary text-sm"
        >
          ← Back to prompts
        </Link>
      </div>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            {prompt.name}
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="badge badge-info">v{prompt.version}</span>
            {prompt.node && (
              <span className="badge badge-neutral">{prompt.node}</span>
            )}
            <span className="text-text-tertiary text-sm">
              Created {new Date(prompt.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        {hasChanges && (
          <button
            onClick={handleSaveNewVersion}
            className="btn btn-primary"
            disabled={createVersionMutation.isPending}
          >
            {createVersionMutation.isPending
              ? "Saving..."
              : `Save as v${prompt.version + 1}`}
          </button>
        )}
      </div>

      <div className="grid grid-cols-4 gap-8">
        {/* Editor */}
        <div className="col-span-3 space-y-6">
          <div className="card">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Node{" "}
              <span className="text-text-tertiary font-normal">
                (experiment group for organizing evaluations)
              </span>
            </label>
            <input
              type="text"
              className="input"
              value={node}
              onChange={(e) => setNode(e.target.value)}
              placeholder="e.g., Named Entity Extraction"
            />
          </div>

          <div className="card">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              System Prompt
            </label>
            <textarea
              className="textarea h-32"
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              placeholder="Instructions for the model..."
            />
          </div>

          <div className="card">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              User Prompt{" "}
              <span className="text-text-tertiary font-normal">
                (use {"{{text}}"} for document content)
              </span>
            </label>
            <textarea
              className="textarea h-64"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="The prompt template..."
            />
          </div>
        </div>

        {/* Version History */}
        <div className="col-span-1">
          <div className="card sticky top-8">
            <h3 className="font-semibold text-text-primary mb-4">
              Version History
            </h3>
            <div className="space-y-2">
              {allVersions?.map((v) => (
                <Link
                  key={v.id}
                  href={`/prompts/${v.id}`}
                  className={`block p-3 rounded-lg transition-colors ${
                    v.id === id
                      ? "bg-accent/10 border border-accent"
                      : "bg-bg-tertiary hover:bg-bg-elevated border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-primary">
                      v{v.version}
                    </span>
                    {v.id === id && (
                      <span className="text-xs text-accent">Current</span>
                    )}
                  </div>
                  <div className="text-xs text-text-tertiary mt-1">
                    {new Date(v.createdAt).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

