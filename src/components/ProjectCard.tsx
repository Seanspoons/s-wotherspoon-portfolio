import { motion } from "framer-motion";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  compact?: boolean;
};

export default function ProjectCard({ project, featured = false, compact = false }: ProjectCardProps) {
  const { title, category, status, description, href, githubHref, tech, meta } = project;

  return (
    <motion.div className="h-full" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <article
        className={`h-full rounded-xl bg-paper ring-1 ring-primary/5 flex flex-col justify-between transition hover:shadow-md hover:ring-primary/10 ${
          featured ? "p-5 sm:p-7" : "p-5"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[11px] font-medium text-accent/90 tracking-wide">
              {category}
            </p>
            <span className="shrink-0 border-l-2 border-accent/50 pl-2 text-[10px] font-medium text-slate-500">
              {status}
            </span>
          </div>
          <h4 className={`${featured ? "text-lg" : "text-base"} font-semibold text-primary`}>
            {title}
          </h4>
          <p className="text-[11px] text-slate-400">{meta}</p>
          <p className={`text-sm text-slate-600 leading-relaxed ${compact ? "line-clamp-3" : ""}`}>
            {description}
          </p>
        </div>

        <div className="mt-4 space-y-3">
          <div className={`flex flex-wrap gap-2 ${compact ? "hidden" : ""}`}>
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-primary/70"
              >
                {item}
              </span>
            ))}
          </div>

          {(githubHref || href) && (
            <div className="flex items-center justify-end gap-3">
              {githubHref && (
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/80 whitespace-nowrap focus-visible-ring rounded"
                  aria-label={`View ${title} on GitHub`}
                >
                  GitHub →
                </a>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/80 whitespace-nowrap focus-visible-ring rounded"
                  aria-label={`Visit the ${title} site`}
                >
                  Visit site →
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </motion.div>
  );
}
