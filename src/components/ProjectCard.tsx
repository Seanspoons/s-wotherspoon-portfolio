import { motion } from "framer-motion";

type ProjectCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  tech?: string[];
  meta?: string;
};

export default function ProjectCard({
  eyebrow,
  title,
  description,
  href,
  tech,
  meta,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
        <article className="rounded-xl bg-paper ring-1 ring-primary/5 p-5 sm:p-6 flex flex-col justify-between transition hover:shadow-md hover:ring-primary/10">
        {/* Top */}
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

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between">
            {tech && tech.length > 0 && (
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
            )}

            {href && (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 ml-auto shrink-0"
            >
                Visit site →
            </a>
            )}
        </div>
        </article>
    </motion.div>
  );
}