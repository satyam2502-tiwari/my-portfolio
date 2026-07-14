import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ─────────────────────────────────────────────────────────────────────────
   Font Loading — Next.js optimised Google Fonts
   ───────────────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* ─────────────────────────────────────────────────────────────────────────
   Root Metadata
   ───────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Satyam Tiwari — Full-Stack Developer",
    template: "%s | Satyam Tiwari",
  },
  description:
    "CS student passionate about full-stack development, AI/ML, and RAG systems. Building real-world projects with React, Next.js, Python, and C++.",
  keywords: [
    "developer",
    "software engineer",
    "portfolio",
    "full-stack",
    "react",
    "next.js",
    "python",
    "machine learning"
  ],
  authors: [{ name: "Satyam Tiwari" }],
  creator: "Satyam Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satyam-portfolio.vercel.app",
    title: "Satyam Tiwari — Full-Stack Developer",
    description:
      "CS student passionate about full-stack development, AI/ML, and RAG systems.",
    siteName: "Satyam Tiwari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Tiwari — Full-Stack Developer",
    description:
      "CS student passionate about full-stack development, AI/ML, and RAG systems.",
    creator: "@satyam2502",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   Viewport — dark theme colour for mobile chrome
   ───────────────────────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

import Chatbot from "@/components/Chatbot";

/* ─────────────────────────────────────────────────────────────────────────
   Root Layout
   ───────────────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      /* 'dark' class applied permanently — dark-mode-first design */
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {/* Accessibility: skip navigation */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        {/* Root container — fill viewport, flex column */}
        <div className="flex min-h-dvh flex-col">
          {children}
        </div>

        {/* Floating Chatbot */}
        <Chatbot />
      </body>
    </html>
  );
}
