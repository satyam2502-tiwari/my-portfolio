import Link from "next/link";

/* ── Tiny icon components (inline SVGs — no extra dep needed) ─────────── */
function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`size-4 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DownloadIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`size-4 ${className}`}
    >
      <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
      <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
    </svg>
  );
}

/* ── Availability badge ───────────────────────────────────────────────── */
function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-1.5 text-sm font-medium text-red-500">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-red-600" />
      </span>
      Available for new projects
    </div>
  );
}

/* ── Stat chip ────────────────────────────────────────────────────────── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-2xl font-bold tracking-tight text-white">{value}</span>
      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   Hero Section
   ═══════════════════════════════════════════════════════════════════════ */
export default async function HeroSection() {
  let profile = {
    name: "Satyam",
    bio: "CS student passionate about full-stack development, AI/ML, and RAG systems. I build real-world projects with React, Next.js, Node.js, Python, and C++.",
    repos: "6+",
    followers: "0",
    avatar_url: "https://ui-avatars.com/api/?name=Satyam+Tiwari&background=10b981&color=fff&size=128",
  };

  try {
    const res = await fetch("https://api.github.com/users/satyam2502-tiwari", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.name) profile.name = data.name.split(" ")[0];
      if (data.bio) profile.bio = data.bio;
      if (data.public_repos !== undefined) profile.repos = data.public_repos.toString();
      if (data.followers !== undefined) profile.followers = data.followers.toString();
      if (data.avatar_url) profile.avatar_url = data.avatar_url;
    }
  } catch (error) {
    console.error("GitHub fetch failed", error);
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[92dvh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      {/* ── Background glows & image ────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Cinematic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-screen"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        {/* Primary marvel red glow — top center */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-red-600/[0.07] blur-[120px]" />
        {/* Arc gold glow — bottom right */}
        <div className="absolute -bottom-32 right-0 h-[400px] w-[600px] rounded-full bg-yellow-500/[0.06] blur-[100px]" />
        {/* Faint crimson — left */}
        <div className="absolute -left-32 top-1/3 h-[350px] w-[500px] rounded-full bg-red-900/[0.04] blur-[90px]" />
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6">

        {/* Availability badge */}
        <div className="animate-fade-down animation-delay-100">
          <AvailabilityBadge />
        </div>

        {/* Profile Picture */}
        <div className="animate-fade-up animation-delay-150 mt-6 relative">
          {/* Glowing ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-600 to-yellow-500 opacity-60 blur-md"></div>
          <img
            src="/picture.jpg.jpeg"
            alt="Satyam Tiwari"
            className="relative size-24 rounded-full border-2 border-zinc-900 object-cover shadow-2xl"
          />
        </div>

        {/* Introduction */}
        <div className="animate-fade-up animation-delay-200 mt-6 text-xl font-medium text-red-500 sm:text-2xl">
          Hi, I&apos;m {profile.name} <span className="inline-block origin-bottom-right hover:animate-pulse">👋</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up animation-delay-200 mt-2 text-balance text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
          Building with{" "}
          <span className="relative">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ec1d24 0%, #f2c200 100%)",
              }}
            >
              code & curiosity.
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up animation-delay-300 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl">
          {profile.bio}
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up animation-delay-400 mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_0_20px_rgba(236,29,36,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-500 hover:shadow-[0_0_50px_rgba(236,29,36,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            View my work
            <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <a
            href="/resume.pdf"
            download="Satyam_CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <DownloadIcon />
            Download résumé
          </a>
          <a
            href="https://github.com/satyam2502-tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="GitHub Profile"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/satyamtiwari2502/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="LinkedIn Profile"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up animation-delay-500 mt-8 flex flex-wrap items-center justify-center gap-8 border-t border-white/[0.07] pt-8">
          <Stat value="10+" label="Skills" />
          <div className="h-10 w-px bg-white/[0.07]" />
          <Stat value={profile.repos} label="GitHub Repos" />
          <div className="h-10 w-px bg-white/[0.07]" />
          <Stat value={profile.followers} label="Followers" />
          <div className="h-10 w-px bg-white/[0.07]" />
          <Stat value="100+" label="DSA problems" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 text-slate-600"
        >
          <path
            fillRule="evenodd"
            d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
}
