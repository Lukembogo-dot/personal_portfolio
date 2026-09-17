(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/AdminDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
const inputClass = "w-full bg-transparent border border-[var(--line)] rounded px-3 py-2 text-sm";
const labelClass = "text-sm text-[var(--fg-dim)] block mb-1";
const buttonClass = "text-sm border border-[var(--accent)] text-[var(--accent)] rounded px-4 py-2 disabled:opacity-50";
function emptyProject() {
    return {
        slug: "",
        order: Date.now(),
        name: "",
        role: "",
        blurb: "",
        stack: [],
        notes: []
    };
}
function emptyPost() {
    return {
        slug: "",
        title: "",
        date: new Date().toISOString().slice(0, 10),
        excerpt: "",
        body: ""
    };
}
function AdminDashboard({ initialProjects, initialPosts, initialPdfs }) {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("projects");
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProjects);
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPosts);
    const [pdfs, setPdfs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPdfs);
    const [editingProject, setEditingProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingPost, setEditingPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ---- projects ----
    async function saveProject(project, isNew) {
        setError("");
        setBusy(true);
        const res = await fetch(isNew ? "/api/admin/projects" : `/api/admin/projects/${project.slug}`, {
            method: isNew ? "POST" : "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project)
        });
        const data = await res.json();
        setBusy(false);
        if (!res.ok) {
            setError(data.error ?? "Save failed.");
            return;
        }
        setProjects((prev)=>{
            const without = prev.filter((p)=>p.slug !== data.project.slug);
            return [
                ...without,
                data.project
            ].sort((a, b)=>a.order - b.order);
        });
        setEditingProject(null);
    }
    async function removeProject(slug) {
        if (!confirm("Delete this project and its attached PDFs?")) return;
        const res = await fetch(`/api/admin/projects/${slug}`, {
            method: "DELETE"
        });
        if (res.ok) {
            setProjects((prev)=>prev.filter((p)=>p.slug !== slug));
            setPdfs((prev)=>{
                const next = {
                    ...prev
                };
                delete next[slug];
                return next;
            });
        }
    }
    async function uploadPdf(slug, file) {
        setError("");
        const form = new FormData();
        form.set("file", file);
        const res = await fetch(`/api/admin/projects/${slug}/pdfs`, {
            method: "POST",
            body: form
        });
        const data = await res.json();
        if (!res.ok) {
            setError(data.error ?? "Upload failed.");
            return;
        }
        setPdfs((prev)=>({
                ...prev,
                [slug]: [
                    ...prev[slug] ?? [],
                    data.entry
                ]
            }));
    }
    async function removePdf(slug, filename) {
        const res = await fetch(`/api/admin/projects/${slug}/pdfs`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filename
            })
        });
        if (res.ok) {
            setPdfs((prev)=>({
                    ...prev,
                    [slug]: (prev[slug] ?? []).filter((f)=>f.filename !== filename)
                }));
        }
    }
    // ---- posts ----
    async function savePost(post, isNew) {
        setError("");
        setBusy(true);
        const res = await fetch(isNew ? "/api/admin/posts" : `/api/admin/posts/${post.slug}`, {
            method: isNew ? "POST" : "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        const data = await res.json();
        setBusy(false);
        if (!res.ok) {
            setError(data.error ?? "Save failed.");
            return;
        }
        setPosts((prev)=>{
            const without = prev.filter((p)=>p.slug !== data.post.slug);
            return [
                ...without,
                data.post
            ].sort((a, b)=>a.date < b.date ? 1 : -1);
        });
        setEditingPost(null);
    }
    async function removePost(slug) {
        if (!confirm("Delete this post?")) return;
        const res = await fetch(`/api/admin/posts/${slug}`, {
            method: "DELETE"
        });
        if (res.ok) setPosts((prev)=>prev.filter((p)=>p.slug !== slug));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 border-b border-[var(--line)]",
                children: [
                    "projects",
                    "posts"
                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setTab(t);
                            setEditingProject(null);
                            setEditingPost(null);
                            setError("");
                        },
                        className: `text-sm px-3 py-2 -mb-px border-b-2 capitalize ${tab === t ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--fg-dim)]"}`,
                        children: t
                    }, t, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-400",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 172,
                columnNumber: 17
            }, this),
            tab === "projects" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8",
                children: [
                    editingProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectForm, {
                        project: editingProject,
                        busy: busy,
                        onCancel: ()=>setEditingProject(null),
                        onSave: (p)=>saveProject(p, !projects.some((x)=>x.slug === p.slug))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setEditingProject(emptyProject()),
                        className: `self-start ${buttonClass}`,
                        children: "+ New project"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6",
                        children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-[var(--line)] rounded-lg p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-[family-name:var(--font-display)] text-base",
                                                        children: project.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[var(--fg-dim)]",
                                                        children: project.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEditingProject(project),
                                                        className: "text-[var(--fg-dim)] hover:text-[var(--fg)]",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeProject(project.slug),
                                                        className: "text-[var(--fg-dim)] hover:text-red-400",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-4 border-t border-[var(--line)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--fg-dim)] mb-2",
                                                children: "Documents"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "flex flex-col gap-1.5 mb-3",
                                                children: [
                                                    (pdfs[project.slug] ?? []).map((pdf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center justify-between text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `/api/pdfs/${project.slug}/${encodeURIComponent(pdf.filename)}`,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "text-[var(--accent)]",
                                                                    children: pdf.originalName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removePdf(project.slug, pdf.filename),
                                                                    className: "text-[var(--fg-dim)] hover:text-red-400",
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, pdf.filename, true, {
                                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, this)),
                                                    (pdfs[project.slug] ?? []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-[var(--fg-dim)]",
                                                        children: "No documents."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "application/pdf",
                                                onChange: (e)=>{
                                                    const file = e.target.files?.[0];
                                                    if (file) uploadPdf(project.slug, file);
                                                    e.target.value = "";
                                                },
                                                className: "text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.slug, true, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8",
                children: [
                    editingPost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostForm, {
                        post: editingPost,
                        busy: busy,
                        onCancel: ()=>setEditingPost(null),
                        onSave: (p)=>savePost(p, !posts.some((x)=>x.slug === p.slug))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 264,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setEditingPost(emptyPost()),
                        className: `self-start ${buttonClass}`,
                        children: "+ New post"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 271,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border border-[var(--line)] rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--fg-dim)]",
                                                children: post.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-[family-name:var(--font-display)] text-base",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setEditingPost(post),
                                                className: "text-[var(--fg-dim)] hover:text-[var(--fg)]",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 292,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removePost(post.slug),
                                                className: "text-[var(--fg-dim)] hover:text-red-400",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, post.slug, true, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 262,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(AdminDashboard, "5T1Ht6VCq+RHsMOKnS/wh1E78l8=");
_c = AdminDashboard;
function ProjectForm({ project, busy, onSave, onCancel }) {
    _s1();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: (e)=>{
            e.preventDefault();
            onSave(form);
        },
        className: "border border-[var(--line)] rounded-lg p-5 flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Name"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        required: true,
                        value: form.name,
                        onChange: (e)=>setForm({
                                ...form,
                                name: e.target.value
                            }),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Role / one-liner"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.role,
                        onChange: (e)=>setForm({
                                ...form,
                                role: e.target.value
                            }),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 4,
                        value: form.blurb,
                        onChange: (e)=>setForm({
                                ...form,
                                blurb: e.target.value
                            }),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Stack (comma-separated)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.stack.join(", "),
                        onChange: (e)=>setForm({
                                ...form,
                                stack: e.target.value.split(",").map((s)=>s.trim()).filter(Boolean)
                            }),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Notes (one per line)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 3,
                        value: form.notes.join("\n"),
                        onChange: (e)=>setForm({
                                ...form,
                                notes: e.target.value.split("\n").map((s)=>s.trim()).filter(Boolean)
                            }),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: busy,
                        className: buttonClass,
                        children: busy ? "Saving…" : "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
}
_s1(ProjectForm, "tZTSxugeodPftpeXT3PldQD7drY=");
_c1 = ProjectForm;
function PostForm({ post, busy, onSave, onCancel }) {
    _s2();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(post);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: (e)=>{
            e.preventDefault();
            onSave(form);
        },
        className: "border border-[var(--line)] rounded-lg p-5 flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        required: true,
                        value: form.title,
                        onChange: (e)=>setForm({
                                ...form,
                                title: e.target.value
                            }),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: form.date,
                        onChange: (e)=>setForm({
                                ...form,
                                date: e.target.value
                            }),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Excerpt"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.excerpt,
                        onChange: (e)=>setForm({
                                ...form,
                                excerpt: e.target.value
                            }),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Body (Markdown)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 12,
                        value: form.body,
                        onChange: (e)=>setForm({
                                ...form,
                                body: e.target.value
                            }),
                        className: `${inputClass} font-mono`
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: busy,
                        className: buttonClass,
                        children: busy ? "Saving…" : "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
        lineNumber: 418,
        columnNumber: 5
    }, this);
}
_s2(PostForm, "jShoMx1Ou/id3OrmD5DO58R4xyw=");
_c2 = PostForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AdminDashboard");
__turbopack_context__.k.register(_c1, "ProjectForm");
__turbopack_context__.k.register(_c2, "PostForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_admin_AdminDashboard_tsx_1wqqxhx._.js.map