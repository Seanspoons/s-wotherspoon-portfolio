export type CurrentFocusItem = {
  title: string;
  summary: string;
  topics: string;
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
