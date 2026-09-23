"use client";

import Image from "next/image";
import { useState } from "react";
import type { Certification, DocumentEntry, PdfEntry, Post, Project } from "@/lib/content-store";

type Tab = "projects" | "documents" | "certifications" | "posts";

const inputClass =
  "w-full bg-transparent border border-[var(--line)] rounded px-3 py-2 text-sm";
const labelClass = "text-sm text-[var(--fg-dim)] block mb-1";
const buttonClass =
  "text-sm border border-[var(--accent)] text-[var(--accent)] rounded px-4 py-2 disabled:opacity-50";

function emptyProject(): Project {
  return {
    slug: "",
    order: Date.now(),
    name: "",
    role: "",
    blurb: "",
    stack: [],
    notes: [],
    links: [],
  };
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
          <input
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Description</label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className={inputClass}
            rows={3}
          />
        </div>
        <div>
          <label className={labelClass}>Link to a post (optional)</label>
          <select
            value={postSlug}
            onChange={(event) => setPostSlug(event.target.value)}
            className={inputClass}
          >
            <option value="">No post</option>
            {posts.map((post) => (
              <option key={post.slug} value={post.slug}>
                {post.title}
              </option>
            ))}
          </select>
        </div>
        <input name="file" type="file" accept="application/pdf" required className="text-sm" />
        <button type="submit" className={`self-start ${buttonClass}`}>
          Upload document
        </button>
      </form>

      <div className="flex flex-col gap-3">
        {documents.map((document) => (
          <div
            key={document.filename}
            className="border border-[var(--line)] rounded-lg p-4 flex items-center justify-between gap-4"
          >
            <div>
              <a
                href={`/api/documents/${encodeURIComponent(document.filename)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)]"
              >
                {document.title}
              </a>
              <p className="text-sm text-[var(--fg-dim)]">
                {document.originalName}
                {document.postSlug
                  ? ` · linked to ${posts.find((post) => post.slug === document.postSlug)?.title ?? document.postSlug}`
                  : ""}
              </p>
            </div>
            <button
              onClick={() => onRemove(document.filename)}
              className="text-sm text-[var(--fg-dim)] hover:text-red-400"
            >
              Remove
            </button>
          </div>
        ))}
        {documents.length === 0 && (
          <p className="text-sm text-[var(--fg-dim)]">No standalone documents.</p>
        )}
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

function CertificationsManager({
  certifications,
  onSave,
  onRemove,
}: {
  certifications: Certification[];
  onSave: (form: FormData, slug?: string) => void;
  onRemove: (slug: string) => void;
}) {
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");
  const [credentialId, setCredentialId] = useState("");
  const [badgeLabel, setBadgeLabel] = useState("");
  const [badgeUrl, setBadgeUrl] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <form
        className="border border-[var(--line)] rounded-lg p-5 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const input = event.currentTarget.elements.namedItem("certificate");
          if (!(input instanceof HTMLInputElement) || !title.trim() || !issuer.trim()) return;
          const form = new FormData();
          if (input.files?.[0]) form.set("file", input.files[0]);
          form.set("title", title);
          form.set("issuer", issuer);
          form.set("date", date);
          form.set("credentialId", credentialId);
          form.set("badgeLabel", badgeLabel);
          form.set("badgeUrl", badgeUrl);
          onSave(form, editingSlug ?? undefined);
          setTitle("");
          setIssuer("");
          setDate("");
          setCredentialId("");
          setBadgeLabel("");
          setBadgeUrl("");
          input.value = "";
          setEditingSlug(null);
        }}
      >
        <div>
          <label className={labelClass}>Certification title</label>
          <input required value={title} onChange={(event) => setTitle(event.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Issuing organisation</label>
          <input required value={issuer} onChange={(event) => setIssuer(event.target.value)} className={inputClass} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Date (optional)</label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Credential ID (optional)</label>
            <input value={credentialId} onChange={(event) => setCredentialId(event.target.value)} className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Badge link title (optional)</label>
          <input placeholder="View Credly badge" value={badgeLabel} onChange={(event) => setBadgeLabel(event.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Badge link URL (optional)</label>
          <input type="url" placeholder="https://www.credly.com/..." value={badgeUrl} onChange={(event) => setBadgeUrl(event.target.value)} className={inputClass} />
        </div>
        <input name="certificate" type="file" accept="application/pdf" className="text-sm" />
        <div className="flex gap-3">
          <button type="submit" className={buttonClass}>
            {editingSlug ? "Save changes" : "Add certification"}
          </button>
          {editingSlug && (
            <button
              type="button"
              onClick={() => {
                setEditingSlug(null);
                setTitle("");
                setIssuer("");
                setDate("");
                setCredentialId("");
                setBadgeLabel("");
                setBadgeUrl("");
              }}
              className="text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="flex flex-col gap-3">
        {certifications.map((certification) => (
          <div key={certification.slug} className="border border-[var(--line)] rounded-lg p-4 flex items-center justify-between gap-4">
            <div>
              <p className="font-[family-name:var(--font-display)]">{certification.title}</p>
              <p className="text-sm text-[var(--fg-dim)]">{certification.issuer}{certification.pdfFilename ? " · PDF attached" : ""}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <button
                type="button"
                onClick={() => {
                  setEditingSlug(certification.slug);
                  setTitle(certification.title);
                  setIssuer(certification.issuer);
                  setDate(certification.date);
                  setCredentialId(certification.credentialId);
                  setBadgeLabel(certification.badgeLabel);
                  setBadgeUrl(certification.badgeUrl);
                }}
                className="text-[var(--fg-dim)] hover:text-[var(--fg)]"
              >
                Edit
              </button>
              <button type="button" onClick={() => onRemove(certification.slug)} className="text-[var(--fg-dim)] hover:text-red-400">
                Remove
              </button>
            </div>
          </div>
        ))}
        {certifications.length === 0 && <p className="text-sm text-[var(--fg-dim)]">No certifications added yet.</p>}
      </div>
    </div>
  );
}

export default function AdminDashboard({
  initialProjects,
  initialPosts,
  initialPdfs,
  initialImages,
  initialDocuments,
  initialCertifications,
}: {
  initialProjects: Project[];
  initialPosts: Post[];
  initialPdfs: Record<string, PdfEntry[]>;
  initialImages: Record<string, PdfEntry[]>;
  initialDocuments: DocumentEntry[];
  initialCertifications: Certification[];
}) {
  const [tab, setTab] = useState<Tab>("projects");
  const [projects, setProjects] = useState(initialProjects);
  const [posts, setPosts] = useState(initialPosts);
  const [pdfs, setPdfs] = useState(initialPdfs);
  const [images, setImages] = useState(initialImages);
  const [documents, setDocuments] = useState(initialDocuments);
  const [certifications, setCertifications] = useState(initialCertifications);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

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
    if (!confirm("Delete this project and its attached PDFs and screenshots?")) return;
    const res = await fetch(`/api/admin/projects/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setProjects((prev) => prev.filter((p) => p.slug !== slug));
      setPdfs((prev) => {
        const next = { ...prev };
        delete next[slug];
        return next;
      });
      setImages((prev) => {
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

  async function uploadImage(slug: string, file: File) {
    setError("");
    const form = new FormData();
    form.set("file", file);
    const res = await fetch(`/api/admin/projects/${slug}/images`, {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Image upload failed.");
      return;
    }
    setImages((prev) => ({ ...prev, [slug]: [...(prev[slug] ?? []), data.entry] }));
  }

  async function removeImage(slug: string, filename: string) {
    const res = await fetch(`/api/admin/projects/${slug}/images`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename }),
    });
    if (res.ok) {
      setImages((prev) => ({
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

  async function saveCertification(form: FormData, slug?: string) {
    setError("");
    if (slug) form.set("slug", slug);
    const res = await fetch("/api/admin/certifications", {
      method: slug ? "PUT" : "POST",
      body: form,
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Certification save failed.");
      return;
    }
    setCertifications((prev) => {
      const without = prev.filter((certification) => certification.slug !== data.certification.slug);
      return [...without, data.certification].sort((a, b) => a.title.localeCompare(b.title));
    });
  }

  async function removeCertification(slug: string) {
    const res = await fetch("/api/admin/certifications", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (res.ok) setCertifications((prev) => prev.filter((certification) => certification.slug !== slug));
  }

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
      <div className="flex gap-2 overflow-x-auto border-b border-[var(--line)]">
        {(["projects", "documents", "certifications", "posts"] as Tab[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setTab(t);
              setEditingProject(null);
              setEditingPost(null);
              setError("");
            }}
            className={`shrink-0 text-sm px-3 py-2 -mb-px border-b-2 capitalize ${
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

                <div className="mt-4 pt-4 border-t border-[var(--line)]">
                  <p className="text-xs text-[var(--fg-dim)] mb-2">
                    Screenshots (optional, shown as a carousel)
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(images[project.slug] ?? []).map((img) => (
                      <div key={img.filename} className="relative">
                        <Image
                          src={`/api/images/${project.slug}/${encodeURIComponent(img.filename)}`}
                          alt={img.originalName}
                          width={80}
                          height={80}
                          unoptimized
                          className="w-20 h-20 object-cover rounded border border-[var(--line)]"
                        />
                        <button
                          onClick={() => removeImage(project.slug, img.filename)}
                          className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--bg)] border border-[var(--line)] text-xs text-[var(--fg-dim)] hover:text-red-400"
                          aria-label="Remove image"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    {(images[project.slug] ?? []).length === 0 && (
                      <p className="text-sm text-[var(--fg-dim)]">No screenshots.</p>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) uploadImage(project.slug, file);
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
      ) : tab === "certifications" ? (
        <CertificationsManager
          certifications={certifications}
          onSave={saveCertification}
          onRemove={removeCertification}
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
  const [stackText, setStackText] = useState(project.stack.join(", "));
  const [notesText, setNotesText] = useState(project.notes.join("\n"));
  const [linksText, setLinksText] = useState(
    project.links.map((link) => `${link.label} | ${link.url}`).join("\n")
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({
          ...form,
          stack: stackText.split(",").map((value) => value.trim()).filter(Boolean),
          notes: notesText.split("\n").map((value) => value.trim()).filter(Boolean),
          links: linksText
            .split("\n")
            .map((line) => {
              const separator = line.indexOf("|");
              if (separator < 0) return { label: "", url: "" };
              return {
                label: line.slice(0, separator).trim(),
                url: line.slice(separator + 1).trim(),
              };
            })
            .filter((link) => link.label && link.url),
        });
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
          value={stackText}
          onChange={(e) => setStackText(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Notes (one per line)</label>
        <textarea
          rows={3}
          value={notesText}
          onChange={(e) => setNotesText(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>
          External links (one per line, format: Label | https://url)
        </label>
        <textarea
          rows={3}
          placeholder="LinkedIn post | https://linkedin.com/posts/..."
          value={linksText}
          onChange={(e) => setLinksText(e.target.value)}
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
