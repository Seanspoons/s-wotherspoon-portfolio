import Section from "./Section";
import awsSAA from "../assets/aws-saa.png"
import { motion } from "framer-motion";
import { certification } from "../data/portfolio";

export default function Certifications() {
  return (
    <Section>
      <section id="certifications" className="space-y-4 scroll-mt-20">
        <h2 className="text-lg font-semibold text-primary section-title">
          Certifications
        </h2>

        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
            <div className="rounded-xl bg-paper ring-1 ring-primary/5 p-5 sm:p-6 transition hover:shadow-md hover:ring-primary/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    
                    {/* Left side: badge + text */}
                    <div className="flex items-center gap-4">
                    <img
                        src={awsSAA}
                        alt="AWS Certified Solutions Architect Associate badge"
                        className="h-12 w-auto rounded-sm"
                    />

                    <div>
                        <p className="font-medium text-primary">
                        {certification.title}
                        </p>
                        <p className="text-xs text-slate-500">
                        {certification.period}
                        </p>
                    </div>
                    </div>

                    {/* Right side: link */}
                    <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-accent/80 whitespace-nowrap focus-visible-ring rounded"
                    >
                    Verify credential →
                    </a>
                </div>
            </div>
        </motion.div>
      </section>
    </Section>
  );
}
