type ExperienceCardProps = {
  title: string;
  org?: string;
  period: string;
  location?: string;
  points?: string[];
};

export default function ExperienceCard({
  title,
  org,
  period,
  location,
  points,
}: ExperienceCardProps) {
  return (
    <div className="rounded-xl bg-paper ring-1 ring-primary/5 p-4 transition hover:shadow-md hover:ring-primary/10">
      {/* header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
        <div>
          <h3 className="font-medium text-primary">{title}</h3>
          {org ? (
            <p className="text-sm text-slate-500 leading-tight">{org}</p>
          ) : null}
        </div>

        <div className="mt-1 sm:mt-0 text-left sm:text-right">
          <p className="text-xs text-slate-500">{period}</p>
          {location ? (
            <p className="text-xs text-slate-400">{location}</p>
          ) : null}
        </div>
      </div>

      {points && points.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {points.map((p) => (
            <li key={p} className="text-sm text-slate-600 leading-relaxed">
              {p}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}