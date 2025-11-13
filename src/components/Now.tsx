import Section from "./Section";

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
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
          <li>• Shipping data pipelines and metrics at Samsung R&amp;D (Samsung Health).</li>
          <li>• Iterating on Mealpository v2 — smarter planning and a tighter UX.</li>
          <li>• Watching how families use KinDays and planning small, focused improvements.</li>
          <li>• Finishing my Computing Science degree at SFU.</li>
        </ul>
      </section>
    </Section>
  );
}