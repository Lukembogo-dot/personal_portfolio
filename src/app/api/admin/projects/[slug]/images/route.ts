import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/require-admin";
import { addProjectImage, deleteProjectImage, getProject } from "@/lib/content-store";

const MAX_SIZE = 8 * 1024 * 1024; // 8MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;

  try {
    if (!(await getProject(slug))) {
      return NextResponse.json({ error: "Unknown project" }, { status: 404 });
    }

    const form = await req.formData();
    const file = form.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Only JPEG, PNG, or WebP images are accepted" },
        { status: 400 }
      );
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File exceeds 8MB limit" }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const entry = await addProjectImage(slug, file.name, bytes);
    return NextResponse.json({ entry });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;
  const { filename } = (await req.json()) as { filename?: string };

  if (typeof filename !== "string") {
    return NextResponse.json({ error: "filename is required" }, { status: 400 });
  }

  try {
    await deleteProjectImage(slug, filename);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
