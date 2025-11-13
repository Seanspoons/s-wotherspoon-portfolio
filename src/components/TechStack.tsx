import { motion } from "framer-motion";
import Section from "./Section";

const STACK_SECTIONS = [
  {
    label: "Languages",
    items: ["Python", "Java", "Scala", "TypeScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "Next.js", "TailwindCSS"],
  },
  {
    label: "Backend & Data",
    items: ["Django REST", "Supabase", "Spark", "Airflow", "PostgreSQL"],
  },
  {
    label: "Cloud & Infra",
    items: ["AWS (SAA-C03)", "Docker", "Terraform", "GitHub Actions"],
  }
];

export default function TechStack() {
  return (
    <Section>
      <section id="stack" className="space-y-4 scroll-mt-20">
        <h2
          className="text-lg font-semibold text-primary relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-8 after:bg-accent after:rounded"
        >
          Tech stack
        </h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {STACK_SECTIONS.map((group) => (
            <motion.div
              key={group.label}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="rounded-xl bg-paper ring-1 ring-primary/5 p-4 sm:p-5 transition hover:shadow-md hover:ring-primary/10">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-surface px-2.5 py-1 text-xs text-primary/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Section>
  );
}