import Section from "./Section";
import { aboutParagraphs, principles } from "../data/portfolio";

export default function About() {
  return (
    <Section>
      <section id="about" className="space-y-4 scroll-mt-20">
        <h2 className="text-lg font-semibold text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-accent after:rounded">
          About
        </h2>

        <div className="max-w-3xl space-y-3 text-slate-600 leading-relaxed">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-1">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
            Principles
          </p>
          <div className="flex flex-wrap gap-2">
            {principles.map((principle) => (
              <span
                key={principle}
                className="rounded-full bg-surface px-3 py-1 text-xs text-primary/80"
              >
                {principle}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
}
