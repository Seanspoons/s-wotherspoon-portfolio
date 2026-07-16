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
  | "Internal tool";

export type Project = {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  meta: string;
  featured: boolean;
  href?: string;
  githubHref?: string;
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
    id: "mealpository",
    title: "Mealpository",
    category: "Collaborative recipe and meal-planning platform",
    status: "Rebuild in progress",
    description:
      "A multi-user food planning platform built around shared kitchens, recipe organization, pantry tracking, meal planning, grocery workflows, and controlled sharing.",
    href: "https://mealpository.com",
    tech: ["Python", "React", "PostgreSQL", "AWS", "Terraform"],
    meta: "2025–present • product • cloud infrastructure",
    featured: true,
  },
  {
    id: "havenview",
    title: "HavenView",
    category: "Privacy-first home security platform",
    status: "Completed",
    description:
      "A LAN-first home security system integrating ONVIF cameras, WebRTC live streaming, motion-triggered recording, event buffering, retention controls, and self-hosted deployment on a dedicated Ubuntu server.",
    tech: ["FastAPI", "React", "PostgreSQL", "WebRTC", "Docker"],
    meta: "2025 • systems • private production deployment",
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
