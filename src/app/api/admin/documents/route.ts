import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/require-admin";
import { addDocument, deleteDocument } from "@/lib/content-store";

const MAX_SIZE = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  try {
    const form = await req.formData();
    const file = form.get("file");
    const title = form.get("title");
    const description = form.get("description");
    const postSlug = form.get("postSlug");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF files are accepted" }, { status: 400 });
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File exceeds 10MB limit" }, { status: 400 });
    }
    if (typeof title !== "string" || !title.trim()) {
      return NextResponse.json({ error: "Document title is required" }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const entry = await addDocument(
      file.name,
      title.trim(),
      typeof description === "string" ? description.trim() : "",
      typeof postSlug === "string" ? postSlug : "",
      bytes
    );
    return NextResponse.json({ entry });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { filename } = (await req.json()) as { filename?: string };
  if (typeof filename !== "string") {
    return NextResponse.json({ error: "filename is required" }, { status: 400 });
  }

  try {
    await deleteDocument(filename);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
