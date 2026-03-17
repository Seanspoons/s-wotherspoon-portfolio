import ProjectCard from "./ProjectCard";
import Section from "./Section";

const PROJECTS = [
  {
    eyebrow: "Personal Analytics Platform (In Progress)",
    title: "Streaming + batch analytics engine",
    description:
      "Event-driven personal analytics system with ingestion API, windowed aggregations, replay support, and observability. Designed as a mini data processing engine inspired by Spark-style transformations.",
    tech: ["Go", "PostgreSQL", "Docker", "Prometheus"],
    meta: "2026 • backend • data systems",
  },
  {
    eyebrow: "HavenView",
    title: "Real-time home security system",
    description:
      "Privacy-first home security platform integrating ONVIF cameras with WebRTC streaming, event buffering, retention logic, and LAN-first deployment. Migrated from Raspberry Pi to dedicated Ubuntu server.",
    tech: ["FastAPI", "React", "PostgreSQL", "WebRTC", "Docker"],
    meta: "2025 • systems • production",
  },
  {
    eyebrow: "Mealpository",
    title: "Cloud-native AWS application",
    description:
      "Full-stack web app deployed on AWS using ECS/Fargate, ALB, RDS, S3, WAF, and CloudFront. Infrastructure fully provisioned with Terraform and secured with JWT-based authentication.",
    href: "https://mealpository.com",
    tech: ["Django", "Angular", "AWS", "Terraform"],
    meta: "2025 • cloud • infrastructure",
  },
  {
    eyebrow: "Photo Watermarker",
    title: "Privacy-first client-side image processing tool",
    description:
      "A browser-based tool for watermarking photos and creating collages entirely client-side. Supports in-browser HEIC conversion, responsive previews, and full-resolution export, with no uploads or backend required.",
    href: "https://photowatermarker.com",
    githubHref: "https://github.com/Seanspoons/photo-watermarker",
    tech: ["React", "TypeScript", "Vite", "Canvas API", "heic2any", "PWA"],
    meta: "2025 • shipped product • client-side pipeline",
  },
  {
    eyebrow: "CMPT 201 Systems Programming",
    title: "Custom Unix shell & memory allocator",
    description:
      "Implemented a Unix-like shell and a custom malloc/free memory allocator in C, focusing on process control, dynamic memory management, and low-level systems concepts.",
    tech: ["C", "Process Control", "Memory Management"],
    meta: "2026 • academic • systems",
  },
  {
    eyebrow: "MCBA League",
    title: "Basketball league platform",
    description:
      "Admin dashboard and league site supporting schedules, stats, and scoring workflows for a local community league.",
    href: "https://mcba-league.com",
    tech: ["React", "Supabase", "Tailwind"],
    meta: "2025 • community • production",
  }
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
