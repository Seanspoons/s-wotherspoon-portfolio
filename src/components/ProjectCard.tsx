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
    <article className="rounded-2xl bg-paper p-5 ring-1 ring-primary/5 shadow-sm flex flex-col gap-4 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-primary/10">
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-[11px] font-medium text-accent/90 tracking-wide">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="text-base font-semibold text-primary">{title}</h3>
        {meta ? (
          <p className="text-[11px] text-slate-400">{meta}</p>
        ) : null}
        {description ? (
          <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
        ) : null}
      </div>

      {tech && tech.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-primary/70"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {href ? (
        <a
          href={href}
          className="mt-auto text-sm text-accent hover:text-accent/80 inline-flex items-center gap-1"
        >
          Visit site →
        </a>
      ) : null}
    </article>
  );
}