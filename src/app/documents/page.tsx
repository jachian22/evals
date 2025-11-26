"use client";

import { useState } from "react";
import { api } from "@/trpc/react";

export default function DocumentsPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadName, setUploadName] = useState("");

  const utils = api.useUtils();
  const { data, isLoading } = api.documents.list.useQuery({ limit: 50 });

  const uploadMutation = api.documents.upload.useMutation({
    onSuccess: () => {
      void utils.documents.list.invalidate();
      setUploadName("");
    },
  });

  const deleteMutation = api.documents.delete.useMutation({
    onSuccess: () => {
      void utils.documents.list.invalidate();
    },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const buffer = await file.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");

      await uploadMutation.mutateAsync({
        name: uploadName || file.name.replace(/\.pdf$/i, ""),
        originalName: file.name,
        base64Content: base64,
      });
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary">Documents</h1>
        <p className="text-text-secondary mt-1">
          Upload and manage PDF documents for evaluation
        </p>
      </div>

      {/* Upload Section */}
      <div className="card mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Upload New Document
        </h2>
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm text-text-secondary mb-2">
              Document Name (optional)
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter a name for this document"
              value={uploadName}
              onChange={(e) => setUploadName(e.target.value)}
            />
          </div>
          <div>
            <label className="btn btn-primary cursor-pointer">
              {isUploading ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Uploading...
                </>
              ) : (
                <>
                  <span>📄</span>
                  Choose PDF
                </>
              )}
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="card">
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          All Documents
        </h2>

        {isLoading ? (
          <div className="text-center py-8 text-text-tertiary">Loading...</div>
        ) : data?.documents.length === 0 ? (
          <div className="text-center py-8 text-text-tertiary">
            <p>No documents yet</p>
            <p className="text-sm">Upload a PDF to get started</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Original File</th>
                  <th>Pages</th>
                  <th>Uploaded</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.documents.map((doc) => (
                  <tr key={doc.id}>
                    <td className="font-medium">{doc.name}</td>
                    <td className="text-text-secondary">{doc.originalName}</td>
                    <td>{doc.pageCount}</td>
                    <td className="text-text-secondary">
                      {new Date(doc.createdAt).toLocaleDateString()}
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <a
                          href={`/documents/${doc.id}`}
                          className="btn btn-ghost text-sm py-1 px-2"
                        >
                          View
                        </a>
                        <button
                          onClick={() =>
                            deleteMutation.mutate({ id: doc.id })
                          }
                          className="btn btn-danger text-sm py-1 px-2"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

