"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

export default function PromptsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [systemPrompt, setSystemPrompt] = useState(
    "You are an expert at extracting named entities from documents. Extract all entities and their types from the provided text. Return the results as JSON."
  );
  const [userPrompt, setUserPrompt] = useState(
    'Extract all named entities from the following document text. For each entity, provide its name, type (PERSON, ORGANIZATION, LOCATION, DATE, MONEY, etc.), and any relevant context.\n\nDocument:\n{{text}}\n\nRespond with JSON in this format:\n{\n  "entities": [\n    {"name": "...", "type": "...", "contexts": ["..."]}\n  ]\n}'
  );

  const utils = api.useUtils();
  const { data: prompts, isLoading } = api.prompts.list.useQuery();

  const createMutation = api.prompts.create.useMutation({
    onSuccess: () => {
      void utils.prompts.list.invalidate();
      setShowCreateForm(false);
      setNewName("");
    },
  });

  const deleteMutation = api.prompts.deleteAllVersions.useMutation({
    onSuccess: () => {
      void utils.prompts.list.invalidate();
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    createMutation.mutate({
      name: newName.trim(),
      systemPrompt,
      userPrompt,
    });
  };

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

      {/* Create Form */}
      {showCreateForm && (
        <form onSubmit={handleCreate} className="card mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Create New Prompt Template
          </h2>
          <div className="space-y-4">
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
            <div key={prompt.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Link
                    href={`/prompts/${prompt.id}`}
                    className="text-lg font-semibold text-text-primary hover:text-accent transition-colors"
                  >
                    {prompt.name}
                  </Link>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="badge badge-info">
                      v{prompt.version}
                    </span>
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
                  <div className="text-xs text-text-tertiary mb-1">
                    System Prompt
                  </div>
                  <div className="bg-bg-tertiary rounded p-3 text-sm text-text-secondary font-mono line-clamp-2">
                    {prompt.systemPrompt}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary mb-1">
                    User Prompt
                  </div>
                  <div className="bg-bg-tertiary rounded p-3 text-sm text-text-secondary font-mono line-clamp-3">
                    {prompt.userPrompt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

