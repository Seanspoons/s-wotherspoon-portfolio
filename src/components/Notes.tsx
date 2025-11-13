import Section from "./Section";

const NOTES = [
  {
    title: "Building KinDays in 7 days",
    date: "Nov 2025",
    summary:
      "A small React + Supabase app for my family that turned into a full production product.",
    href: "#", // later: /notes/kindays-in-7-days
  },
];

export default function Notes() {
  return (
    <Section>
      <section id="notes" className="space-y-4 scroll-mt-20">
        <h2
          className="text-lg font-semibold text-primary relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-8 after:bg-accent after:rounded"
        >
          Notes
        </h2>
        <p className="text-sm text-slate-600">
          Short write-ups on things I&apos;ve built or learned. I&apos;m aiming for a light,
          occasional cadence rather than a full blog.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {NOTES.map((note) => (
            <article
              key={note.title}
              className="rounded-xl bg-paper ring-1 ring-primary/5 p-4 sm:p-5 hover:shadow-md hover:ring-primary/10 transition"
            >
              <p className="text-xs text-slate-400 mb-1">{note.date}</p>
              <h3 className="text-sm font-semibold text-primary">{note.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{note.summary}</p>
              {note.href && note.href !== "#" && (
                <a
                  href={note.href}
                  className="mt-2 inline-flex text-sm text-accent hover:text-accent/80"
                >
                  Read more →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </Section>
  );
}