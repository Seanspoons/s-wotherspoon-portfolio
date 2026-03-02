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
          <li>• Designing a personal streaming analytics platform (event ingestion, windowed aggregations, replay, observability).</li>
          <li>• Deepening my understanding of distributed data processing and backend architecture.</li>
          <li>• Refining cloud infrastructure practices with AWS and Terraform.</li>
          <li>• Improving reliability and monitoring in HavenView’s local-first deployment.</li>
          <li>• Completing my Computing Science degree at SFU.</li>
        </ul>
      </section>
    </Section>
  );
}
