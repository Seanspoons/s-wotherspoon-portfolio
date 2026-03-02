import ExperienceCard from "./ExperienceCard";
import Section from "./Section";

const EXPERIENCE = [
  {
    title: "Data & Software Engineer Co-op",
    org: "Samsung R&D",
    period: "Jan 2025 – Dec 2025",
    location: "Vancouver, BC",
    points: [
      "Designed and deployed Spark + Airflow pipelines for privacy compliance reporting (delete/access requests), generating de-identified datasets for analytics.",
      "Implemented and productionized a conformed data model built on core Samsung Health logging tables (billions of total records), enabling daily downstream enrichment workflows.",
      "Developed data generators for 133+ tables to simulate production workloads and validate ETL transformations in development environments.",
      "Enabled Tableau-ready reporting tables and dashboards to improve visibility into processing timelines and compliance metrics.",
    ],
  },
  {
    title: "Director of Technology",
    org: "SFU Open Source Development Club",
    period: "2024 – Present",
    location: "Burnaby, BC",
    points: [
      "Oversaw technical direction of student-led projects, mentoring developers on architecture, Git workflows, and documentation practices.",
      "Structured onboarding processes and technical documentation standards to improve project continuity and collaboration.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    org: "ViRA360",
    period: "2024 (8 weeks)",
    location: "Vancouver, BC",
    points: [
      "Delivered a customer-facing survey tool to measure client productivity and recommend services.",
      "Shipped production features using Next.js and Django in a fast, iterative client environment.",
    ],
  },
];

export default function Experience() {
  return (
    <Section reveal="mount">
        <section id="experience" className="space-y-4">
        <h2 className="text-lg font-semibold text-primary relative
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-8 after:bg-accent after:rounded">
            Experience
        </h2>
        <div className="space-y-3">
            {EXPERIENCE.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
            ))}
        </div>
        </section>
    </Section>
  );
}
