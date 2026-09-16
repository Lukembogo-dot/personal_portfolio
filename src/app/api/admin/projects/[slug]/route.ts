import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/require-admin";
import {
  deleteProject,
  deleteProjectPdf,
  getProject,
  getProjectPdfs,
  saveProject,
  type Project,
} from "@/lib/content-store";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;
  const body = await req.json();
  const { name, role, blurb, stack, notes, order } = body as Partial<Project>;

  try {
    const existing = await getProject(slug);
    if (!existing) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const project: Project = {
      slug,
      order: typeof order === "number" ? order : existing.order,
      name: name ?? existing.name,
      role: role ?? existing.role,
      blurb: blurb ?? existing.blurb,
      stack: Array.isArray(stack) ? stack : existing.stack,
      notes: Array.isArray(notes) ? notes : existing.notes,
    };

    await saveProject(project);
    return NextResponse.json({ project });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;

  try {
    // Cascade: remove any attached PDFs first, then the project itself.
    const pdfs = await getProjectPdfs(slug);
    for (const pdf of pdfs) {
      await deleteProjectPdf(slug, pdf.filename);
    }
    await deleteProject(slug);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
