import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aidads.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-28'),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partnerships`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
