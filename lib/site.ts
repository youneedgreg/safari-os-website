/**
 * Single source of truth for everything SEO reads: canonical origin, product
 * identity, contact details. Changing the domain here updates canonical tags,
 * Open Graph URLs, JSON-LD, the sitemap and robots.txt at once.
 */

export const SITE = {
  name: "Safari OS",
  /** Legal/alternate name used in the design's lockup. */
  alternateName: "SAWAS",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://safari-os.com").replace(/\/$/, ""),
  email: "hello@safari-os.com",
  locality: "Nairobi",
  country: "KE",
  /** Under 160 characters, leads with the query terms operators actually type. */
  description:
    "Safari OS is safari booking and tour operator software for African operators — enquiries, quotes, multi-currency costing, AI itineraries, invoicing, fleet compliance and driver dispatch in one platform.",
  /** Year shown in the footer copyright line. */
  copyrightYear: 2026,
} as const;

/** Absolute URL for a site-relative path. Canonicals and JSON-LD must be absolute. */
export function abs(path = "/"): string {
  return `${SITE.url}${path === "/" ? "" : path}`;
}

/** Every indexable route, in the order they should appear in the sitemap. */
export const ROUTES = [
  { path: "/", label: "Overview", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/features", label: "Features", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact", label: "Contact", priority: 0.8, changeFrequency: "yearly" as const },
];
