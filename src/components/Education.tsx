import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "../data/portfolio";
import sfuLogo from "../assets/sfu-logo.png"

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
                
                <div className="flex flex-row items-center gap-4 rounded-xl bg-paper ring-1 ring-primary/5 p-5 sm:p-6 transition hover:shadow-md hover:ring-primary/10">
                    <img
                        src={sfuLogo}
                        alt="AWS Certified Solutions Architect Associate badge"
                        className="h-10 w-auto rounded-sm"
                    />
                    <div className="flex flex-col w-full space-y-3">
                        {/* header */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
                            <h3 className="font-medium text-primary">{education.school}</h3>
                            <p className="text-xs text-slate-500">{education.period}</p>
                        </div>

                        <p className="text-sm text-slate-600">
                            {education.degree}
                        </p>
                    </div>
                </div>
            </section>
        </Section>
    </motion.div>
  );
}
