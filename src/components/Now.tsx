import Section from "./Section";

export default function Now() {
  return (
    <Section reveal="mount">
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
          <li>• Applying what I learned during my Samsung Health data engineering co-op to new projects.</li>
          <li>• Designing and building Mealpository v2 as a mobile-first app.</li>
          <li>• Monitoring HavenView in daily use and making small reliability improvements.</li>
          <li>• Watching how families use KinDays and planning small, focused improvements.</li>
          <li>• Finishing my Computing Science degree at SFU.</li>
        </ul>
      </section>
    </Section>
  );
}
