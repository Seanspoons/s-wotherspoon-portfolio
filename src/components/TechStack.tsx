import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "../data/portfolio";

const groupLayout = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "md:col-span-2 lg:col-span-3",
] as const;

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

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              className={`h-full ${groupLayout[index] ?? "lg:col-span-2"}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-full rounded-xl bg-paper ring-1 ring-primary/5 p-4 sm:p-5 transition hover:shadow-md hover:ring-primary/10">
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
