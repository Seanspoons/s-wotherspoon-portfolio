import Section from "./Section";

export default function About() {
  return (
    <Section reveal="mount">
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
          I like building useful systems that feel reliable and thoughtfully designed.
        </p>

        {/* main paragraph */}
        <p className="text-slate-600 leading-relaxed max-w-2xl">
          I work across the stack, from Spark/Airflow data pipelines to full web products like
          Mealpository and KinDays, plus HavenView, a self-hosted home security hub on a Raspberry Pi 5.
          I enjoy taking projects from idea to production, backend architecture, front-end polish,
          and the small details that make tools feel calm and dependable for real people.
        </p>

        {/* principles */}
        <div className="pt-1">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
            Principles
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-surface px-3 py-1 text-xs text-primary/80">
              Build things that last
            </span>
            <span className="rounded-full bg-surface px-3 py-1 text-xs text-primary/80">
              Make it clear and usable
            </span>
            <span className="rounded-full bg-surface px-3 py-1 text-xs text-primary/80">
              Solve real problems for real people
            </span>
          </div>
        </div>
      </section>
    </Section>
  );
}