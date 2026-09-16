import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/require-admin";
import { getPost, savePost, slugify, type Post } from "@/lib/content-store";

export async function POST(req: NextRequest) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  const body = await req.json();
  const { title, date, excerpt, body: postBody } = body as Partial<Post>;

  if (!title || typeof title !== "string") {
    return NextResponse.json({ error: "Post title is required" }, { status: 400 });
  }

  const slug = slugify(title);

  try {
    if (await getPost(slug)) {
      return NextResponse.json(
        { error: "A post with this title already exists" },
        { status: 409 }
      );
    }

    const post: Post = {
      slug,
      title,
      date: date || new Date().toISOString().slice(0, 10),
      excerpt: excerpt ?? "",
      body: postBody ?? "",
    };

    await savePost(post);
    return NextResponse.json({ post });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
