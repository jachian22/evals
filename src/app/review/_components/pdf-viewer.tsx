"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import type { EntityState } from "./entity-row";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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

type ZoomMode = "fit-width" | "fit-page" | "custom";

export function PDFViewer({
  documentId,
  highlightedEntity,
  onTextSelect,
  onBoundingBoxClick,
  boundingBoxes = [],
}: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1);
  const [zoomMode, setZoomMode] = useState<ZoomMode>("fit-width");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const pdfUrl = `/api/pdf/${documentId}`;

  // Measure container width for fit modes
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth - 48); // Account for padding
      }
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((err: Error) => {
    console.error("PDF load error:", err);
    setError("Failed to load PDF. The file may be corrupted or unavailable.");
    setIsLoading(false);
  }, []);

  const handleZoomIn = () => {
    setZoomMode("custom");
    setScale((s) => Math.min(s + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomMode("custom");
    setScale((s) => Math.max(s - 0.25, 0.5));
  };

  const handleFitWidth = () => {
    setZoomMode("fit-width");
    setScale(1);
  };

  const handleFitPage = () => {
    setZoomMode("fit-page");
    setScale(1);
  };

  const goToPrevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const goToNextPage = () => setCurrentPage((p) => Math.min(p + 1, numPages ?? p));

  // Calculate actual scale based on zoom mode
  const getPageWidth = () => {
    if (zoomMode === "fit-width" && containerWidth > 0) {
      return containerWidth;
    }
    return undefined;
  };

  const getPageScale = () => {
    if (zoomMode === "custom") {
      return scale;
    }
    return undefined;
  };

  // Stubbed: Handle text selection for future select-to-create feature
  const handleTextSelection = useCallback(() => {
    if (!onTextSelect) return;

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const text = selection.toString().trim();
    if (!text) return;

    // Stubbed: In the future, calculate actual bounding box from selection
    // For now, just provide placeholder coordinates
    const stubBounds: BoundingBox = {
      page: currentPage,
      x: 0,
      y: 0,
      width: 100,
      height: 20,
    };

    onTextSelect(text, stubBounds);
  }, [onTextSelect, currentPage]);

  // Scroll to page if highlighted entity has bounding box
  useEffect(() => {
    if (highlightedEntity?.boundingBox) {
      setCurrentPage(highlightedEntity.boundingBox.page);
    }
  }, [highlightedEntity]);

  return (
    <div className="flex flex-col h-full bg-bg-tertiary">
      {/* Toolbar */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 py-2 bg-bg-secondary border-b border-border">
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <button
            onClick={handleZoomOut}
            className="p-1.5 rounded hover:bg-bg-elevated text-text-secondary hover:text-text-primary transition-colors"
            title="Zoom out"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <span className="text-xs text-text-secondary min-w-[4rem] text-center">
            {zoomMode === "custom"
              ? `${Math.round(scale * 100)}%`
              : zoomMode === "fit-width"
              ? "Fit Width"
              : "Fit Page"}
          </span>
          <button
            onClick={handleZoomIn}
            className="p-1.5 rounded hover:bg-bg-elevated text-text-secondary hover:text-text-primary transition-colors"
            title="Zoom in"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          <div className="w-px h-4 bg-border mx-2" />

          <button
            onClick={handleFitWidth}
            className={`px-2 py-1 rounded text-xs transition-colors ${
              zoomMode === "fit-width"
                ? "bg-accent/20 text-accent"
                : "hover:bg-bg-elevated text-text-secondary hover:text-text-primary"
            }`}
          >
            Width
          </button>
          <button
            onClick={handleFitPage}
            className={`px-2 py-1 rounded text-xs transition-colors ${
              zoomMode === "fit-page"
                ? "bg-accent/20 text-accent"
                : "hover:bg-bg-elevated text-text-secondary hover:text-text-primary"
            }`}
          >
            Page
          </button>
        </div>

        {/* Page navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevPage}
            disabled={currentPage <= 1}
            className="p-1.5 rounded hover:bg-bg-elevated text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-xs text-text-secondary">
            {currentPage} / {numPages ?? "?"}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage >= (numPages ?? 1)}
            className="p-1.5 rounded hover:bg-bg-elevated text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto p-6"
        onMouseUp={handleTextSelection}
      >
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
          <div className="flex justify-center">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center py-12">
                  <div className="text-text-tertiary text-sm">Loading PDF...</div>
                </div>
              }
              className="relative"
            >
              {isLoading ? null : (
                <div className="relative shadow-2xl rounded-lg overflow-hidden">
                  <Page
                    pageNumber={currentPage}
                    width={getPageWidth()}
                    scale={getPageScale()}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="bg-white"
                  />

                  {/* Stubbed: Bounding box overlay layer */}
                  {boundingBoxes
                    .filter((bb) => bb.box.page === currentPage)
                    .map((bb, i) => (
                      <div
                        key={i}
                        onClick={() => onBoundingBoxClick?.(bb.entityIndex)}
                        className="absolute border-2 border-accent bg-accent/10 cursor-pointer hover:bg-accent/20 transition-colors"
                        style={{
                          left: bb.box.x,
                          top: bb.box.y,
                          width: bb.box.width,
                          height: bb.box.height,
                        }}
                      />
                    ))}

                  {/* Highlighted entity box (when available) */}
                  {highlightedEntity?.boundingBox?.page === currentPage && (
                      <div
                        className="absolute border-2 border-accent bg-accent/20 pointer-events-none animate-pulse"
                        style={{
                          left: highlightedEntity.boundingBox.x,
                          top: highlightedEntity.boundingBox.y,
                          width: highlightedEntity.boundingBox.width,
                          height: highlightedEntity.boundingBox.height,
                        }}
                      />
                    )}
                </div>
              )}
            </Document>
          </div>
        )}
      </div>
    </div>
  );
}

