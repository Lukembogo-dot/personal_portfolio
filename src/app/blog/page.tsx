import Link from "next/link";
import { getPosts } from "@/lib/content-store";

export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <p className="text-sm text-[var(--fg-dim)] mb-10">Blog</p>

      {posts.length === 0 ? (
        <p className="text-sm text-[var(--fg-dim)]">No posts published yet.</p>
      ) : (
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="py-8 border-b border-[var(--line)] group"
            >
              <p className="text-xs text-[var(--fg-dim)]">{formatDate(post.date)}</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="mt-2 text-sm text-[var(--fg-dim)]">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
