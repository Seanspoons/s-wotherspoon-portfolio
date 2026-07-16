import Section from "./Section";
import { currentFocus } from "../data/portfolio";

export default function Now() {
  return (
    <Section>
      <section id="now" className="space-y-4 scroll-mt-20">
        <h2
          className="text-lg font-semibold text-primary relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-8 after:bg-accent after:rounded"
        >
          Now
        </h2>
        <p className="text-sm text-slate-600">
          What I&apos;m focused on right now:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-600 marker:text-primary/30">
          {currentFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Section>
  );
}
