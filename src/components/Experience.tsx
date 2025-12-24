import ExperienceCard from "./ExperienceCard";
import Section from "./Section";

const EXPERIENCE = [
  {
    title: "Founder & Full-Stack Engineer",
    org: "Mealpository",
    period: "2025 – Present",
    location: "Port Coquitlam, BC",
    points: [
      "Launched Mealpository (mealpository.com), a production SaaS for recipe management and meal planning.",
      "Built an OCR-powered recipe ingestion pipeline and full AWS architecture (Fargate, RDS, S3) provisioned with Terraform.",
      "Develop the Angular front end and Django REST backend with Stripe-based subscriptions and automated billing tiers.",
      "Operate the platform end-to-end, handling design, engineering, and deployment workflows independently.",
    ],
    href: "https://mealpository.com"
  },
  {
    title: "Data & Software Engineer Co-op",
    org: "Samsung R&D Canada",
    period: "Jan 2025 – December 2025",
    location: "Vancouver, BC",
    points: [
      "Owned Spark/Airflow pipelines for Samsung Health analytics and log data — 5+ DAGs in production.",
      "Designed and implemented Spark jobs for raw, conformed, and enriched-layer Iceberg tables in S3 (AWS Glue Catalog + Athena).",
      "Built dashboards for user data requests (deletion/access) and privacy metrics for the Samsung Health team.",
      "Collaborated with data analysts and scientists to support new metric pipelines and data quality initiatives.",
    ],
  },
  {
    title: "Director of Technology",
    org: "SFU Open Source Development Club",
    period: "2024 – Present",
    location: "Burnaby, BC",
    points: [
      "Oversee technical standards and code review processes for student-led open source projects.",
      "Built and maintain the club website; assist members with React/Django workflows and version control best practices.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "ViRA360",
    period: "2023",
    location: "Vancouver, BC",
    points: [
      "Developed a customer-facing survey tool using Next.js and Django to measure client productivity and recommend paid services.",
      "Delivered the feature end-to-end and shipped production code to live environments.",
    ],
  },
  {
    title: "Web Developer",
    org: "Downhole Battery Inc.",
    period: "2021 – 2022",
    location: "Calgary, AB",
    points: [
      "Redesigned and rebuilt the company website using static HTML and JavaScript for improved clarity and responsiveness.",
      "Integrated contact and WhatsApp forms, modernizing the site’s communication flow.",
    ],
  },
];

export default function Experience() {
  return (
    <Section>
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
