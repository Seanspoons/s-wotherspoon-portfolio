import { motion } from "framer-motion";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  compact?: boolean;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, description, href, githubHref, tech, meta, hrefText, imgSrc, imgAlt } = project;

  return (
    <motion.div className="h-full" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <article
        className={`h-full rounded-xl bg-paper ring-1 ring-primary/5 flex flex-col justify-between transition hover:shadow-md hover:ring-primary/10 p-5 sm:p-7`}
      >
        <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
              <p className="text-[11px] font-medium text-accent/90 tracking-wide">
                {category}
              </p>
            </div>
            <h4 className="text-lg font-semibold text-primary">
              {title}
            </h4>
            <p className="text-[11px] text-slate-700 font-light">{meta}</p>
          </div>

          {imgSrc && (
            <div className="overflow-hidden rounded-xl bg-surface ring-1 ring-primary/5 max-w-2xl">
              <img
                src={imgSrc}
                alt={imgAlt || ""}
                className="w-full"
              />
            </div>
          )}

          <p className="text-sm text-[13px] text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-primary/70"
              >
                {item}
              </span>
            ))}
          </div>

          {(githubHref || href || hrefText) && (
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
              {href && hrefText && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/80 whitespace-nowrap focus-visible-ring rounded"
                  aria-label={`Visit the ${title} site`}
                >
                  {hrefText} →
                </a>
              )}
              {href && !hrefText && (
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
