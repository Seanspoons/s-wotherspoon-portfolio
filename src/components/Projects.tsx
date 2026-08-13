import ProjectCard from "./ProjectCard";
import Section from "./Section";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Section>
      <section id="projects" className="space-y-6 scroll-mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-accent after:rounded">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </section>
    </Section>
  );
}
