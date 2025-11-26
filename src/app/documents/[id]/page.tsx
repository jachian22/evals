"use client";

import { use } from "react";
import Link from "next/link";
import { api } from "@/trpc/react";

export default function DocumentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: document, isLoading } = api.documents.getById.useQuery({ id });

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="text-text-tertiary">Loading document...</div>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="p-8">
        <div className="text-error">Document not found</div>
        <Link href="/documents" className="text-accent hover:text-accent-hover">
          ← Back to documents
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link
          href="/documents"
          className="text-text-secondary hover:text-text-primary text-sm"
        >
          ← Back to documents
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">{document.name}</h1>
        <p className="text-text-secondary mt-1">
          {document.originalName} • {document.pageCount} pages
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="metric-card">
          <div className="metric-value">{document.pageCount}</div>
          <div className="metric-label">Pages</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">
            {document.extractedText.split(/\s+/).length.toLocaleString()}
          </div>
          <div className="metric-label">Words</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">
            {document.extractedText.length.toLocaleString()}
          </div>
          <div className="metric-label">Characters</div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Extracted Text
        </h2>
        <div className="bg-bg-tertiary rounded-lg p-4 max-h-[600px] overflow-y-auto">
          <pre className="text-sm text-text-secondary whitespace-pre-wrap font-mono">
            {document.extractedText || "(No text extracted)"}
          </pre>
        </div>
      </div>
    </div>
  );
}

