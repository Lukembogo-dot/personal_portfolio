import { NextRequest, NextResponse } from "next/server";
import { getProjectPdfBytes } from "@/lib/content-store";

// Public download endpoint — no auth required, this just serves a file
// that's already linked from the public project page.
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string; filename: string }> }
) {
  const { slug, filename } = await params;

  try {
    const bytes = await getProjectPdfBytes(slug, decodeURIComponent(filename));
    if (!bytes) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename.split("__").slice(1).join("__") || filename}"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
