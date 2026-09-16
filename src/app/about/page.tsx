import { experience, skills } from "@/data/content";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-16 py-16">
      <p className="text-sm text-[var(--fg-dim)] mb-4">About</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl mb-6">
        Luke Mbogo
      </h1>
      <p className="text-[var(--fg-dim)] max-w-2xl">
        Business Information Technology graduate based in Nairobi, Kenya,
        working across QA/testing, backend development, and data/AI
        engineering. I&apos;ve built and shipped multi-tenant SaaS platforms,
        an ERP for my family&apos;s pig farming operation, and data
        pipelines — and bring a QA-trained eye for testing and reliability to
        all of it.
      </p>

      <div className="mt-16 pt-10 border-t border-[var(--line)]">
        <p className="text-sm text-[var(--fg-dim)] mb-8">Stack</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="font-[family-name:var(--font-display)] text-sm mb-3">
                {group.group}
              </h3>
              <ul className="flex flex-col gap-1.5 text-sm text-[var(--fg-dim)]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-10 border-t border-[var(--line)]">
        <p className="text-sm text-[var(--fg-dim)] mb-8">Experience</p>
        <div className="flex flex-col">
          {experience.map((role) => (
            <div
              key={role.period}
              className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-5 border-b border-[var(--line)] first:pt-0"
            >
              <span className="text-sm text-[var(--fg-dim)]">
                {role.period}
              </span>
              <div>
                <p className="text-[var(--fg)]">{role.role}</p>
                <p className="mt-1 text-sm text-[var(--fg-dim)]">
                  {role.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
