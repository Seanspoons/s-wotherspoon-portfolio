import ProjectCard from "./ProjectCard";
import Section from "./Section";

const PROJECTS = [
  {
    eyebrow: "KinDays",
    title: "Private family dates app",
    description:
        "Production React + Supabase web app for invite-only family spaces with OAuth authentication. Live at kindays.app, designed and maintained independently with a privacy-first approach.",
    href: "https://kindays.app",
    tech: ["React", "Supabase", "Tailwind"],
    meta: "2025 • personal • production",
  },
  {
    eyebrow: "MCBA League",
    title: "Basketball league platform",
    description:
        "Full-stack site and admin dashboard for the MCBA league (6 teams, 24 players). Admins manage schedules, stats, and scores through a secure dashboard built on a Supabase backend, supporting a local community league.",
    href: "https://mcba-league.com",
    tech: ["React", "Supabase", "Tailwind"],
    meta: "2025 • community • production",
  },
  {
    eyebrow: "TypeAid",
    title: "Accessible predictive text editor",
    description:
        "Class project using Angular + Python to reduce keystrokes for users with motor disabilities through NLP-based word prediction.",
    githubHref: "https://github.com/Seanspoons/TypeAid",
    tech: ["Angular", "Python", "NLP"],
    meta: "Academic • accessibility",
  },
  {
    eyebrow: "N-Puzzle Solver",
    title: "CLI solver for N-Puzzle up to 7×7",
    description:
        "Java implementation of A* search with multiple heuristics and a command-line interface for algorithm testing.",
    githubHref: "https://github.com/Seanspoons/N-Puzzle-Solver",
    tech: ["Java", "Algorithms", "A*"],
    meta: "Academic • algorithms",
  },
  {
    eyebrow: "Yelp Database",
    title: "Business & review explorer",
    description:
        "Java Swing + MSSQL GUI enabling CRUD on Yelp data — users, reviews, and businesses — showcasing relational database design and SQL joins.",
    githubHref: "https://github.com/Seanspoons/Yelp-Database-Application",
    tech: ["Java", "MSSQL", "Swing"],
    meta: "Academic • databases",
  },
];

export default function Projects() {
  return (
    <Section>
        <section id="projects" className="space-y-4">
        <div className="flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-primary relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-8 after:bg-accent after:rounded">
                Projects
            </h2>
            <p className="text-xs text-slate-500">Recent &amp; selected work</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
            {PROJECTS.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
            ))}
        </div>
        </section>
    </Section>
  );
}