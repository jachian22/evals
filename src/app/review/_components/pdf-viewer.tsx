"use client";

import { useState, useRef, useEffect } from "react";
import type { EntityState } from "./entity-row";

interface BoundingBox {
  page: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface PDFViewerProps {
  documentId: string;
  highlightedEntity?: EntityState | null;
  onTextSelect?: (text: string, bounds: BoundingBox) => void;
  onBoundingBoxClick?: (entityIndex: number) => void;
  boundingBoxes?: Array<{ entityIndex: number; box: BoundingBox }>;
}

export function PDFViewer({
  documentId,
  // These props are stubbed for future bounding box support
  highlightedEntity: _highlightedEntity,
  onTextSelect: _onTextSelect,
  onBoundingBoxClick: _onBoundingBoxClick,
  boundingBoxes: _boundingBoxes = [],
}: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const pdfUrl = `/api/pdf/${documentId}`;

  // Handle iframe load
  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleError = () => {
    setIsLoading(false);
    setError("Failed to load PDF. The file may be unavailable.");
  };

  // Zoom controls
  const handleZoomIn = () => setZoom((z) => Math.min(z + 25, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 25, 50));
  const handleZoomReset = () => setZoom(100);

  // Check if PDF exists
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    fetch(pdfUrl, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) {
          setError("PDF not found");
          setIsLoading(false);
        }
      })
      .catch(() => {
        setError("Failed to check PDF availability");
        setIsLoading(false);
      });
  }, [pdfUrl]);

  return (
    <div className="flex flex-col h-full bg-bg-tertiary">
      {/* Toolbar */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 py-2 bg-bg-secondary border-b border-border">
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 50}
            className="p-1.5 rounded hover:bg-bg-elevated text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Zoom out"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <span className="text-xs text-text-secondary min-w-[4rem] text-center">
            {zoom}%
          </span>
          <button
            onClick={handleZoomIn}
            disabled={zoom >= 200}
            className="p-1.5 rounded hover:bg-bg-elevated text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Zoom in"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          <div className="w-px h-4 bg-border mx-2" />

          <button
            onClick={handleZoomReset}
            className={`px-2 py-1 rounded text-xs transition-colors ${
              zoom === 100
                ? "bg-accent/20 text-accent"
                : "hover:bg-bg-elevated text-text-secondary hover:text-text-primary"
            }`}
          >
            Reset
          </button>
        </div>

        {/* Open in new tab */}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded hover:bg-bg-elevated text-text-secondary hover:text-text-primary transition-colors"
          title="Open in new tab"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto p-4">
        {error ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-error mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <p className="text-text-secondary text-sm">{error}</p>
            </div>
          </div>
        ) : (
          <div 
            className="flex justify-center"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-bg-tertiary">
                <div className="text-text-tertiary text-sm">Loading PDF...</div>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={pdfUrl}
              className="w-full bg-white rounded-lg shadow-2xl"
              style={{ 
                height: "calc(100vh - 200px)",
                minHeight: "600px",
                maxWidth: "800px",
              }}
              onLoad={handleLoad}
              onError={handleError}
              title="PDF Document"
            />
          </div>
        )}
      </div>
    </div>
  );
}
