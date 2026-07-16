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
