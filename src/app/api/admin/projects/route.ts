import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/require-admin";
import { getProject, getProjects, saveProject, slugify, type Project } from "@/lib/content-store";

export async function GET() {
  const unauth = await requireAdmin();
  if (unauth) return unauth;
  try {
    const projects = await getProjects();
    return NextResponse.json({ projects });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await req.json();
  const { name, role, blurb, stack, notes, order } = body as Partial<Project>;

  if (!name || typeof name !== "string") {
    return NextResponse.json({ error: "Project name is required" }, { status: 400 });
  }

  const slug = slugify(name);

  try {
    if (await getProject(slug)) {
      return NextResponse.json(
        { error: "A project with this name already exists" },
        { status: 409 }
      );
    }

    const project: Project = {
      slug,
      order: typeof order === "number" ? order : Date.now(),
      name,
      role: role ?? "",
      blurb: blurb ?? "",
      stack: Array.isArray(stack) ? stack : [],
      notes: Array.isArray(notes) ? notes : [],
    };

    await saveProject(project);
    return NextResponse.json({ project });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
