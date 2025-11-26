declare module "pdf-parse" {
  interface PDFData {
    numpages: number;
    numrender: number;
    info: Record<string, unknown>;
    metadata: Record<string, unknown> | null;
    text: string;
    version: string;
  }

  function pdfParse(
    dataBuffer: Buffer,
    options?: {
      pagerender?: (pageData: unknown) => Promise<string>;
      max?: number;
      version?: string;
    }
  ): Promise<PDFData>;

  export default pdfParse;
}

// Also declare the lib path for webpack alias resolution
declare module "pdf-parse/lib/pdf-parse.js" {
  export * from "pdf-parse";
  export { default } from "pdf-parse";
}

