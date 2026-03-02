import Section from "./Section";

export default function About() {
  return (
    <Section>
      <section id="about" className="space-y-4 scroll-mt-20">
        <h2
          className="text-lg font-semibold text-primary relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-8 after:bg-accent after:rounded"
        >
          About
        </h2>

        {/* one-sentence snapshot */}
        <p className="text-sm text-slate-500">
          I build backend systems and data pipelines that are reliable, scalable, and designed with long-term clarity in mind.
        </p>

        {/* main paragraph */}
        <p className="text-slate-600 leading-relaxed max-w-2xl">
          My focus is on backend systems, data processing, and cloud infrastructure.
          During my 12-month co-op at Samsung R&D, I worked on Spark and Airflow
          pipelines powering privacy compliance reporting over large-scale health
          logging datasets. Outside of work, I design and deploy cloud-native
          applications with AWS and Terraform, and build systems-heavy projects
          like HavenView — a local-first, real-time home security platform.
          
          I enjoy thinking through architecture decisions, reliability tradeoffs,
          and how data flows through a system from ingestion to observable results.
        </p>

        {/* principles */}
        <div className="pt-1">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
            Principles
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-surface px-3 py-1 text-xs text-primary/80">
              Design for reliability first
            </span>
            <span className="rounded-full bg-surface px-3 py-1 text-xs text-primary/80">
              Understand the system end-to-end
            </span>
            <span className="rounded-full bg-surface px-3 py-1 text-xs text-primary/80">
              Optimize for clarity over complexity
            </span>
          </div>
        </div>
      </section>
    </Section>
  );
}