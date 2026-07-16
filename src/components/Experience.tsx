import ExperienceCard from "./ExperienceCard";
import Section from "./Section";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <Section reveal="mount">
        <section id="experience" className="space-y-4">
        <h2 className="text-lg font-semibold text-primary relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-8 after:bg-accent after:rounded">
            Experience
        </h2>
        <div className="space-y-3">
            {experiences.map((exp) => (
            <ExperienceCard key={`${exp.org}-${exp.title}`} {...exp} />
            ))}
        </div>
        </section>
    </Section>
  );
}
