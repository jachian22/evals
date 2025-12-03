"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

function SetNodeModal({
  promptName,
  currentNode,
  onClose,
  onSave,
  isPending,
}: {
  promptName: string;
  currentNode: string | null;
  onClose: () => void;
  onSave: (node: string | null) => void;
  isPending: boolean;
}) {
  const [nodeValue, setNodeValue] = useState(currentNode ?? "");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-bg-secondary rounded-xl p-6 w-full max-w-md border border-border shadow-xl">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Set Node for &ldquo;{promptName}&rdquo;
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          This will update the node for all versions of this prompt.
        </p>
        <input
          type="text"
          className="input w-full mb-4"
          placeholder="e.g., Named Entity Extraction"
          value={nodeValue}
          onChange={(e) => setNodeValue(e.target.value)}
          autoFocus
        />
        <div className="flex gap-3 justify-end">
          <button onClick={onClose} className="btn btn-secondary" disabled={isPending}>
            Cancel
          </button>
          <button
            onClick={() => onSave(nodeValue.trim() || null)}
            className="btn btn-primary"
            disabled={isPending}
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PromptsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [node, setNode] = useState("");
  const [systemPrompt, setSystemPrompt] = useState(
    "You are an expert at extracting named entities from documents. Extract all entities and their types from the provided text. Return the results as JSON."
  );
  const [userPrompt, setUserPrompt] = useState(
    'Extract all named entities from the following document text. For each entity, provide its name, type (PERSON, ORGANIZATION, LOCATION, DATE, MONEY, etc.), and any relevant context.\n\nDocument:\n{{text}}\n\nRespond with JSON in this format:\n{\n  "entities": [\n    {"name": "...", "type": "...", "contexts": ["..."]}\n  ]\n}'
  );
  const [editingNodePrompt, setEditingNodePrompt] = useState<{
    name: string;
    node: string | null;
  } | null>(null);

  const utils = api.useUtils();
  const { data: prompts, isLoading } = api.prompts.list.useQuery();

  const createMutation = api.prompts.create.useMutation({
    onSuccess: () => {
      void utils.prompts.list.invalidate();
      setShowCreateForm(false);
      setNewName("");
      setNode("");
    },
  });

  const deleteMutation = api.prompts.deleteAllVersions.useMutation({
    onSuccess: () => {
      void utils.prompts.list.invalidate();
    },
  });

  const updateNodeMutation = api.prompts.updateNode.useMutation({
    onSuccess: () => {
      void utils.prompts.list.invalidate();
      setEditingNodePrompt(null);
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    createMutation.mutate({
      name: newName.trim(),
      systemPrompt,
      userPrompt,
      node: node.trim() || undefined,
    });
  };

  const promptsWithoutNode = prompts?.filter((p) => !p.node) ?? [];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Prompts</h1>
          <p className="text-text-secondary mt-1">
            Create and version prompts for entity extraction
          </p>
        </div>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="btn btn-primary"
        >
          {showCreateForm ? "Cancel" : "+ New Prompt"}
        </button>
      </div>

      {/* Warning for prompts without nodes */}
      {promptsWithoutNode.length > 0 && !showCreateForm && (
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-warning text-lg">⚠</span>
            <div>
              <p className="text-sm font-medium text-warning">
                {promptsWithoutNode.length} prompt{promptsWithoutNode.length !== 1 ? "s" : ""} without a node
              </p>
              <p className="text-sm text-text-secondary mt-1">
                Prompts without nodes will appear as &ldquo;Ungrouped&rdquo; in the Evaluations tab.
                Click &ldquo;Set Node&rdquo; on the prompts below to organize them.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Create Form */}
      {showCreateForm && (
        <form onSubmit={handleCreate} className="card mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Create New Prompt Template
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-text-secondary mb-2">
                  Template Name *
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="e.g., Entity Extraction v1"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-2">
                  Node{" "}
                  <span className="text-text-tertiary">(experiment group)</span>
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="e.g., Named Entity Extraction"
                  value={node}
                  onChange={(e) => setNode(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                System Prompt
              </label>
              <textarea
                className="textarea h-24"
                placeholder="Instructions for the model..."
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                User Prompt{" "}
                <span className="text-text-tertiary">
                  (use {"{{text}}"} for document content)
                </span>
              </label>
              <textarea
                className="textarea h-48"
                placeholder="The prompt template..."
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={createMutation.isPending}
            >
              {createMutation.isPending ? "Creating..." : "Create Prompt"}
            </button>
          </div>
        </form>
      )}

      {/* Prompts List */}
      {isLoading ? (
        <div className="text-center py-8 text-text-tertiary">Loading...</div>
      ) : prompts?.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-text-tertiary mb-2">No prompts yet</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="text-accent hover:text-accent-hover"
          >
            Create your first prompt template
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {prompts?.map((prompt) => (
            <div
              key={prompt.id}
              className={`card ${!prompt.node ? "border-warning/30" : ""}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Link
                    href={`/prompts/${prompt.id}`}
                    className="text-lg font-semibold text-text-primary hover:text-accent transition-colors"
                  >
                    {prompt.name}
                  </Link>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="badge badge-info">v{prompt.version}</span>
                    {prompt.node ? (
                      <button
                        onClick={() =>
                          setEditingNodePrompt({ name: prompt.name, node: prompt.node })
                        }
                        className="badge badge-neutral hover:bg-bg-elevated transition-colors cursor-pointer"
                        title="Click to edit node"
                      >
                        {prompt.node}
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          setEditingNodePrompt({ name: prompt.name, node: null })
                        }
                        className="text-sm text-warning hover:text-warning/80 font-medium"
                      >
                        + Set Node
                      </button>
                    )}
                    {prompt.allVersions.length > 1 && (
                      <span className="text-sm text-text-tertiary">
                        {prompt.allVersions.length} versions
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/prompts/${prompt.id}`}
                    className="btn btn-secondary text-sm py-1 px-3"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteMutation.mutate({ name: prompt.name })}
                    className="btn btn-danger text-sm py-1 px-3"
                  >
                    Delete All
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs text-text-tertiary mb-1">System Prompt</div>
                  <div className="bg-bg-tertiary rounded p-3 text-sm text-text-secondary font-mono line-clamp-2">
                    {prompt.systemPrompt}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary mb-1">User Prompt</div>
                  <div className="bg-bg-tertiary rounded p-3 text-sm text-text-secondary font-mono line-clamp-3">
                    {prompt.userPrompt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Set Node Modal */}
      {editingNodePrompt && (
        <SetNodeModal
          promptName={editingNodePrompt.name}
          currentNode={editingNodePrompt.node}
          onClose={() => setEditingNodePrompt(null)}
          onSave={(newNode) =>
            updateNodeMutation.mutate({
              name: editingNodePrompt.name,
              node: newNode,
            })
          }
          isPending={updateNodeMutation.isPending}
        />
      )}
    </div>
  );
}
