"use client";

import { useState } from "react";
import { api } from "@/trpc/react";

export default function ModelsPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [provider, setProvider] = useState<"openai" | "anthropic" | "google">("openai");
  const [modelId, setModelId] = useState("");
  const [displayName, setDisplayName] = useState("");

  const utils = api.useUtils();
  const { data: models, isLoading } = api.models.list.useQuery();
  const { data: availableModels } = api.models.getAvailableModels.useQuery();

  const createMutation = api.models.create.useMutation({
    onSuccess: () => {
      void utils.models.list.invalidate();
      setShowAddForm(false);
      setModelId("");
      setDisplayName("");
    },
  });

  const toggleMutation = api.models.toggleActive.useMutation({
    onSuccess: () => {
      void utils.models.list.invalidate();
    },
  });

  const seedMutation = api.models.seedDefaults.useMutation({
    onSuccess: () => {
      void utils.models.list.invalidate();
    },
  });

  const deleteMutation = api.models.delete.useMutation({
    onSuccess: () => {
      void utils.models.list.invalidate();
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modelId || !displayName) return;
    createMutation.mutate({
      provider,
      modelId,
      displayName,
    });
  };

  const openaiModels = models?.filter((m) => m.provider === "openai") ?? [];
  const anthropicModels = models?.filter((m) => m.provider === "anthropic") ?? [];
  const googleModels = models?.filter((m) => m.provider === "google") ?? [];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Models</h1>
          <p className="text-text-secondary mt-1">
            Configure which LLM models are available for evaluations
          </p>
        </div>
        <div className="flex gap-2">
          {models?.length === 0 && (
            <button
              onClick={() => seedMutation.mutate()}
              className="btn btn-secondary"
              disabled={seedMutation.isPending}
            >
              {seedMutation.isPending ? "Seeding..." : "Seed Default Models"}
            </button>
          )}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-primary"
          >
            {showAddForm ? "Cancel" : "+ Add Model"}
          </button>
        </div>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <form onSubmit={handleCreate} className="card mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Add New Model
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Provider
              </label>
              <select
                className="input"
                value={provider}
                onChange={(e) =>
                  setProvider(e.target.value as "openai" | "anthropic" | "google")
                }
              >
                <option value="openai">OpenAI</option>
                <option value="anthropic">Anthropic</option>
                <option value="google">Google</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Model ID
              </label>
              <input
                type="text"
                className="input"
                placeholder="e.g., gpt-4o"
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                list="model-suggestions"
                required
              />
              <datalist id="model-suggestions">
                {availableModels?.[provider]?.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </datalist>
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Display Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="e.g., GPT-4o"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-4"
            disabled={createMutation.isPending}
          >
            {createMutation.isPending ? "Adding..." : "Add Model"}
          </button>
        </form>
      )}

      {isLoading ? (
        <div className="text-center py-8 text-text-tertiary">Loading...</div>
      ) : models?.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-text-tertiary mb-4">No models configured</p>
          <button
            onClick={() => seedMutation.mutate()}
            className="btn btn-primary"
            disabled={seedMutation.isPending}
          >
            {seedMutation.isPending ? "Seeding..." : "Seed Default Models"}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {/* OpenAI */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#10a37f]/20 flex items-center justify-center">
                <span className="text-lg">🟢</span>
              </div>
              <h2 className="text-lg font-semibold text-text-primary">
                OpenAI
              </h2>
            </div>
            {openaiModels.length === 0 ? (
              <p className="text-text-tertiary text-sm">
                No OpenAI models configured
              </p>
            ) : (
              <div className="space-y-2">
                {openaiModels.map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-text-primary">
                        {model.displayName}
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {model.modelId}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleMutation.mutate({ id: model.id })}
                        className={`btn text-sm py-1 px-3 ${
                          model.isActive ? "btn-primary" : "btn-secondary"
                        }`}
                      >
                        {model.isActive ? "Active" : "Inactive"}
                      </button>
                      <button
                        onClick={() => deleteMutation.mutate({ id: model.id })}
                        className="btn btn-danger text-sm py-1 px-2"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Anthropic */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#cc785c]/20 flex items-center justify-center">
                <span className="text-lg">🟤</span>
              </div>
              <h2 className="text-lg font-semibold text-text-primary">
                Anthropic
              </h2>
            </div>
            {anthropicModels.length === 0 ? (
              <p className="text-text-tertiary text-sm">
                No Anthropic models configured
              </p>
            ) : (
              <div className="space-y-2">
                {anthropicModels.map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-text-primary">
                        {model.displayName}
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {model.modelId}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleMutation.mutate({ id: model.id })}
                        className={`btn text-sm py-1 px-3 ${
                          model.isActive ? "btn-primary" : "btn-secondary"
                        }`}
                      >
                        {model.isActive ? "Active" : "Inactive"}
                      </button>
                      <button
                        onClick={() => deleteMutation.mutate({ id: model.id })}
                        className="btn btn-danger text-sm py-1 px-2"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Google */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#4285f4]/20 flex items-center justify-center">
                <span className="text-lg">🔵</span>
              </div>
              <h2 className="text-lg font-semibold text-text-primary">
                Google
              </h2>
            </div>
            {googleModels.length === 0 ? (
              <p className="text-text-tertiary text-sm">
                No Google models configured
              </p>
            ) : (
              <div className="space-y-2">
                {googleModels.map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-text-primary">
                        {model.displayName}
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {model.modelId}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleMutation.mutate({ id: model.id })}
                        className={`btn text-sm py-1 px-3 ${
                          model.isActive ? "btn-primary" : "btn-secondary"
                        }`}
                      >
                        {model.isActive ? "Active" : "Inactive"}
                      </button>
                      <button
                        onClick={() => deleteMutation.mutate({ id: model.id })}
                        className="btn btn-danger text-sm py-1 px-2"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

