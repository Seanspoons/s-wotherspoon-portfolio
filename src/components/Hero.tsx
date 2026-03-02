import Section from "./Section";

export default function Hero() {
  return (
    <Section reveal="mount">
      <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="space-y-5">
          <p className="inline-flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-medium text-accent">
            <span>Backend • Data • Infrastructure • Vancouver</span>
            <span className="hidden sm:block h-4 w-px bg-accent/40"></span>
            <span>AWS SAA-C03 certified</span>
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            Building scalable data pipelines and cloud-native systems
          </h1>

          <p className="text-slate-600 leading-relaxed max-w-xl">
            Completed a 12-month Data Engineering co-op at Samsung R&D Canada,
            working on Spark & Airflow pipelines over large-scale health logging datasets.
            I design privacy-conscious data systems, cloud infrastructure with Terraform, 
            and backend services that run reliably in production.
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
                Building a personal streaming analytics platform (in progress)
              </p>
              <p className="text-slate-500 text-xs">
                Event ingestion • windowed aggregation • replay • observability
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
                HavenView — privacy-first home security (WebRTC • ONVIF • LAN-first)
              </p>
              <p className="text-slate-800">
                Mealpository — cloud-native AWS app (Terraform • ECS/Fargate)
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 pt-1">
            Spark • Airflow • AWS • Terraform • Docker • FastAPI • WebRTC • PostgreSQL • Prometheus • React
          </p>
        </div>
      </section>
    </Section>
  );
}
