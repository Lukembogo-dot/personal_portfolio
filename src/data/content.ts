// Static site content that rarely changes — projects and blog posts live
// in GitHub now (see src/lib/content-store.ts) and are editable from /admin.

export const skills = [
  {
    group: "Backend",
    items: ["Node.js", "Express", "TypeScript", "FastAPI", "Python"],
  },
  {
    group: "Frontend",
    items: ["Next.js", "React Native / Expo", "Tailwind CSS", "shadcn/ui"],
  },
  {
    group: "Data & cloud",
    items: ["PostgreSQL", "Supabase", "Firebase", "AWS", "Kafka", "Docker"],
  },
  {
    group: "QA",
    items: ["Jira", "Playwright", "Cypress", "Agile / Scrum"],
  },
];

export const experience = [
  {
    period: "Teach2Give",
    role: "QA / QE training",
    detail: "Jira, Playwright, Cypress, Agile and Scrum practice.",
  },
  {
    period: "House Hunt",
    role: "QA contract",
    detail: "Testing and quality assurance work under contract.",
  },
  {
    period: "Kenya Academy of Sports",
    role: "Junior ICT Administrator",
    detail: "IT administration and support.",
  },
];
