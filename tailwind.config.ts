import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  /* ─────────────────────────────────────────────────────────────────
   *  Content paths — tells Tailwind which files to scan for classes
   * ───────────────────────────────────────────────────────────────── */
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],

  /* ─────────────────────────────────────────────────────────────────
   *  Dark-mode strategy: use the `dark` class on <html>
   *  (we'll set it permanently so the whole site is dark-first)
   * ───────────────────────────────────────────────────────────────── */
  darkMode: "class",

  theme: {
    extend: {
      /* ── Typography ─────────────────────────────────────────────── */
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
      },

      /* ── Custom colour palette ──────────────────────────────────── */
      colors: {
        /* Background layers */
        bg: {
          primary: "#0f172a",   // slate-900  — page canvas
          secondary: "#1e293b", // slate-800  — subtle sections
          card: "#27272a",      // zinc-800   — cards / containers
          elevated: "#3f3f46",  // zinc-700   — hover / elevated state
        },

        /* Accent — Marvel Red for primary actions */
        accent: {
          DEFAULT:  "#ec1d24", // marvel red
          light:    "#ef4444", // lighter red
          dark:     "#b91c1c", // darker red
          muted:    "rgba(236,29,36,0.12)", // translucent tint
        },

        /* Secondary accent — Marvel Gold for highlights / links */
        highlight: {
          DEFAULT:  "#f2c200", // marvel gold
          light:    "#fde047", // lighter gold
          dark:     "#ca8a04", // darker gold
          muted:    "rgba(242,194,0,0.12)",
        },

        /* Text tokens */
        text: {
          primary:   "#f1f5f9", // slate-100
          secondary: "#94a3b8", // slate-400
          muted:     "#64748b", // slate-500
          inverted:  "#0f172a",
        },

        /* Border tokens */
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          accent:  "rgba(236,29,36,0.35)",
          subtle:  "rgba(255,255,255,0.04)",
        },
      },

      /* ── Spacing & sizing extras ────────────────────────────────── */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "128": "32rem",
        "144": "36rem",
      },

      /* ── Border radius ──────────────────────────────────────────── */
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      /* ── Box shadows ────────────────────────────────────────────── */
      boxShadow: {
        /* Glow effects for interactive elements */
        "glow-accent":    "0 0 20px rgba(236,29,36,0.25), 0 0 40px rgba(236,29,36,0.10)",
        "glow-highlight": "0 0 20px rgba(242,194,0,0.25), 0 0 40px rgba(242,194,0,0.10)",
        /* Card elevation */
        "card":           "0 4px 24px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.20)",
        "card-hover":     "0 8px 40px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.25)",
        /* Inset top border for glassmorphism */
        "glass":          "inset 0 1px 0 rgba(255,255,255,0.08)",
      },

      /* ── Background gradients ───────────────────────────────────── */
      backgroundImage: {
        /* Hero mesh gradient */
        "hero-gradient":   "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(236,29,36,0.15) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(242,194,0,0.08) 0%, transparent 60%)",
        /* Card shine effect */
        "card-shine":      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
        /* Accent gradient for text */
        "accent-gradient": "linear-gradient(135deg, #ec1d24 0%, #f2c200 100%)",
        /* Subtle grid overlay */
        "grid-pattern":    "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },

      backgroundSize: {
        "grid": "48px 48px",
      },

      /* ── Keyframe animations ────────────────────────────────────── */
      keyframes: {
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%":   { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%":   { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%":   { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(236,29,36,0.20)" },
          "50%":      { boxShadow: "0 0 25px rgba(236,29,36,0.45)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      /* ── Animation utilities ────────────────────────────────────── */
      animation: {
        "fade-in":        "fade-in 0.5s ease-out both",
        "fade-up":        "fade-up 0.6s ease-out both",
        "fade-down":      "fade-down 0.6s ease-out both",
        "slide-in-left":  "slide-in-left 0.6s ease-out both",
        "slide-in-right": "slide-in-right 0.6s ease-out both",
        "scale-in":       "scale-in 0.4s ease-out both",
        "shimmer":        "shimmer 2.5s linear infinite",
        "pulse-glow":     "pulse-glow 2s ease-in-out infinite",
        "float":          "float 3s ease-in-out infinite",
        "spin-slow":      "spin-slow 8s linear infinite",
      },

      /* ── Transition timing ──────────────────────────────────────── */
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      /* ── Backdrop blur ──────────────────────────────────────────── */
      backdropBlur: {
        xs: "2px",
      },

      /* ── Typography scale extras ────────────────────────────────── */
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
        "display-sm": ["2.25rem", { lineHeight: "2.5rem",  letterSpacing: "-0.02em" }],
        "display-md": ["3rem",    { lineHeight: "3.25rem", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "4rem",    letterSpacing: "-0.04em" }],
        "display-xl": ["4.5rem",  { lineHeight: "4.75rem", letterSpacing: "-0.04em" }],
      },
    },
  },

  plugins: [],
};

export default config;
