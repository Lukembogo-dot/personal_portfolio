import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/require-admin";
import { deletePost, getPost, savePost, type Post } from "@/lib/content-store";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const { slug } = await params;
  const body = await req.json();
  const { title, date, excerpt, body: postBody } = body as Partial<Post>;

  try {
    const existing = await getPost(slug);
    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const post: Post = {
      slug,
      title: title ?? existing.title,
      date: date ?? existing.date,
      excerpt: excerpt ?? existing.excerpt,
      body: postBody ?? existing.body,
    };

    await savePost(post);
    return NextResponse.json({ post });
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
    await deletePost(slug);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
