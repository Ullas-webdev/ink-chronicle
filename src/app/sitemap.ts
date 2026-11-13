import type { MetadataRoute } from "next";
import { ALL_TATTOOS } from "@/data/tattoos";
import { PIERCINGS_DATA } from "@/lib/piercings-data";
import { processSteps } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.inkchronicle.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/tattoos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/piercings`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/aftercare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tattoo-training`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pencil-art-and-paintings`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const tattooRoutes: MetadataRoute.Sitemap = ALL_TATTOOS.map((tattoo) => ({
    url: `${base}/tattoos/${tattoo.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const piercingRoutes: MetadataRoute.Sitemap = PIERCINGS_DATA.map((p) => ({
    url: `${base}/piercings/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const processRoutes: MetadataRoute.Sitemap = processSteps.map((s) => ({
    url: `${base}/process/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...tattooRoutes, ...piercingRoutes, ...processRoutes];
}
