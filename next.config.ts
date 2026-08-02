import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Allow local /public images to render without a Cloudinary account in dev
    unoptimized: process.env.NODE_ENV === "development",
  },
  turbopack: {
    // Pin the workspace root so Turbopack doesn't get confused by the
    // package-lock.json that exists at C:\Users\GP65\ (parent directory).
    root: path.resolve(__dirname),
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "gsap"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
