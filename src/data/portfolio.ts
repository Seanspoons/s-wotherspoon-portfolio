export type CurrentFocusItem = {
  title: string;
  summary: string;
  topics: string;
};

export type Experience = {
  title: string;
  org: string;
  period: string;
  location: string;
  points: string[];
};

export type ProjectGroup = "featured" | "additional" | "archive";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  meta: string;
  href?: string;
  githubHref?: string;
  hrefText?: string;
  imgSrc?: string;
  imgAlt?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Sean Wotherspoon",
  location: "Metro Vancouver, BC",
  email: "seangwotherspoon3@gmail.com",
  github: "https://github.com/Seanspoons",
  linkedIn: "https://linkedin.com/in/sean-wotherspoon",
  resume: "/Sean_Wotherspoon_Resume.pdf",
  headline:
    "Data engineer building reliable pipelines and backend systems.",
  introduction:
    "I completed a 12-month Data Engineering co-op at Samsung R&D Canada, where I shipped production Scala/Spark pipelines, Airflow workflows and internal data tooling. I’m seeking new-graduate data engineering and backend/platform roles beginning in spring 2027.",
} as const;

export const currentSnapshot: CurrentFocusItem[] = [
  {
    title: "Samsung R&D Canada",
    summary: "12-month data engineering co-op supporting the Samsung Health data platform.",
    topics: "Budgeting • Plaid • transaction review • envelope planning",
  },
  {
    title: "Production data systems",
    summary: "Scala, Apache Spark, Airflow, Iceberg, backfills and rerun-safe processing.",
    topics: "Collaborative kitchens • recipes • pantry • meal planning",
  },
  {
    title: "Current work",
    summary: "Delivering a $10,000 client engagement through Alderwood Software.",
    topics: "",
  },
  {
    title: "Availability",
    summary: "Spring 2027 • Metro Vancouver or remote within Canada",
    topics: "",
  },
];

export const experiences: Experience[] = [
  {
    title: "Data Engineer Co-op",
    org: "Samsung R&D Canada",
    period: "January 2025 – December 2025",
    location: "Vancouver, BC",
    points: [
      "Implemented and tested production Scala/Spark transformations for a daily pipeline supporting one of Samsung Health’s largest conformed datasets.",
      "Owned a GDPR analytics initiative from design through deployment, building two reporting tables, two Spark pipelines and two Airflow DAGs integrating DynamoDB and lakehouse data.",
      "Built production Airflow DAGs, supported backfills and designed Spark jobs for safe reruns of failed and historical partitions.",
      "Created a reusable synthetic-data generator pattern and automated it across 133+ lakehouse tables for local Spark development and transformation testing.",
      "Built Tableau dashboards and presented the system’s design, results and operational limitations to the engineering team and senior engineers.",
    ],
  },
  {
    title: "Founder & Software Consultant",
    org: "Alderwood Software",
    period: "June 2026 – Present",
    location: "British Columbia, Canada",
    points: [
      "Secured and manage a $10,000 website redesign and implementation engagement, owning delivery from requirements discovery through launch.",
      "Led discovery with the client’s owners, partners and employees and delivered the first-round design package for a Next.js website with technical SEO and Microsoft 365-integrated workflows.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "mealpository",
    title: "Mealpository",
    category: "Collaborative recipe and meal-planning platform",
    description:
      "A live meal-planning platform for organizing recipes, planning weekly meals and generating grocery lists. Its digitization pipeline combines Google Cloud Vision OCR with LLM-based extraction to turn recipe photos into structured application data.",
    href: "https://mealpository.com",
    tech: ["Angular", "Django", "PostgreSQL", "Docker", "Google Cloud Vision"],
    meta: "2024–present • live product • approximately 30 registered users",
    hrefText: "Visit site",
    imgSrc: "/projects/mealpository.png",
    imgAlt: "Mealpository product screenshot showing the recipes page with 4 favourites recipes in the library and filters and navigation visible along the left and top sides of the library."
  },
  {
    id: "havenview",
    title: "HavenView",
    category: "Privacy-first home security platform",
    description:
      "A LAN-first home security platform integrating ONVIF cameras, go2rtc/WebRTC streaming, a FastAPI backend and local motion recordings. It runs on a dedicated Ubuntu server with configurable retention and secure remote access.",
    href: "https://seanwotherspoon.ca/articles/havenview-v1",
    tech: ["FastAPI", "React", "WebRTC", "Docker", "PostgreSQL", "Redis", "Cloudflare"],
    meta: "2025-present • self-hosted • in active use",
    hrefText: "Read case study",
    imgSrc: "/projects/havenview.png",
    imgAlt: "HavenView Raspberry Pi 5 internal architecture diagram showing Docker services, go2rtc, PostgreSQL, Redis, and storage.",
  },
];

export const principles = [
  "Design for reliability first",
  "Understand the system end to end",
  "Optimize for clarity over complexity",
] as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Go", "TypeScript", "Scala", "Java", "SQL", "C"],
  },
  {
    label: "Data Engineering",
    items: ["Apache Spark", "Apache Airflow", "PostgreSQL"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Django REST Framework", "Node.js", "Redis"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["AWS", "Terraform", "Docker", "GitHub Actions", "Prometheus", "Cloudflare"],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "Next.js", "Tailwind CSS"],
  },
];

export const education = {
  school: "Simon Fraser University",
  degree: "Bachelor of Science in Computing Science",
  period: "September 2021 – April 2027",
  courses: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Computer Networking",
    "Operating Systems",
    "Systems Programming",
    "Software Engineering",
  ],
} as const;

export const certification = {
  title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
  period: "Issued 2025 • Valid through 2028",
  verificationUrl:
    "https://www.credly.com/badges/efcfddfd-eefa-4c77-a377-11a3f09edb88/public_url",
} as const;
