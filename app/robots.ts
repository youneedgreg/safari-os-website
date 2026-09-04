import type { MetadataRoute } from "next";
import { SITE, abs } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next.js build assets carry no indexable content.
        disallow: ["/_next/"],
      },
    ],
    sitemap: abs("/sitemap.xml"),
    host: SITE.url,
  };
}
