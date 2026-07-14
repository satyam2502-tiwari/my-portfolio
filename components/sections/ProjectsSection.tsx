import Link from "next/link";
import { projects, type Project } from "@/data/projects";

/* ── Status pill ──────────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: Project["status"] }) {
  const config = {
    live: {
      label: "Live",
      className:
        "border-red-600/30 bg-red-600/10 text-red-500",
      dot: "bg-red-500",
    },
    wip: {
      label: "In progress",
      className:
        "border-amber-500/30 bg-amber-500/10 text-amber-400",
      dot: "bg-amber-400",
    },
    archived: {
      label: "Archived",
      className:
        "border-slate-600/50 bg-slate-800/60 text-slate-500",
      dot: "bg-slate-500",
    },
  } as const;

  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${c.className}`}
    >
      <span className={`size-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}

/* ── External link icon ───────────────────────────────────────────────── */
function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={`size-3.5 ${className}`}
    >
      <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
      <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
    </svg>
  );
}

/* ── GitHub icon ──────────────────────────────────────────────────────── */
function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-4 ${className}`}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

/* ── Single project card ──────────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-600/50 hover:shadow-[0_0_40px_rgba(236,29,36,0.25)]">
      {/* Sweeping cinematic light effect */}
      <div className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" style={{ zIndex: 1 }} />
      {/* Gradient accent header */}
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`}
        style={{
          backgroundImage: undefined, // let Tailwind handle it
        }}
      />

      {/* Card glow on hover — absolutely positioned */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${project.gradient}`}
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 flex flex-1 flex-col gap-4 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-bold leading-snug text-slate-100 transition-colors duration-200 group-hover:text-white">
              {project.title}
            </h3>
            <StatusBadge status={project.status} />
          </div>

          {/* Action links */}
          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={project.repoHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="flex size-8 items-center justify-center rounded-lg border border-white/[0.07] text-slate-500 transition-all duration-150 hover:border-white/15 hover:bg-white/[0.05] hover:text-slate-300"
            >
              <GitHubIcon />
            </a>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live site for ${project.title}`}
              className="flex size-8 items-center justify-center rounded-lg border border-white/[0.07] text-slate-500 transition-all duration-150 hover:border-red-600/30 hover:bg-red-600/[0.08] hover:text-red-500"
            >
              <ExternalLinkIcon />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-slate-400 transition-colors duration-150 group-hover:border-white/[0.10] group-hover:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ── Section label ────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-500">
      <span className="size-1.5 rounded-full bg-red-500" />
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   Projects Section
   ═══════════════════════════════════════════════════════════════════════ */
export default async function ProjectsSection() {
  let displayProjects = projects;

  try {
    const res = await fetch("https://api.github.com/users/satyam2502-tiwari/repos?sort=updated&per_page=3&type=owner", {
      next: { revalidate: 3600 },
    });
    
    if (res.ok) {
      const repos = await res.json();
      if (repos && repos.length > 0) {
        const gradients = [
          "from-red-600/20 via-yellow-500/10 to-transparent",
          "from-yellow-500/20 via-red-600/10 to-transparent",
          "from-red-900/20 via-orange-500/10 to-transparent",
        ];
        displayProjects = repos.map((repo: any, index: number) => ({
          id: String(repo.id),
          title: repo.name.replace(/-/g, ' '),
          description: repo.description || "No description provided.",
          tags: repo.topics?.length ? repo.topics : (repo.language ? [repo.language] : ["Code"]),
          href: repo.homepage || repo.html_url,
          repoHref: repo.html_url,
          featured: true,
          status: repo.archived ? "archived" : "live",
          gradient: gradients[index % gradients.length],
        }));
      }
    }
  } catch (error) {
    console.error("GitHub fetch failed, falling back to static projects.");
  }

  // Ensure we only show exactly 3 projects (either from live GitHub or static fallback)
  const topProjects = displayProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* ── Section header ───────────────────────────────────────── */}
      <div className="mb-14 flex flex-col gap-4">
        <SectionLabel>Selected Work</SectionLabel>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
              Things I&apos;ve built
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-400">
              A selection of projects spanning developer tooling, SaaS products,
              and open-source libraries. Every one ships with tests, CI/CD, and
              a solid paper trail.
            </p>
          </div>

          <Link
            href="https://github.com/satyam2502-tiwari"
            target="_blank"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-red-500"
          >
            View all on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Featured projects — 3-col grid ───────────────────────── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
