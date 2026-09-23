(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/AdminDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
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
        notes: [],
        links: []
    };
}
function DocumentsManager({ documents, posts, onUpload, onRemove }) {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [postSlug, setPostSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "border border-[var(--line)] rounded-lg p-5 flex flex-col gap-4",
                onSubmit: (event)=>{
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
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: labelClass,
                                children: "Title"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: title,
                                onChange: (event)=>setTitle(event.target.value),
                                className: inputClass
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: labelClass,
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: description,
                                onChange: (event)=>setDescription(event.target.value),
                                className: inputClass,
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: labelClass,
                                children: "Link to a post (optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: postSlug,
                                onChange: (event)=>setPostSlug(event.target.value),
                                className: inputClass,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "No post"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: post.slug,
                                            children: post.title
                                        }, post.slug, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "file",
                        type: "file",
                        accept: "application/pdf",
                        required: true,
                        className: "text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: `self-start ${buttonClass}`,
                        children: "Upload document"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    documents.map((document)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-[var(--line)] rounded-lg p-4 flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `/api/documents/${encodeURIComponent(document.filename)}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-[var(--accent)]",
                                            children: document.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--fg-dim)]",
                                            children: [
                                                document.originalName,
                                                document.postSlug ? ` · linked to ${posts.find((post)=>post.slug === document.postSlug)?.title ?? document.postSlug}` : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onRemove(document.filename),
                                    className: "text-sm text-[var(--fg-dim)] hover:text-red-400",
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, document.filename, true, {
                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)),
                    documents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--fg-dim)]",
                        children: "No standalone documents."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(DocumentsManager, "yq3JuX0ilNoqAQIjBdLsuUiVENA=");
_c = DocumentsManager;
function emptyPost() {
    return {
        slug: "",
        title: "",
        date: new Date().toISOString().slice(0, 10),
        excerpt: "",
        body: ""
    };
}
function CertificationsManager({ certifications, onSave, onRemove }) {
    _s1();
    const [editingSlug, setEditingSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [issuer, setIssuer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [credentialId, setCredentialId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [badgeLabel, setBadgeLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [badgeUrl, setBadgeUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "border border-[var(--line)] rounded-lg p-5 flex flex-col gap-4",
                onSubmit: (event)=>{
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
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: labelClass,
                                children: "Certification title"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: title,
                                onChange: (event)=>setTitle(event.target.value),
                                className: inputClass
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: labelClass,
                                children: "Issuing organisation"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: issuer,
                                onChange: (event)=>setIssuer(event.target.value),
                                className: inputClass
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelClass,
                                        children: "Date (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: date,
                                        onChange: (event)=>setDate(event.target.value),
                                        className: inputClass
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: labelClass,
                                        children: "Credential ID (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: credentialId,
                                        onChange: (event)=>setCredentialId(event.target.value),
                                        className: inputClass
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: labelClass,
                                children: "Badge link title (optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "View Credly badge",
                                value: badgeLabel,
                                onChange: (event)=>setBadgeLabel(event.target.value),
                                className: inputClass
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: labelClass,
                                children: "Badge link URL (optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                placeholder: "https://www.credly.com/...",
                                value: badgeUrl,
                                onChange: (event)=>setBadgeUrl(event.target.value),
                                className: inputClass
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "certificate",
                        type: "file",
                        accept: "application/pdf",
                        className: "text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: buttonClass,
                                children: editingSlug ? "Save changes" : "Add certification"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            editingSlug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setEditingSlug(null);
                                    setTitle("");
                                    setIssuer("");
                                    setDate("");
                                    setCredentialId("");
                                    setBadgeLabel("");
                                    setBadgeUrl("");
                                },
                                className: "text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    certifications.map((certification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-[var(--line)] rounded-lg p-4 flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-[family-name:var(--font-display)]",
                                            children: certification.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--fg-dim)]",
                                            children: [
                                                certification.issuer,
                                                certification.pdfFilename ? " · PDF attached" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setEditingSlug(certification.slug);
                                                setTitle(certification.title);
                                                setIssuer(certification.issuer);
                                                setDate(certification.date);
                                                setCredentialId(certification.credentialId);
                                                setBadgeLabel(certification.badgeLabel);
                                                setBadgeUrl(certification.badgeUrl);
                                            },
                                            className: "text-[var(--fg-dim)] hover:text-[var(--fg)]",
                                            children: "Edit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onRemove(certification.slug),
                                            className: "text-[var(--fg-dim)] hover:text-red-400",
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, certification.slug, true, {
                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)),
                    certifications.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--fg-dim)]",
                        children: "No certifications added yet."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 274,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s1(CertificationsManager, "hkj1IEmCWa1pwnoJeCRgrZYYb5Q=");
_c1 = CertificationsManager;
function AdminDashboard({ initialProjects, initialPosts, initialPdfs, initialImages, initialDocuments, initialCertifications }) {
    _s2();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("projects");
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProjects);
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPosts);
    const [pdfs, setPdfs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPdfs);
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialImages);
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDocuments);
    const [certifications, setCertifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCertifications);
    const [editingProject, setEditingProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingPost, setEditingPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
        if (!confirm("Delete this project and its attached PDFs and screenshots?")) return;
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
            setImages((prev)=>{
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
    async function uploadImage(slug, file) {
        setError("");
        const form = new FormData();
        form.set("file", file);
        const res = await fetch(`/api/admin/projects/${slug}/images`, {
            method: "POST",
            body: form
        });
        const data = await res.json();
        if (!res.ok) {
            setError(data.error ?? "Image upload failed.");
            return;
        }
        setImages((prev)=>({
                ...prev,
                [slug]: [
                    ...prev[slug] ?? [],
                    data.entry
                ]
            }));
    }
    async function removeImage(slug, filename) {
        const res = await fetch(`/api/admin/projects/${slug}/images`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filename
            })
        });
        if (res.ok) {
            setImages((prev)=>({
                    ...prev,
                    [slug]: (prev[slug] ?? []).filter((f)=>f.filename !== filename)
                }));
        }
    }
    async function uploadDocument(form) {
        setError("");
        const res = await fetch("/api/admin/documents", {
            method: "POST",
            body: form
        });
        const data = await res.json();
        if (!res.ok) {
            setError(data.error ?? "Upload failed.");
            return;
        }
        setDocuments((prev)=>[
                ...prev,
                data.entry
            ].sort((a, b)=>a.title.localeCompare(b.title)));
    }
    async function removeDocument(filename) {
        const res = await fetch("/api/admin/documents", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filename
            })
        });
        if (res.ok) setDocuments((prev)=>prev.filter((document)=>document.filename !== filename));
    }
    async function saveCertification(form, slug) {
        setError("");
        if (slug) form.set("slug", slug);
        const res = await fetch("/api/admin/certifications", {
            method: slug ? "PUT" : "POST",
            body: form
        });
        const data = await res.json();
        if (!res.ok) {
            setError(data.error ?? "Certification save failed.");
            return;
        }
        setCertifications((prev)=>{
            const without = prev.filter((certification)=>certification.slug !== data.certification.slug);
            return [
                ...without,
                data.certification
            ].sort((a, b)=>a.title.localeCompare(b.title));
        });
    }
    async function removeCertification(slug) {
        const res = await fetch("/api/admin/certifications", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                slug
            })
        });
        if (res.ok) setCertifications((prev)=>prev.filter((certification)=>certification.slug !== slug));
    }
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
                className: "flex gap-2 overflow-x-auto border-b border-[var(--line)]",
                children: [
                    "projects",
                    "documents",
                    "certifications",
                    "posts"
                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setTab(t);
                            setEditingProject(null);
                            setEditingPost(null);
                            setError("");
                        },
                        className: `shrink-0 text-sm px-3 py-2 -mb-px border-b-2 capitalize ${tab === t ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--fg-dim)]"}`,
                        children: t
                    }, t, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-400",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 512,
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
                        lineNumber: 517,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setEditingProject(emptyProject()),
                        className: `self-start ${buttonClass}`,
                        children: "+ New project"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 524,
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
                                                        lineNumber: 537,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[var(--fg-dim)]",
                                                        children: project.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 536,
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
                                                        lineNumber: 543,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeProject(project.slug),
                                                        className: "text-[var(--fg-dim)] hover:text-red-400",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 542,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 535,
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
                                                lineNumber: 559,
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
                                                                    lineNumber: 566,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removePdf(project.slug, pdf.filename),
                                                                    className: "text-[var(--fg-dim)] hover:text-red-400",
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                                    lineNumber: 574,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, pdf.filename, true, {
                                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 23
                                                        }, this)),
                                                    (pdfs[project.slug] ?? []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-[var(--fg-dim)]",
                                                        children: "No documents."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 560,
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
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 558,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-4 border-t border-[var(--line)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--fg-dim)] mb-2",
                                                children: "Screenshots (optional, shown as a carousel)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 599,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-3",
                                                children: [
                                                    (images[project.slug] ?? []).map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: `/api/images/${project.slug}/${encodeURIComponent(img.filename)}`,
                                                                    alt: img.originalName,
                                                                    width: 80,
                                                                    height: 80,
                                                                    unoptimized: true,
                                                                    className: "w-20 h-20 object-cover rounded border border-[var(--line)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeImage(project.slug, img.filename),
                                                                    className: "absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--bg)] border border-[var(--line)] text-xs text-[var(--fg-dim)] hover:text-red-400",
                                                                    "aria-label": "Remove image",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, img.filename, true, {
                                                            fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 23
                                                        }, this)),
                                                    (images[project.slug] ?? []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[var(--fg-dim)]",
                                                        children: "No screenshots."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 602,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/jpeg,image/png,image/webp",
                                                onChange: (e)=>{
                                                    const file = e.target.files?.[0];
                                                    if (file) uploadImage(project.slug, file);
                                                    e.target.value = "";
                                                },
                                                className: "text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 626,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 598,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.slug, true, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 534,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 515,
                columnNumber: 9
            }, this) : tab === "documents" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentsManager, {
                documents: documents,
                posts: posts,
                onUpload: uploadDocument,
                onRemove: removeDocument
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 642,
                columnNumber: 9
            }, this) : tab === "certifications" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CertificationsManager, {
                certifications: certifications,
                onSave: saveCertification,
                onRemove: removeCertification
            }, void 0, false, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 649,
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
                        lineNumber: 657,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setEditingPost(emptyPost()),
                        className: `self-start ${buttonClass}`,
                        children: "+ New post"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 664,
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
                                                lineNumber: 679,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-[family-name:var(--font-display)] text-base",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 678,
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
                                                lineNumber: 685,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removePost(post.slug),
                                                className: "text-[var(--fg-dim)] hover:text-red-400",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                                lineNumber: 691,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                        lineNumber: 684,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, post.slug, true, {
                                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                                lineNumber: 674,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 672,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 655,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
        lineNumber: 489,
        columnNumber: 5
    }, this);
}
_s2(AdminDashboard, "6d+Jk+hGHDzvjdIi9vafRQ3SCeE=");
_c2 = AdminDashboard;
function ProjectForm({ project, busy, onSave, onCancel }) {
    _s3();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project);
    const [stackText, setStackText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project.stack.join(", "));
    const [notesText, setNotesText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project.notes.join("\n"));
    const [linksText, setLinksText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(project.links.map({
        "ProjectForm.useState": (link)=>`${link.label} | ${link.url}`
    }["ProjectForm.useState"]).join("\n"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: (e)=>{
            e.preventDefault();
            onSave({
                ...form,
                stack: stackText.split(",").map((value)=>value.trim()).filter(Boolean),
                notes: notesText.split("\n").map((value)=>value.trim()).filter(Boolean),
                links: linksText.split("\n").map((line)=>{
                    const separator = line.indexOf("|");
                    if (separator < 0) return {
                        label: "",
                        url: ""
                    };
                    return {
                        label: line.slice(0, separator).trim(),
                        url: line.slice(separator + 1).trim()
                    };
                }).filter((link)=>link.label && link.url)
            });
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
                        lineNumber: 749,
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
                        lineNumber: 750,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Role / one-liner"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 758,
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
                        lineNumber: 759,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 757,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 766,
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
                        lineNumber: 767,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 765,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Stack (comma-separated)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 775,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: stackText,
                        onChange: (e)=>setStackText(e.target.value),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 776,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 774,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Notes (one per line)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 783,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 3,
                        value: notesText,
                        onChange: (e)=>setNotesText(e.target.value),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 784,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 782,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "External links (one per line, format: Label | https://url)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 792,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 3,
                        placeholder: "LinkedIn post | https://linkedin.com/posts/...",
                        value: linksText,
                        onChange: (e)=>setLinksText(e.target.value),
                        className: inputClass
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 795,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 791,
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
                        lineNumber: 804,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 807,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 803,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
        lineNumber: 726,
        columnNumber: 5
    }, this);
}
_s3(ProjectForm, "SbsVjXy76+5QW1QCo8JWasSJlgw=");
_c3 = ProjectForm;
function PostForm({ post, busy, onSave, onCancel }) {
    _s4();
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
                        lineNumber: 841,
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
                        lineNumber: 842,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 840,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 850,
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
                        lineNumber: 851,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 849,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Excerpt"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 859,
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
                        lineNumber: 860,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 858,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: labelClass,
                        children: "Body (Markdown)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 867,
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
                        lineNumber: 868,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 866,
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
                        lineNumber: 876,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "text-sm text-[var(--fg-dim)] hover:text-[var(--fg)]",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/AdminDashboard.tsx",
                lineNumber: 875,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/AdminDashboard.tsx",
        lineNumber: 833,
        columnNumber: 5
    }, this);
}
_s4(PostForm, "jShoMx1Ou/id3OrmD5DO58R4xyw=");
_c4 = PostForm;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "DocumentsManager");
__turbopack_context__.k.register(_c1, "CertificationsManager");
__turbopack_context__.k.register(_c2, "AdminDashboard");
__turbopack_context__.k.register(_c3, "ProjectForm");
__turbopack_context__.k.register(_c4, "PostForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_admin_AdminDashboard_tsx_1wqqxhx._.js.map