import Section from "./Section";

export default function Hero() {
  return (
    <Section>
        <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
            Data & Full-Stack Engineer • Vancouver
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            Data&nbsp;&amp;&nbsp;Software Engineer building reliable, production-ready systems.
            </h1>

            <p className="text-slate-600 leading-relaxed max-w-xl">
            At Samsung&nbsp;R&amp;D&nbsp;Canada building data pipelines, and on the side I’m developing 
            Mealpository and KinDays&nbsp;— full-stack web products used by real people.
            </p>

            <div className="flex flex-wrap gap-3">
                <a href="#projects" className="btn-accent focus-visible-ring">
                    View projects
                </a>
                <a
                    href="mailto:seangwotherspoon3@gmail.com"
                    className="rounded-lg bg-paper px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/10 hover:bg-white focus-visible-ring"
                >
                    Email me
                </a>
                <a
                    href="https://github.com/Seanspoons"
                    className="rounded-lg bg-surface px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/5 hover:bg-paper focus-visible-ring"
                >
                    GitHub
                </a>
                <a
                    href="/Sean_Wotherspoon_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-surface px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/5 hover:bg-paper focus-visible-ring"
                >
                    Resume
                </a>
            </div>
        </div>

        <div className="rounded-2xl bg-paper p-5 shadow-sm ring-1 ring-primary/5 space-y-4">
            <h2 className="text-sm font-semibold text-primary">Current snapshot</h2>

            <div className="space-y-3 text-sm">
            <div>
                <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Now</p>
                <p className="text-slate-800">
                Data &amp; Software Engineer Co-op — Samsung&nbsp;R&amp;D&nbsp;Canada
                </p>
                <p className="text-slate-500 text-xs">Data pipelines • analytics workflows</p>
            </div>

            <div>
                <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Building</p>
                <p className="text-slate-800">
                Mealpository — meal planning platform
                </p>
                <p className="text-slate-500 text-xs">Angular • Django • AWS</p>
            </div>

            <div>
                <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Recent</p>
                <p className="text-slate-800">
                KinDays &amp; MCBA — React • Supabase • Tailwind
                </p>
            </div>
            </div>

            <p className="text-xs text-slate-400 pt-1">
            Spark • Airflow • AWS • React • Angular • Django • Supabase
            </p>
        </div>
        </section>
    </Section>
  );
}