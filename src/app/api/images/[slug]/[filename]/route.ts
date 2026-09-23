import { NextRequest, NextResponse } from "next/server";
import { getProjectImageBytes } from "@/lib/content-store";

const EXT_TO_TYPE: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string; filename: string }> }
) {
  const { slug, filename } = await params;
  const decoded = decodeURIComponent(filename);
  const ext = decoded.split(".").pop()?.toLowerCase() ?? "";

  try {
    const bytes = await getProjectImageBytes(slug, decoded);
    if (!bytes) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type": EXT_TO_TYPE[ext] ?? "application/octet-stream",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
