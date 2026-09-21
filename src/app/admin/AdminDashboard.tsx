"use client";

import { useState } from "react";
import type { DocumentEntry, PdfEntry, Post, Project } from "@/lib/content-store";

type Tab = "projects" | "documents" | "posts";

const inputClass =
  "w-full bg-transparent border border-[var(--line)] rounded px-3 py-2 text-sm";
const labelClass = "text-sm text-[var(--fg-dim)] block mb-1";
const buttonClass =
  "text-sm border border-[var(--accent)] text-[var(--accent)] rounded px-4 py-2 disabled:opacity-50";

function emptyProject(): Project {
  return { slug: "", order: Date.now(), name: "", role: "", blurb: "", stack: [], notes: [] };
}


function DocumentsManager({
  documents,
  posts,
  onUpload,
  onRemove,
}: {
  documents: DocumentEntry[];
  posts: Post[];
  onUpload: (form: FormData) => void;
  onRemove: (filename: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postSlug, setPostSlug] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <form
        className="border border-[var(--line)] rounded-lg p-5 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const input = event.currentTarget.elements.namedItem("file");
          if (!(input instanceof HTMLInputElement) || !input.files?.[0] || !title.trim()) return;
          const form = new FormData();
          form.set("file", input.files[0]);
          form.set("title", title.trim());
          form.set("description", description.trim());
          form.set("postSlug", postSlug);
          onUpload(form);
          setTitle("");
          setDescription("");
          setPostSlug("");
          input.value = "";
        }}
      >
        <div>
          <label className={labelClass}>Title</label>
          <input required value={title} onChange={(event) => setTitle(event.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Description</label>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} className={inputClass} rows={3} />
        </div>
        <div>
          <label className={labelClass}>Link to a post (optional)</label>
          <select value={postSlug} onChange={(event) => setPostSlug(event.target.value)} className={inputClass}>
            <option value="">No post</option>
            {posts.map((post) => <option key={post.slug} value={post.slug}>{post.title}</option>)}
          </select>
        </div>
        <input name="file" type="file" accept="application/pdf" required className="text-sm" />
        <button type="submit" className={`self-start ${buttonClass}`}>Upload document</button>
      </form>

      <div className="flex flex-col gap-3">
        {documents.map((document) => (
          <div key={document.filename} className="border border-[var(--line)] rounded-lg p-4 flex items-center justify-between gap-4">
            <div>
              <a href={`/api/documents/${encodeURIComponent(document.filename)}`} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)]">
                {document.title}
              </a>
              <p className="text-sm text-[var(--fg-dim)]">{document.originalName}{document.postSlug ? ` · linked to ${posts.find((post) => post.slug === document.postSlug)?.title ?? document.postSlug}` : ""}</p>
            </div>
            <button onClick={() => onRemove(document.filename)} className="text-sm text-[var(--fg-dim)] hover:text-red-400">Remove</button>
          </div>
        ))}
        {documents.length === 0 && <p className="text-sm text-[var(--fg-dim)]">No standalone documents.</p>}
      </div>
    </div>
  );
}
function emptyPost(): Post {
  return {
    slug: "",
    title: "",
    date: new Date().toISOString().slice(0, 10),
    excerpt: "",
    body: "",
  };
}

export default function AdminDashboard({
  initialProjects,
  initialPosts,
  initialPdfs,
  initialDocuments,
}: {
  initialProjects: Project[];
  initialPosts: Post[];
  initialPdfs: Record<string, PdfEntry[]>;
  initialDocuments: DocumentEntry[];
}) {
  const [tab, setTab] = useState<Tab>("projects");
  const [projects, setProjects] = useState(initialProjects);
  const [posts, setPosts] = useState(initialPosts);
  const [pdfs, setPdfs] = useState(initialPdfs);
  const [documents, setDocuments] = useState(initialDocuments);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // ---- projects ----

  async function saveProject(project: Project, isNew: boolean) {
    setError("");
    setBusy(true);
    const res = await fetch(
      isNew ? "/api/admin/projects" : `/api/admin/projects/${project.slug}`,
      {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      }
    );
    const data = await res.json();
    setBusy(false);

    if (!res.ok) {
      setError(data.error ?? "Save failed.");
      return;
    }

    setProjects((prev) => {
      const without = prev.filter((p) => p.slug !== data.project.slug);
      return [...without, data.project].sort((a, b) => a.order - b.order);
    });
    setEditingProject(null);
  }

  async function removeProject(slug: string) {
    if (!confirm("Delete this project and its attached PDFs?")) return;
    const res = await fetch(`/api/admin/projects/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setProjects((prev) => prev.filter((p) => p.slug !== slug));
      setPdfs((prev) => {
        const next = { ...prev };
        delete next[slug];
        return next;
      });
    }
  }

  async function uploadPdf(slug: string, file: File) {
    setError("");
    const form = new FormData();
    form.set("file", file);
    const res = await fetch(`/api/admin/projects/${slug}/pdfs`, {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Upload failed.");
      return;
    }
    setPdfs((prev) => ({ ...prev, [slug]: [...(prev[slug] ?? []), data.entry] }));
  }

  async function removePdf(slug: string, filename: string) {
    const res = await fetch(`/api/admin/projects/${slug}/pdfs`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename }),
    });
    if (res.ok) {
      setPdfs((prev) => ({
        ...prev,
        [slug]: (prev[slug] ?? []).filter((f) => f.filename !== filename),
      }));
    }
  }

  async function uploadDocument(form: FormData) {
    setError("");
    const res = await fetch("/api/admin/documents", { method: "POST", body: form });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Upload failed.");
      return;
    }
    setDocuments((prev) => [...prev, data.entry].sort((a, b) => a.title.localeCompare(b.title)));
  }

  async function removeDocument(filename: string) {
    const res = await fetch("/api/admin/documents", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename }),
    });
    if (res.ok) setDocuments((prev) => prev.filter((document) => document.filename !== filename));
  }

  // ---- posts ----

  async function savePost(post: Post, isNew: boolean) {
    setError("");
    setBusy(true);
    const res = await fetch(isNew ? "/api/admin/posts" : `/api/admin/posts/${post.slug}`, {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    setBusy(false);

    if (!res.ok) {
      setError(data.error ?? "Save failed.");
      return;
    }

    setPosts((prev) => {
      const without = prev.filter((p) => p.slug !== data.post.slug);
      return [...without, data.post].sort((a, b) => (a.date < b.date ? 1 : -1));
    });
    setEditingPost(null);
  }

  async function removePost(slug: string) {
    if (!confirm("Delete this post?")) return;
    const res = await fetch(`/api/admin/posts/${slug}`, { method: "DELETE" });
    if (res.ok) setPosts((prev) => prev.filter((p) => p.slug !== slug));
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 border-b border-[var(--line)]">
        {(["projects", "documents", "posts"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => {
              setTab(t);
              setEditingProject(null);
              setEditingPost(null);
              setError("");
            }}
            className={`text-sm px-3 py-2 -mb-px border-b-2 capitalize ${
              tab === t
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-transparent text-[var(--fg-dim)]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      {tab === "projects" ? (
        <div className="flex flex-col gap-8">
          {editingProject ? (
            <ProjectForm
              project={editingProject}
              busy={busy}
              onCancel={() => setEditingProject(null)}
              onSave={(p) => saveProject(p, !projects.some((x) => x.slug === p.slug))}
            />
          ) : (
            <button
              onClick={() => setEditingProject(emptyProject())}
              className={`self-start ${buttonClass}`}
            >
              + New project
            </button>
          )}

          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div key={project.slug} className="border border-[var(--line)] rounded-lg p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[var(--fg-dim)]">{project.role}</p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="text-[var(--fg-dim)] hover:text-[var(--fg)]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeProject(project.slug)}
                      className="text-[var(--fg-dim)] hover:text-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[var(--line)]">
                  <p className="text-xs text-[var(--fg-dim)] mb-2">Documents</p>
                  <ul className="flex flex-col gap-1.5 mb-3">
                    {(pdfs[project.slug] ?? []).map((pdf) => (
                      <li
                        key={pdf.filename}
                        className="flex items-center justify-between text-sm"
                      >
                        <a
                          href={`/api/pdfs/${project.slug}/${encodeURIComponent(pdf.filename)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent)]"
                        >
                          {pdf.originalName}
                        </a>
                        <button
                          onClick={() => removePdf(project.slug, pdf.filename)}
                          className="text-[var(--fg-dim)] hover:text-red-400"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                    {(pdfs[project.slug] ?? []).length === 0 && (
                      <li className="text-sm text-[var(--fg-dim)]">No documents.</li>
                    )}
                  </ul>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) uploadPdf(project.slug, file);
                      e.target.value = "";
                    }}
                    className="text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : tab === "documents" ? (
        <DocumentsManager
          documents={documents}
          posts={posts}
          onUpload={uploadDocument}
          onRemove={removeDocument}
        />
      ) : (
        <div className="flex flex-col gap-8">
          {editingPost ? (
            <PostForm
              post={editingPost}
              busy={busy}
              onCancel={() => setEditingPost(null)}
              onSave={(p) => savePost(p, !posts.some((x) => x.slug === p.slug))}
            />
          ) : (
            <button
              onClick={() => setEditingPost(emptyPost())}
              className={`self-start ${buttonClass}`}
            >
              + New post
            </button>
          )}

          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="flex items-center justify-between border border-[var(--line)] rounded-lg p-4"
              >
                <div>
                  <p className="text-xs text-[var(--fg-dim)]">{post.date}</p>
                  <h3 className="font-[family-name:var(--font-display)] text-base">
                    {post.title}
                  </h3>
                </div>
                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => setEditingPost(post)}
                    className="text-[var(--fg-dim)] hover:text-[var(--fg)]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removePost(post.slug)}
                    className="text-[var(--fg-dim)] hover:text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectForm({
  project,
  busy,
  onSave,
  onCancel,
}: {
  project: Project;
  busy: boolean;
  onSave: (p: Project) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(project);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="border border-[var(--line)] rounded-lg p-5 flex flex-col gap-4"
    >
      <div>
        <label className={labelClass}>Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Role / one-liner</label>
        <input
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Description</label>
        <textarea
          rows={4}
          value={form.blurb}
          onChange={(e) => setForm({ ...form, blurb: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Stack (comma-separated)</label>
        <input
          value={form.stack.join(", ")}
          onChange={(e) =>
            setForm({
              ...form,
              stack: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
            })
          }
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Notes (one per line)</label>
        <textarea
          rows={3}
          value={form.notes.join("\n")}
          onChange={(e) =>
            setForm({
              ...form,
              notes: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean),
            })
          }
          className={inputClass}
        />
      </div>
      <div className="flex gap-3">
        <button type="submit" disabled={busy} className={buttonClass}>
          {busy ? "Saving…" : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function PostForm({
  post,
  busy,
  onSave,
  onCancel,
}: {
  post: Post;
  busy: boolean;
  onSave: (p: Post) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(post);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="border border-[var(--line)] rounded-lg p-5 flex flex-col gap-4"
    >
      <div>
        <label className={labelClass}>Title</label>
        <input
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Date</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Excerpt</label>
        <input
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Body (Markdown)</label>
        <textarea
          rows={12}
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
          className={`${inputClass} font-mono`}
        />
      </div>
      <div className="flex gap-3">
        <button type="submit" disabled={busy} className={buttonClass}>
          {busy ? "Saving…" : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
