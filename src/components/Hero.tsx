import Section from "./Section";

export default function Hero() {
  return (
    <Section reveal="mount">
      <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="space-y-5">
          <p className="inline-flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-medium text-accent">
            <span>Data & Full-Stack Engineer • Vancouver</span>
            <span className="hidden sm:block h-4 w-px bg-accent/40"></span>
            <span>AWS SAA-C03 certified</span>
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            Data&nbsp;&amp;&nbsp;Software Engineer building reliable, production-ready systems
          </h1>

          <p className="text-slate-600 leading-relaxed max-w-xl">
            Recently wrapped up a co-op at Samsung&nbsp;R&amp;D&nbsp;Canada, and on the side I’m
            developing Mealpository and KinDays, plus HavenView, a self-hosted home security
            hub running on a Raspberry Pi 5.
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
                Building Mealpository v2 — mobile-first meal planning app
              </p>
              <p className="text-slate-500 text-xs">
                Mobile UX • offline-friendly flows • API-backed features
              </p>
            </div>

            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Recently</p>
              <p className="text-slate-800">
                Completed Data Engineer Co-op — Samsung&nbsp;R&amp;D&nbsp;Canada
              </p>
              <p className="text-slate-500 text-xs">Spark • Airflow • AWS analytics</p>
            </div>

            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Recent</p>
              <p className="text-slate-800">
                HavenView — self-hosted home security hub (Raspberry Pi 5)
              </p>
              <p className="text-slate-800">
                KinDays &amp; MCBA — React • Supabase • Tailwind
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 pt-1">
            Spark • Airflow • AWS • React • Angular • Django • Supabase • FastAPI • WebRTC • Docker • Raspberry&nbsp;Pi
          </p>
        </div>
      </section>
    </Section>
  );
}
