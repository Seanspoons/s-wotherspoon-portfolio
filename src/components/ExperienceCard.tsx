import { motion } from "framer-motion";

type ExperienceCardProps = {
  title: string;
  org?: string;
  period: string;
  location?: string;
  points?: string[];
  href?: string;
};

export default function ExperienceCard({
  title,
  org,
  period,
  location,
  points,
  href,
}: ExperienceCardProps) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
        <div className="rounded-xl bg-paper ring-1 ring-primary/5 p-5 sm:p-6 transition hover:shadow-md hover:ring-primary/10 space-y-3 flex flex-col justify-between">
        {/* header */}
        <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
            <div>
                <h3 className="font-medium text-primary">{title}</h3>
                {org && (
                <p className="text-sm text-slate-500 leading-tight">{org}</p>
                )}
            </div>

            <div className="mt-1 sm:mt-0 text-left sm:text-right">
                <p className="text-xs text-slate-500">{period}</p>
                {location && (
                <p className="text-xs text-slate-400">{location}</p>
                )}
            </div>
            </div>

            {points && points.length > 0 && (
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
                {points.map((p) => (
                <li
                    key={p}
                    className="text-sm text-slate-600 leading-relaxed marker:text-primary/30"
                >
                    {p}
                </li>
                ))}
            </ul>
            )}
        </div>

        {/* optional link */}
        {href && (
            <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-accent/80 inline-flex items-center gap-1 pt-2"
            >
            Visit site →
            </a>
        )}
        </div>
    </motion.div>
  );
}