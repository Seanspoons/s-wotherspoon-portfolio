import Section from "./Section";
import { currentSnapshot, profile } from "../data/portfolio";

export default function Hero() {
  return (
    <Section reveal="mount">
      <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="space-y-5">
          <p className="inline-flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-medium text-accent">
            <span>Backend • Data • Infrastructure • Vancouver</span>
            <span className="hidden sm:block h-4 w-px bg-accent/40"></span>
            <span>AWS SAA-C03 certified</span>
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            {profile.headline}
          </h1>

          <p className="text-slate-600 leading-relaxed max-w-xl">
            {profile.introduction}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-accent focus-visible-ring">
              View projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-paper px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/10 hover:bg-white focus-visible-ring"
            >
              Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-surface px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/5 hover:bg-paper focus-visible-ring"
            >
              GitHub
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-surface px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/5 hover:bg-paper focus-visible-ring"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-paper p-5 shadow-sm ring-1 ring-primary/5 space-y-4">
          <h2 className="text-sm font-semibold text-primary">Current snapshot</h2>

          <div className="divide-y divide-primary/5 text-sm">
            {currentSnapshot.map((item) => (
              <div key={item.title} className="py-3 first:pt-0 last:pb-0">
                <p className="mb-1 text-xs font-medium text-primary">{item.title}</p>
                <p className="text-slate-700">{item.summary}</p>
                <p className="mt-1 text-xs text-slate-500">{item.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
}
