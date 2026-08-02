import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.inkchronicle.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#artists`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#gallery`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/#booking`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
