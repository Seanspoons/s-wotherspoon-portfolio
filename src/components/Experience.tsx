import ExperienceCard from "./ExperienceCard";

const EXPERIENCE = [
  {
    title: "Data & Software Engineer Co-op",
    org: "Samsung R&D Canada",
    period: "Fall 2025",
    location: "Vancouver, BC",
    points: [
      "Built Spark/Airflow pipelines for privacy and analytics.",
      "Worked with deferrable operators and data quality checks.",
    ],
  },
  {
    title: "Founder & Full-Stack Engineer",
    org: "Mealpository",
    period: "2025 – Present",
    location: "Port Coquitlam, BC",
    points: [
      "Angular + Django + AWS Fargate/RDS, Terraform.",
      "Stripe subscription tiers and OCR-based recipe intake.",
    ],
  },
  {
    title: "Director of Technology",
    org: "SFU Open Source Development Club",
    period: "2024 – 2025",
    location: "Burnaby, BC",
    points: [
      "Set repo standards and onboarding for student projects.",
      "Mentored React/Django builds.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "ViRA360",
    period: "Past role",
    points: ["Supported web features and internal tooling."],
  },
  {
    title: "Web Developer",
    org: "Downhole Battery Inc.",
    period: "Past role",
    points: ["Maintained company web presence."],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-4">
      <h2 className="text-lg font-semibold text-primary">Experience</h2>
      <div className="space-y-3">
        {EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.title} {...exp} />
        ))}
      </div>
    </section>
  );
}