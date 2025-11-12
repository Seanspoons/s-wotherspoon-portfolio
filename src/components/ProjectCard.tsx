import { motion } from "framer-motion";

type ProjectCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  githubHref?: string;
  tech?: string[];
  meta?: string;
};

export default function ProjectCard({
  eyebrow,
  title,
  description,
  href,
  githubHref,
  tech,
  meta,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <article className="rounded-xl bg-paper ring-1 ring-primary/5 p-5 sm:p-6 flex flex-col justify-between transition hover:shadow-md hover:ring-primary/10">
        <div className="space-y-2">
          {eyebrow && (
            <p className="text-[11px] font-medium text-accent/90 tracking-wide">
              {eyebrow}
            </p>
          )}
          <h3 className="text-base font-semibold text-primary">{title}</h3>
          {meta && <p className="text-[11px] text-slate-400">{meta}</p>}
          {description && (
            <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          {tech && tech.length > 0 ? (
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-primary/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="sm:flex-1" />
          )}

          <div className="sm:ml-auto shrink-0 flex items-center gap-3">
            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 whitespace-nowrap focus-visible-ring rounded"
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
              >
                Visit site →
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}