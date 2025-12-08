import { useNavigate, useParams } from "react-router-dom";
import type { ReactNode } from "react";
import { NOTES } from "./Notes";
import HavenViewNote from "./notes/HavenViewNote";

const NOTE_COMPONENTS: Record<string, ReactNode> = {
  "havenview-v1": <HavenViewNote />,
};

export default function NotePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const meta = NOTES.find((n) => n.slug === slug);
  const content = slug ? NOTE_COMPONENTS[slug] : null;
  
  const handleBack = () => {
    navigate("/", { state: { scrollTo: "notes" } });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-4">
      <button
        type="button"
        onClick={handleBack}
        className="text-[11px] text-slate-500 hover:text-accent"
      >
        ← Back to notes
      </button>

      {!meta || !content ? (
        <p className="text-sm text-slate-600">
          Note not found. Try going back to notes on the home page.
        </p>
      ) : (
        <section className="space-y-5">
          <article className="rounded-2xl bg-paper p-6 md:p-8 shadow-sm ring-1 ring-primary/5 space-y-5">
            <header className="space-y-1">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                {meta.date}
              </p>
              <h1 className="text-xl md:text-2xl font-semibold text-primary">
                {meta.title}
              </h1>
            </header>

            <div className="border-t border-slate-200 pt-4">
              {content}
            </div>
          </article>
        </section>
      )}
    </div>
  );
}