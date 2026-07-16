import type { MetadataRoute } from "next";
import { sectors } from "@/data/sectors";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/businesses`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/investor-relations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];

  const sectorRoutes: MetadataRoute.Sitemap = sectors.map((sector) => ({
    url: `${SITE_URL}/businesses/${sector.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...sectorRoutes];
}
