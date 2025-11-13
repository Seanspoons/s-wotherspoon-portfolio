import Section from "./Section";
import awsSAA from "../assets/aws-saa.png"

export default function Certifications() {
  return (
    <Section>
      <section id="certifications" className="space-y-4 scroll-mt-20">
        <h2 className="text-lg font-semibold text-primary section-title">
          Certifications
        </h2>

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
                  AWS Certified Solutions Architect — Associate (SAA-C03)
                </p>
                <p className="text-xs text-slate-500">
                  Issued 2024 • Valid through 2027
                </p>
              </div>
            </div>

            {/* Right side: link */}
            <a
              href="https://www.credly.com/badges/efcfddfd-eefa-4c77-a377-11a3f09edb88/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent/80 whitespace-nowrap focus-visible-ring rounded"
            >
              Verify credential →
            </a>
          </div>
        </div>
      </section>
    </Section>
  );
}