import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
        <Section>
            <section id="education" className="space-y-4">
            <h2 className="text-lg font-semibold text-primary relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-8 after:bg-accent after:rounded">
                Education
            </h2>

            <div className="rounded-xl bg-paper ring-1 ring-primary/5 p-5 sm:p-6 transition hover:shadow-md hover:ring-primary/10 space-y-3">
                {/* header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
                <h3 className="font-medium text-primary">{education.school}</h3>
                <p className="text-xs text-slate-500">{education.period}</p>
                </div>

                <p className="text-sm text-slate-600">
                {education.degree}
                </p>

                {/* Courses inline */}
                <div className="flex flex-wrap gap-2 pt-1">
                {education.courses.map((course) => (
                    <span
                    key={course}
                    className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-primary/70"
                    >
                    {course}
                    </span>
                ))}
                </div>
            </div>
            </section>
        </Section>
    </motion.div>
  );
}
