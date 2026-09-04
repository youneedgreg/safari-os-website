import type { MetadataRoute } from "next";
import { ROUTES, abs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((r) => ({
    url: abs(r.path),
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
