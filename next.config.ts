import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ─── Performance & Output ─────────────────────────── */
  reactStrictMode: true,
  compress: true,

  /* ─── Image optimisation ───────────────────────────── */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  /* ─── Experimental features ───────────────────────── */
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  /* ─── Bypass build errors ───────────────────────── */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
