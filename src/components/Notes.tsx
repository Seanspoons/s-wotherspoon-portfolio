import { motion } from "framer-motion";
import Section from "./Section";

type Note = {
  title: string;
  date: string;
  summary: string;
  href?: string;
};

const NOTES: Note[] = []; // empty for now

export default function Notes() {
  const hasNotes = NOTES.length > 0;

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
          Short write-ups on things I’ve built or learned. Hoping to post a few soon.
        </p>

        {/* If no notes → show empty state */}
        {!hasNotes && (
          <div className="rounded-xl bg-paper ring-1 ring-primary/5 p-6 text-center">
            <p className="text-sm text-slate-500">
              No notes yet — check back later.
            </p>
          </div>
        )}

        {/* Notes grid */}
        {hasNotes && (
          <div className="grid gap-3 md:grid-cols-2">
            {NOTES.map((note) => (
              <motion.div
                key={note.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <article className="rounded-xl bg-paper ring-1 ring-primary/5 p-4 sm:p-5 hover:shadow-md hover:ring-primary/10 transition">
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
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </Section>
  );
}