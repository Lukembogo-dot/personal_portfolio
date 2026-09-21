module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content-store.ts [app-rsc] (ecmascript)");
;
;
;
const dynamic = "force-dynamic";
async function Home() {
    const allProjects = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjects"])();
    const featured = allProjects.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 lg:px-16 pt-16 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--accent)] mb-4",
                        children: "IT Professional | Software, Cloud and Network Infrastructure, Cybersecurity, QA & Technology — Nairobi, Kenya"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-[family-name:var(--font-display)] text-[2.25rem] leading-[1.15] lg:text-[3rem] max-w-3xl",
                        children: "I solve IT problems wherever they sit — infrastructure, quality, or the code itself."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-lg text-[var(--fg-dim)] max-w-[56ch]",
                        children: "Business IT graduate with hands-on experience across ICT administration, QA/testing, backend development, and data engineering. I've built and shipped platforms end to end, from multi-tenant SaaS to data pipelines, not just one layer of them."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projects",
                                className: "border border-[var(--accent)] text-[var(--accent)] rounded px-4 py-2",
                                children: "View projects"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "border border-[var(--line)] rounded px-4 py-2 text-[var(--fg-dim)]",
                                children: "Get in touch"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            featured.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 lg:px-16 py-16 border-t border-[var(--line)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[var(--fg-dim)]",
                                children: "Featured work"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projects",
                                className: "text-sm text-[var(--accent)]",
                                children: "All projects →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: featured.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/projects/${project.slug}`,
                                className: "block border border-[var(--line)] rounded-lg p-5 hover:border-[var(--accent)] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-[family-name:var(--font-display)] text-lg",
                                        children: project.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-[var(--fg-dim)]",
                                        children: project.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.slug, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/content-store.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDocument",
    ()=>addDocument,
    "addProjectPdf",
    ()=>addProjectPdf,
    "deleteDocument",
    ()=>deleteDocument,
    "deletePost",
    ()=>deletePost,
    "deleteProject",
    ()=>deleteProject,
    "deleteProjectPdf",
    ()=>deleteProjectPdf,
    "getAllProjectPdfs",
    ()=>getAllProjectPdfs,
    "getDocumentBytes",
    ()=>getDocumentBytes,
    "getDocuments",
    ()=>getDocuments,
    "getPost",
    ()=>getPost,
    "getPosts",
    ()=>getPosts,
    "getProject",
    ()=>getProject,
    "getProjectPdfBytes",
    ()=>getProjectPdfBytes,
    "getProjectPdfs",
    ()=>getProjectPdfs,
    "getProjects",
    ()=>getProjects,
    "savePost",
    ()=>savePost,
    "saveProject",
    ()=>saveProject,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/github.ts [app-rsc] (ecmascript)");
;
function slugify(input) {
    return input.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
const PROJECTS_DIR = "content/projects";
async function getProjects() {
    const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listDir"])(PROJECTS_DIR);
    const jsonFiles = entries.filter((e)=>e.type === "file" && e.name.endsWith(".json"));
    const projects = await Promise.all(jsonFiles.map(async (entry)=>{
        const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(entry.path);
        if (!file) return null;
        return JSON.parse(file.content);
    }));
    return projects.filter((p)=>p !== null).sort((a, b)=>a.order - b.order);
}
async function getProject(slug) {
    const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(`${PROJECTS_DIR}/${slug}.json`);
    if (!file) return null;
    return JSON.parse(file.content);
}
async function saveProject(project) {
    const path = `${PROJECTS_DIR}/${project.slug}.json`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(path);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["putFile"])(path, JSON.stringify(project, null, 2), existing ? `Update project: ${project.name}` : `Add project: ${project.name}`, existing?.sha);
}
async function deleteProject(slug) {
    const path = `${PROJECTS_DIR}/${slug}.json`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(path);
    if (!existing) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFile"])(path, existing.sha, `Delete project: ${slug}`);
}
function pdfDir(slug) {
    return `${PROJECTS_DIR}/${slug}/pdfs`;
}
async function getProjectPdfs(slug) {
    const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listDir"])(pdfDir(slug));
    return entries.filter((e)=>e.type === "file").map((e)=>{
        // filenames are stored as "<timestamp>__<original-name>.pdf"
        const [, ...rest] = e.name.split("__");
        const originalName = rest.length > 0 ? rest.join("__") : e.name;
        return {
            filename: e.name,
            originalName,
            size: 0
        };
    });
}
async function getAllProjectPdfs() {
    const projects = await getProjects();
    const results = await Promise.all(projects.map(async (project)=>({
            project,
            pdfs: await getProjectPdfs(project.slug)
        })));
    return results.filter((r)=>r.pdfs.length > 0);
}
async function getProjectPdfBytes(slug, filename) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileBytes"])(`${pdfDir(slug)}/${filename}`);
    return result?.bytes ?? null;
}
async function addProjectPdf(slug, originalName, bytes) {
    const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = `${Date.now()}__${safeName}`;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["putFileBytes"])(`${pdfDir(slug)}/${filename}`, bytes, `Add PDF to ${slug}: ${originalName}`);
    return {
        filename,
        originalName,
        size: bytes.length
    };
}
async function deleteProjectPdf(slug, filename) {
    const path = `${pdfDir(slug)}/${filename}`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileBytes"])(path);
    if (!existing) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFile"])(path, existing.sha, `Remove PDF from ${slug}: ${filename}`);
}
const DOCUMENTS_DIR = "content/documents";
function documentMetadataPath(filename) {
    return `${DOCUMENTS_DIR}/${filename}.json`;
}
async function getDocuments() {
    const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listDir"])(DOCUMENTS_DIR);
    const metadataFiles = entries.filter((entry)=>entry.type === "file" && entry.name.endsWith(".json"));
    const documents = await Promise.all(metadataFiles.map(async (entry)=>{
        const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(entry.path);
        if (!file) return null;
        return JSON.parse(file.content);
    }));
    return documents.filter((document)=>document !== null).sort((a, b)=>a.title.localeCompare(b.title));
}
async function getDocumentBytes(filename) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileBytes"])(`${DOCUMENTS_DIR}/${filename}`);
    return result?.bytes ?? null;
}
async function addDocument(originalName, title, description, postSlug, bytes) {
    const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = `${Date.now()}__${safeName}`;
    const entry = {
        filename,
        originalName,
        title,
        description,
        postSlug,
        size: bytes.length
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["putFileBytes"])(`${DOCUMENTS_DIR}/${filename}`, bytes, `Add document: ${title}`);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["putFile"])(documentMetadataPath(filename), JSON.stringify(entry, null, 2), `Add document metadata: ${title}`);
    return entry;
}
async function deleteDocument(filename) {
    const pdfPath = `${DOCUMENTS_DIR}/${filename}`;
    const existingPdf = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileBytes"])(pdfPath);
    if (existingPdf) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFile"])(pdfPath, existingPdf.sha, `Remove document: ${filename}`);
    const metadataPath = documentMetadataPath(filename);
    const existingMetadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(metadataPath);
    if (existingMetadata) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFile"])(metadataPath, existingMetadata.sha, `Remove document metadata: ${filename}`);
    }
}
const POSTS_DIR = "content/posts";
async function getPosts() {
    const entries = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listDir"])(POSTS_DIR);
    const jsonFiles = entries.filter((e)=>e.type === "file" && e.name.endsWith(".json"));
    const posts = await Promise.all(jsonFiles.map(async (entry)=>{
        const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(entry.path);
        if (!file) return null;
        return JSON.parse(file.content);
    }));
    return posts.filter((p)=>p !== null).sort((a, b)=>a.date < b.date ? 1 : -1);
}
async function getPost(slug) {
    const file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(`${POSTS_DIR}/${slug}.json`);
    if (!file) return null;
    return JSON.parse(file.content);
}
async function savePost(post) {
    const path = `${POSTS_DIR}/${post.slug}.json`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(path);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["putFile"])(path, JSON.stringify(post, null, 2), existing ? `Update post: ${post.title}` : `Add post: ${post.title}`, existing?.sha);
}
async function deletePost(slug) {
    const path = `${POSTS_DIR}/${slug}.json`;
    const existing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFile"])(path);
    if (!existing) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFile"])(path, existing.sha, `Delete post: ${slug}`);
}
}),
"[project]/src/lib/github.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteFile",
    ()=>deleteFile,
    "getFile",
    ()=>getFile,
    "getFileBytes",
    ()=>getFileBytes,
    "listDir",
    ()=>listDir,
    "putFile",
    ()=>putFile,
    "putFileBytes",
    ()=>putFileBytes
]);
// Minimal wrapper around the GitHub Contents API. This is the "database":
// every project, blog post, and uploaded PDF is a file committed to a
// GitHub repo, read back over the API. No traditional DB, no local
// filesystem writes — works the same on a VPS or on Vercel.
//
// Required env vars (see .env.local.example):
//   GITHUB_TOKEN   - a fine-grained PAT with Contents: read & write on the repo
//   GITHUB_OWNER   - repo owner/org, e.g. "luke-mbogo254"
//   GITHUB_REPO    - repo name, e.g. "portfolio-content"
//   GITHUB_BRANCH  - defaults to "main"
const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;
const BRANCH = process.env.GITHUB_BRANCH || "main";
const TOKEN = process.env.GITHUB_TOKEN;
function assertConfigured() {
    if (!OWNER || !REPO || !TOKEN) {
        throw new Error("GitHub content store is not configured. Set GITHUB_OWNER, GITHUB_REPO, and GITHUB_TOKEN in .env.local.");
    }
}
function apiUrl(path) {
    return `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;
}
function headers() {
    return {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
    };
}
async function getFile(path) {
    assertConfigured();
    const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
        headers: headers(),
        cache: "no-store"
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub getFile failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    const content = Buffer.from(data.content, "base64").toString("utf-8");
    return {
        path,
        sha: data.sha,
        content
    };
}
async function getFileBytes(path) {
    assertConfigured();
    const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
        headers: headers(),
        cache: "no-store"
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub getFileBytes failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    if (data.download_url) {
        const raw = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
            headers: {
                ...headers(),
                Accept: "application/vnd.github.raw"
            },
            cache: "no-store"
        });
        if (!raw.ok) {
            throw new Error(`GitHub raw file download failed (${raw.status}): ${await raw.text()}`);
        }
        return {
            sha: data.sha,
            bytes: Buffer.from(await raw.arrayBuffer())
        };
    }
    if (typeof data.content !== "string") {
        throw new Error("GitHub did not return PDF content or a download URL");
    }
    return {
        sha: data.sha,
        bytes: Buffer.from(data.content, "base64")
    };
}
async function listDir(path) {
    assertConfigured();
    const res = await fetch(`${apiUrl(path)}?ref=${BRANCH}`, {
        headers: headers(),
        cache: "no-store"
    });
    if (res.status === 404) return [];
    if (!res.ok) throw new Error(`GitHub listDir failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((entry)=>({
            name: entry.name,
            path: entry.path,
            type: entry.type === "dir" ? "dir" : "file"
        }));
}
async function putFile(path, content, message, sha) {
    assertConfigured();
    const res = await fetch(apiUrl(path), {
        method: "PUT",
        headers: {
            ...headers(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message,
            content: Buffer.from(content, "utf-8").toString("base64"),
            branch: BRANCH,
            sha
        })
    });
    if (!res.ok) throw new Error(`GitHub putFile failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    return {
        sha: data.content.sha
    };
}
async function putFileBytes(path, bytes, message, sha) {
    assertConfigured();
    const res = await fetch(apiUrl(path), {
        method: "PUT",
        headers: {
            ...headers(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message,
            content: bytes.toString("base64"),
            branch: BRANCH,
            sha
        })
    });
    if (!res.ok) throw new Error(`GitHub putFileBytes failed (${res.status}): ${await res.text()}`);
    const data = await res.json();
    return {
        sha: data.content.sha
    };
}
async function deleteFile(path, sha, message) {
    assertConfigured();
    const res = await fetch(apiUrl(path), {
        method: "DELETE",
        headers: {
            ...headers(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message,
            sha,
            branch: BRANCH
        })
    });
    if (!res.ok) throw new Error(`GitHub deleteFile failed (${res.status}): ${await res.text()}`);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ahungq._.js.map