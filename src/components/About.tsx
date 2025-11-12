import Section from "./Section";

export default function About() {
  return (
    <Section>
        <section id="about" className="space-y-4">
        <h2 className="text-lg font-semibold text-primary relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-8 after:bg-accent after:rounded">
            About
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-2xl">
            I like building useful systems, from data pipelines to full web products. 
            I enjoy taking projects from idea to production, handling everything from backend architecture 
            to front-end polish. I’m drawn to products that feel calm and dependable, whether that’s a 
            tool for families or infrastructure that keeps data moving reliably.
        </p>
        </section>
    </Section>
  );
}