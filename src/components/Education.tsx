export default function Education() {
  return (
    <section id="education" className="space-y-4">
      <h2 className="text-lg font-semibold text-primary">Education</h2>

      <div className="rounded-xl bg-paper ring-1 ring-primary/5 p-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
          <h3 className="font-medium text-primary">Simon Fraser University</h3>
          <p className="text-xs text-slate-500">Sept 2021 – May 2026</p>
        </div>

        <p className="text-sm text-slate-600 mt-0.5">
          BSc in Computing Science
        </p>

        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
          <li>Data Structures &amp; Algorithms</li>
          <li>Database Systems</li>
          <li>Web Development</li>
          <li>Software Practices</li>
          <li>UI Design</li>
          <li>Data Science</li>
          <li>Biomedical Computing</li>
        </ul>
      </div>
    </section>
  );
}