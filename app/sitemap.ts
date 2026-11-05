import type { MetadataRoute } from "next";
import { products, categories, articles } from "@/lib/data";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const base = site.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/san-pham",
    "/gioi-thieu",
    "/he-thong-nha-thuoc",
    "/tin-suc-khoe",
    "/lien-he",
    "/chinh-sach-doi-tra",
  ].map((path) => ({
    url: `${base}${path}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/danh-muc/${c.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/san-pham/${p.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/tin-suc-khoe/${a.slug}/`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...articleRoutes,
  ];
}
