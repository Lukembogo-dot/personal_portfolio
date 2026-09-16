// One-time helper to push your original three projects into the GitHub
// content repo, so /admin isn't starting from empty. Run once after you've
// set GITHUB_TOKEN / GITHUB_OWNER / GITHUB_REPO in .env.local:
//
//   npx tsx scripts/seed-projects.ts
//
// Safe to re-run — it skips any project that already exists.

import { config } from "dotenv";
config({ path: ".env.local" });

import { getProject, saveProject, type Project } from "../src/lib/content-store";

const seedProjects: Project[] = [
  {
    slug: "kevron-chemist",
    order: 1,
    name: "Kevron Chemist",
    role: "Multi-tenant digital pharmacy platform",
    blurb:
      "A SaaS platform letting multiple pharmacies run their own storefront. Backend handles tenant isolation, tested endpoints, and auth; the mobile app splits customer and rider flows.",
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL / Supabase",
      "Firebase",
      "Next.js",
      "React Native / Expo",
    ],
    notes: [
      "Deployed backend on Render, frontend on Next.js",
      "Expanded into a React Native app with separate customer and rider route groups",
      "Diagnosed and fixed a production deployment issue tied to external AI calls during login",
    ],
  },
  {
    slug: "shamba-pro",
    order: 2,
    name: "Shamba Pro",
    role: "Pig farm management ERP",
    blurb:
      "Built for my family's pig farming operation. Tracks animals by batch with human-readable tags, covers breeding cycles and weight targets, and has a feature-flagged path to individual animal tracking once ear tags are affordable.",
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Supabase / PostgreSQL",
      "Next.js",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    notes: [
      "Batch-based tracking (e.g. BTC-PIG-APR25-001) instead of per-animal records",
      "Farm constants built in: 114-day gestation, 90kg target weight, KES 350/kg",
      "Full dashboard covering animals, records, reports, breeding, settings",
    ],
  },
  {
    slug: "kenya-sentinel",
    order: 3,
    name: "Kenya Sentinel",
    role: "Data / ML pipeline",
    blurb:
      "A monitoring and detection system built around a streaming data pipeline, with a trained classification model behind it and infrastructure to run it in production.",
    stack: ["FastAPI", "Kafka", "Docker", "Scikit-learn", "AWS"],
    notes: [],
  },
];

async function main() {
  for (const project of seedProjects) {
    const existing = await getProject(project.slug);
    if (existing) {
      console.log(`skip (exists): ${project.slug}`);
      continue;
    }
    await saveProject(project);
    console.log(`created: ${project.slug}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
