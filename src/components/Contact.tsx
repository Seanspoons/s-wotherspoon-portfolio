import Section from "./Section";

export default function Contact() {
  return (
    <Section>
        <section id="contact" className="pb-10">
        <div className="rounded-2xl bg-paper p-6 ring-1 ring-primary/5">
            <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-primary">Let’s talk</h2>
            <p className="text-sm text-slate-600">
                Happy to connect about data, software, or product work. I usually respond fastest by email or LinkedIn.
            </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                    href="mailto:seangwotherspoon3@gmail.com"
                    className="btn-accent focus-visible-ring"
                >
                    Email
                </a>
                <a
                    href="https://linkedin.com/in/seanwotherspoon"
                    className="rounded-lg bg-surface px-4 py-2 text-primary ring-1 ring-primary/5 hover:bg-paper focus-visible-ring"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/Seanspoons"
                    className="rounded-lg bg-surface px-4 py-2 text-primary ring-1 ring-primary/5 hover:bg-paper focus-visible-ring"
                >
                    GitHub
                </a>
                <a
                    href="/Sean_Wotherspoon_Resume.pdf"
                    className="rounded-lg bg-surface px-4 py-2 text-primary ring-1 ring-primary/5 hover:bg-paper focus-visible-ring"
                >
                    Resume
                </a>
            </div>
        </div>
        </section>
    </Section>
  );
}