import type { MetadataRoute } from "next";
import { SEO_PAGES } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://sakshamjain.online").replace(/\/$/, "");

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/seo`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  const seoPages: MetadataRoute.Sitemap = SEO_PAGES.map((page) => ({
    url: `${baseUrl}/seo/${page.slug}`,
    lastModified: new Date(page.publishDate),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...mainPages, ...seoPages];
}
