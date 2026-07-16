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

export type ProjectStatus =
  | "Private beta"
  | "Rebuild in progress"
  | "Production"
  | "Maintained"
  | "Completed"
  | "Internal tool"
  | "In development";

export type ProjectGroup = "featured" | "additional" | "archive";

export type Project = {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  meta: string;
  group: ProjectGroup;
  href?: string;
  githubHref?: string;
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
  linkedIn: "https://linkedin.com/in/seanwotherspoon",
  resume: "/Sean_Wotherspoon_Resume.pdf",
  headline:
    "Building reliable backend systems, cloud infrastructure, and production software",
  introduction:
    "I’m a software engineer with professional experience in data engineering, backend development, and cloud infrastructure. During a 12-month Data Engineering co-op at Samsung R&D Canada, I built Spark and Airflow pipelines over large-scale Samsung Health logging datasets. Outside of work, I build and operate production software spanning budgeting, monitoring, developer tools, and cloud-native applications.",
} as const;

export const currentSnapshot: CurrentFocusItem[] = [
  {
    title: "Harbour",
    summary: "Running a private beta with a small group of early users.",
    topics: "Budgeting • Plaid • transaction review • envelope planning",
  },
  {
    title: "Mealpository",
    summary: "Rebuilding the product into its first cohesive, production-ready release.",
    topics: "Collaborative kitchens • recipes • pantry • meal planning",
  },
  {
    title: "Alderwood Software",
    summary: "Building the consulting business and working through prospective opportunities.",
    topics: "Product discovery • technical planning • delivery systems",
  },
];

export const currentFocus = [
  "Rebuilding Mealpository into a cohesive, production-ready V1.",
  "Running a small private beta of Harbour and improving its budgeting and transaction-review workflows.",
  "Developing Alderwood Software’s consulting systems and working through prospective opportunities.",
  "Preparing for full-time software engineering opportunities ahead of my April 2027 graduation.",
  "Continuing to deepen my backend, infrastructure, and system design skills through production projects.",
] as const;

export const experiences: Experience[] = [
  {
    title: "Data & Software Engineer Co-op",
    org: "Samsung R&D Canada",
    period: "January 2025 – December 2025",
    location: "Vancouver, BC",
    points: [
      "Designed and deployed Spark and Airflow pipelines supporting privacy compliance reporting and generating de-identified datasets for analytics.",
      "Built and productionized a conformed data model over core Samsung Health logging tables with billions of total records, enabling daily downstream enrichment workflows.",
      "Developed data generators covering 133+ tables to simulate production workloads and validate ETL transformations in development environments.",
      "Prepared Tableau-ready reporting tables and processing views to make compliance workflows and timelines easier to inspect.",
    ],
  },
  {
    title: "Founder & Software Engineer",
    org: "Alderwood Software",
    period: "June 2026 – Present",
    location: "Port Coquitlam / Vancouver, BC",
    points: [
      "Building custom software, websites, internal tools, and cloud solutions for small businesses while managing product discovery, technical planning, proposals, delivery systems, and business operations.",
    ],
  },
  {
    title: "Director of Technology",
    org: "SFU Open Source Development Club",
    period: "2024 – July 2026",
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

export const projects: Project[] = [
  {
    id: "harbour",
    title: "Harbour",
    category: "Personal budgeting and financial clarity platform",
    status: "Private beta",
    description:
      "A budgeting application that connects financial accounts, brings new transactions into a review workflow, and helps users maintain an envelope-based plan grounded in what actually happened.",
    href: "https://harbourbudget.com",
    tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Plaid"],
    meta: "2026–present • product • private beta",
    group: "featured",
  },
  {
    id: "mealpository",
    title: "Mealpository",
    category: "Collaborative recipe and meal-planning platform",
    status: "Rebuild in progress",
    description:
      "A multi-user food planning platform built around shared kitchens, recipe organization, pantry tracking, meal planning, grocery workflows, and controlled sharing. The current rebuild is consolidating those capabilities into a cohesive V1.",
    href: "https://mealpository.com",
    tech: ["Python", "React", "PostgreSQL", "AWS", "Terraform"],
    meta: "2025–present • product • cloud infrastructure",
    group: "featured",
  },
  {
    id: "stackpulse",
    title: "StackPulse",
    category: "Application monitoring and incident management platform",
    status: "Production",
    description:
      "A monitoring platform for applications and services with scheduled health checks, incident lifecycle management, email and Discord alerts, public status pages, and documentation. Operational safeguards include rate limits, SSRF protection, and encrypted check credentials.",
    href: "https://stackpulsehq.dev",
    githubHref: "https://github.com/Seanspoons/stack-pulse",
    tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker"],
    meta: "2026 • backend • observability",
    group: "featured",
  },
  {
    id: "havenview",
    title: "HavenView",
    category: "Privacy-first home security platform",
    status: "Completed",
    description:
      "A LAN-first home security system integrating ONVIF cameras, WebRTC live streaming, motion-triggered recording, event buffering, retention controls, and self-hosted deployment on a dedicated Ubuntu server.",
    githubHref: "https://github.com/Seanspoons/havenview",
    tech: ["FastAPI", "React", "PostgreSQL", "WebRTC", "Docker"],
    meta: "2025 • systems • private production deployment",
    group: "featured",
  },
  {
    id: "waypoint",
    title: "Waypoint",
    category: "Lightweight CRM and consulting operations platform",
    status: "Internal tool",
    description:
      "A private consulting operations system for companies, contacts, opportunities, pipelines, next actions, calendar workflows, and relationship history. It also includes global search and keyboard navigation.",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Google Calendar"],
    meta: "2026 • Alderwood Software • internal operations",
    group: "additional",
  },
  {
    id: "simple-pdf-tools",
    title: "Simple PDF Tools",
    category: "Privacy-first browser-based PDF utilities",
    status: "Production",
    description:
      "Browser-side PDF tools for merging documents and splitting by selected pages, individual pages, or ranges. Previewing and exports stay on the device with no upload or account required.",
    href: "https://simplepdftools.app",
    githubHref: "https://github.com/Seanspoons/simple-pdf-tools",
    tech: ["React", "TypeScript", "pdf-lib", "PDF.js", "PWA"],
    meta: "2026 • browser-side processing",
    group: "additional",
  },
  {
    id: "simple-photo-tools",
    title: "Simple Photo Tools",
    category: "Privacy-first browser-based photo utilities",
    status: "Production",
    description:
      "A suite of browser-based photo tools for watermarking, collages, conversion, resizing, compression, cropping, rotation, social formatting, and metadata removal. Files stay on the device.",
    href: "https://simplephototools.com",
    githubHref: "https://github.com/Seanspoons/simple-photo-tools",
    tech: ["React", "TypeScript", "Canvas API", "PWA"],
    meta: "2025 • browser-side processing",
    group: "additional",
  },
  {
    id: "runlytical",
    title: "Runlytical",
    category: "Running training insights platform",
    status: "In development",
    description:
      "An iPhone and Apple Watch product for recording and importing running workouts, then shaping them into training signals, trends, and prediction inputs through a shared backend and data model.",
    githubHref: "https://github.com/Seanspoons/runlytical",
    tech: ["Swift", "HealthKit", "watchOS", "TypeScript", "PostgreSQL"],
    meta: "2026 • iOS • data product",
    group: "additional",
  },
  {
    id: "cmpt-201-systems",
    title: "CMPT 201 Systems Programming",
    category: "Systems programming coursework",
    status: "Completed",
    description:
      "A Unix-like shell, custom malloc/free memory allocator, and MapReduce system built in C, covering process control, dynamic memory management, and parallel systems concepts.",
    tech: ["C", "Process Control", "Memory Management", "MapReduce"],
    meta: "2026 • academic • systems",
    group: "archive",
  },
  {
    id: "mcba-league",
    title: "MCBA League",
    category: "Community basketball league platform",
    status: "Production",
    description:
      "An admin dashboard and public league site supporting schedules, standings, statistics, and scoring workflows for a local community league.",
    href: "https://mcba-league.com",
    githubHref: "https://github.com/Seanspoons/mcba",
    tech: ["React", "Supabase", "Tailwind CSS"],
    meta: "2025 • community • production",
    group: "additional",
  },
  {
    id: "studypreplab",
    title: "StudyPrepLab",
    category: "Structured study platform",
    status: "In development",
    description:
      "A class-based study system that turns source material into durable Learn and Practice artifacts, repeatable sessions, and progress history.",
    githubHref: "https://github.com/Seanspoons/studypreplab",
    tech: ["React", "Fastify", "PostgreSQL", "Drizzle"],
    meta: "2026 • education • backend",
    group: "archive",
  },
  {
    id: "cmpt-263-exam-trainer",
    title: "CMPT 263 Exam Trainer",
    category: "Human-computer interaction study tool",
    status: "Completed",
    description:
      "A focused final-exam practice application for SFU Human-Centered Computing course material.",
    githubHref: "https://github.com/Seanspoons/cmpt263-exam-trainer",
    tech: ["React", "TypeScript", "Vite"],
    meta: "2026 • academic • learning tool",
    group: "archive",
  },
  {
    id: "cmpt-201-exam-trainer",
    title: "CMPT 201 Exam Trainer",
    category: "Systems programming study tool",
    status: "Completed",
    description:
      "An interactive trainer spanning 20 lecture-aligned systems topics with generated drills, immediate feedback, and step-by-step explanations.",
    githubHref: "https://github.com/Seanspoons/cmpt201-exam-trainer",
    tech: ["React", "TypeScript", "Vite"],
    meta: "2026 • academic • learning tool",
    group: "archive",
  },
  {
    id: "makerventory",
    title: "Makerventory",
    category: "3D printing inventory and operations manager",
    status: "In development",
    description:
      "An operations workspace for printers, hardware assignments, filament, consumables, maintenance, imports, and purchase planning.",
    githubHref: "https://github.com/Seanspoons/makerventory",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    meta: "2026 • product • operations",
    group: "archive",
  },
  {
    id: "kindays",
    title: "KinDays",
    category: "Private shared family calendar",
    status: "Production",
    description:
      "A shared family space for birthdays, anniversaries, memorials, milestones, and date calculations.",
    href: "https://kindays.app",
    githubHref: "https://github.com/Seanspoons/kindays",
    tech: ["React", "TypeScript", "Supabase"],
    meta: "2025 • family utility • production",
    group: "archive",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    category: "Personal portfolio and technical writing",
    status: "Production",
    description:
      "This responsive portfolio, including the project archive and a long-form HavenView architecture note.",
    href: "https://seanwotherspoon.ca",
    githubHref: "https://github.com/Seanspoons/s-wotherspoon-portfolio",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    meta: "2025–present • web • production",
    group: "archive",
  },
];

export const aboutParagraphs = [
  "I’m a software engineer focused on backend systems, data engineering, and cloud infrastructure. During my 12-month co-op at Samsung R&D Canada, I built Spark and Airflow pipelines supporting privacy compliance and analytics over large-scale Samsung Health logging datasets.",
  "Outside of professional work, I build and operate production software products across budgeting, monitoring, meal planning, developer tools, and home infrastructure. I enjoy owning systems end to end, from product decisions and data models to deployment, observability, security, and long-term maintenance.",
  "I’m completing my Computing Science degree at Simon Fraser University and expect to graduate in April 2027.",
] as const;

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
