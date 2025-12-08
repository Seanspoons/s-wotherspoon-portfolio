import { Link } from "react-router-dom";
import type { Note } from "./Notes";

type NoteCardProps = {
  note: Note;
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link to={`/notes/${note.slug}`}>
      <article className="rounded-xl bg-paper ring-1 ring-primary/5 p-4 sm:p-5 hover:shadow-md hover:ring-primary/10 transition h-full">
        <p className="text-xs text-slate-400 mb-1">{note.date}</p>
        <h3 className="text-sm font-semibold text-primary">{note.title}</h3>
        <p className="text-sm text-slate-600 mt-1">{note.summary}</p>
        <span className="mt-2 inline-flex text-xs text-accent">
          Read note →
        </span>
      </article>
    </Link>
  );
}