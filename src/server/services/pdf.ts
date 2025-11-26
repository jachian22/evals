// pdf-parse aliased in next.config.js to avoid the test file loading issue
// See: https://gitlab.com/nicklasmoore/pdf-parse/-/issues/24
import pdfParse from "pdf-parse";
import path from "path";
import crypto from "crypto";
import { saveFile, readFile, deleteFile } from "./storage";

export interface PDFExtractionResult {
  text: string;
  pageCount: number;
  storagePath: string;
}

export async function extractTextFromPDF(
  buffer: Buffer,
  originalName: string
): Promise<PDFExtractionResult> {
  // Generate unique filename
  const hash = crypto.randomBytes(8).toString("hex");
  const ext = path.extname(originalName);
  const baseName = path.basename(originalName, ext);
  const storageName = `${baseName}-${hash}${ext}`;

  // Save the file using storage service
  const storagePath = await saveFile(buffer, storageName);

  // Parse PDF using pdf-parse v1.x simple function API
  try {
    const data = await pdfParse(buffer);

    return {
      text: data.text,
      pageCount: data.numpages,
      storagePath,
    };
  } catch (error) {
    // Clean up file if parsing fails
    await deleteFile(storagePath);
    throw new Error(
      `Failed to parse PDF: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

export async function getPDFBuffer(storagePath: string): Promise<Buffer> {
  return readFile(storagePath);
}

export { deleteFile as deletePDF };
