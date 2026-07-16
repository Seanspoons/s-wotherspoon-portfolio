import ProjectCard from "./ProjectCard";
import Section from "./Section";
import { projects } from "../data/portfolio";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.group === "featured");
  const additionalProjects = projects.filter((project) => project.group === "additional");
  const archivedProjects = projects.filter((project) => project.group === "archive");

  return (
    <Section>
      <section id="projects" className="space-y-6 scroll-mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-accent after:rounded">
            Projects
          </h2>
          <p className="text-xs text-slate-500">Selected systems and products</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-primary">Featured projects</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-primary">Additional projects</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <details className="group rounded-xl bg-paper ring-1 ring-primary/5">
          <summary className="cursor-pointer list-none rounded-xl px-5 py-4 text-sm font-medium text-primary focus-visible-ring">
            <span className="flex items-center justify-between gap-3 text-sm font-medium">
              More work
              <span aria-hidden="true" className="text-accent transition-transform group-open:rotate-45">+</span>
            </span>
          </summary>
          <div className="border-t border-primary/5 p-4">
            <h3 className="sr-only">More work projects</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {archivedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>
          </div>
        </details>
      </section>
    </Section>
  );
}
