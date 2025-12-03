import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";
import { readFile, fileExists } from "@/server/services/storage";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const document = await db.document.findUnique({
      where: { id },
      select: { storagePath: true, originalName: true },
    });

    if (!document) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    const exists = await fileExists(document.storagePath);
    if (!exists) {
      return NextResponse.json(
        { error: "PDF file not found on disk" },
        { status: 404 }
      );
    }

    const pdfBuffer = await readFile(document.storagePath);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${document.originalName}"`,
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error serving PDF:", error);
    return NextResponse.json(
      { error: "Failed to serve PDF" },
      { status: 500 }
    );
  }
}

