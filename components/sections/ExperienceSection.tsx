import { experiences, type ExperienceItem } from "@/data/experience";

/* ── Type badge ───────────────────────────────────────────────────────── */
function TypeBadge({ type }: { type: ExperienceItem["type"] }) {
  const labels: Record<ExperienceItem["type"], string> = {
    "full-time": "Full-time",
    "part-time": "Part-time",
    contract: "Contract",
    internship: "Internship",
    freelance: "Freelance",
  };
  return (
    <span className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2 py-0.5 text-xs font-medium text-slate-500">
      {labels[type]}
    </span>
  );
}

/* ── Location icon ────────────────────────────────────────────────────── */
function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-3.5 shrink-0"
    >
      <path
        fillRule="evenodd"
        d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── Calendar icon ────────────────────────────────────────────────────── */
function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-3.5 shrink-0"
    >
      <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
      <path
        fillRule="evenodd"
        d="M3.75 1a.75.75 0 0 1 .75.75V3h7V1.75a.75.75 0 0 1 1.5 0V3h.25A2.25 2.25 0 0 1 15.5 5.25v7.5A2.25 2.25 0 0 1 13.25 15H2.75A2.25 2.25 0 0 1 .5 12.75v-7.5A2.25 2.25 0 0 1 2.75 3H3V1.75A.75.75 0 0 1 3.75 1Zm-1 5.5v6.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V6.5H2.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── Highlight bullet ─────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="mt-0.5 size-3.5 shrink-0 text-red-500"
    >
      <path
        fillRule="evenodd"
        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── Single timeline entry ────────────────────────────────────────────── */
function TimelineEntry({
  item,
  isLast,
}: {
  item: ExperienceItem;
  isLast: boolean;
}) {
  return (
    <div className="group relative flex gap-6 sm:gap-8">
      {/* ── Left col: dot + line ──────────────────────────────────── */}
      <div className="flex flex-col items-center">
        {/* Timeline dot */}
        <div
          className={`
            relative z-10 mt-1 flex size-3.5 items-center justify-center rounded-full ring-2 ring-offset-2 ring-offset-slate-900 transition-all duration-300
            ${item.current
              ? "bg-red-600 ring-red-600/40 group-hover:ring-red-600/70"
              : "bg-zinc-700 ring-zinc-700/50 group-hover:bg-zinc-600 group-hover:ring-zinc-600/50"
            }
          `}
        >
          {item.current && (
            <span className="absolute size-3.5 animate-ping rounded-full bg-red-500/40" />
          )}
        </div>

        {/* Connecting line */}
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-white/[0.10] to-transparent" />
        )}
      </div>

      {/* ── Right col: content ───────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-4 pb-14">
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900 p-6 transition-all duration-300 group-hover:border-white/[0.12] group-hover:shadow-xl group-hover:shadow-black/30">
          {/* Current role accent top bar */}
          {item.current && (
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-red-600/60 via-yellow-500/60 to-transparent" />
          )}

          {/* Header */}
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-slate-100">
                  {item.role}
                </h3>
                {item.current && (
                  <span className="rounded-full border border-red-600/30 bg-red-600/10 px-2 py-0.5 text-xs font-semibold text-red-500">
                    Current
                  </span>
                )}
                <TypeBadge type={item.type} />
              </div>

              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-red-500 transition-colors duration-150 hover:text-red-400"
              >
                {item.company}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  className="size-3 opacity-60"
                >
                  <path d="M4.5 2.25a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 0 0 1.06 1.06L8.25 4.81v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75H4.5Z" />
                </svg>
              </a>
            </div>

            {/* Meta — period + location */}
            <div className="flex flex-col items-start gap-1 sm:items-end">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <CalendarIcon />
                <span className="font-medium">{item.period}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <LocationIcon />
                <span>{item.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            {item.description}
          </p>

          {/* Highlights */}
          <ul className="mb-5 flex flex-col gap-2">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-slate-500 transition-colors duration-150 group-hover:text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
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
   Experience Timeline Section
   ═══════════════════════════════════════════════════════════════════════ */
export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full bg-slate-950/60"
    >
      {/* Subtle section separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* ── Section header ─────────────────────────────────────── */}
        <div className="mb-14 flex flex-col gap-4">
          <SectionLabel>Career Path</SectionLabel>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
            My journey so far
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Currently a CS student, actively learning, building projects, and
            exploring everything from full-stack web development to AI/ML and RAG systems.
          </p>
        </div>

        {/* ── Timeline ───────────────────────────────────────────── */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <TimelineEntry
              key={exp.id}
              item={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────── */}
        <div className="mt-4 flex justify-center">
          <a
            href="/resume.pdf"
            download="Satyam_CV.pdf"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-400 backdrop-blur-sm transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4 text-red-500"
            >
              <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
            </svg>
            Download full résumé
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </section>
  );
}
