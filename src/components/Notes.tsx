import { motion } from "framer-motion";
import Section from "./Section";
import NoteCard from "./NoteCard";

export type Note = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  href?: string;
};

const NOTES: Note[] = [
  {
    slug: "havenview-v1",
    title: "HavenView v1 — self-hosted home security hub",
    date: "Dec 7, 2025",
    summary:
      "How I designed and shipped HavenView v1: a private, Raspberry Pi–based home security hub with WebRTC live view and motion recording.",
  },
];

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
          Short write-ups on things I’ve built or learned.
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
                key={note.slug}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <NoteCard note={note} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </Section>
  );
}

export { NOTES };