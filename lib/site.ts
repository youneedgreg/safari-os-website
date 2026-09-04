/**
 * Single source of truth for everything SEO reads: canonical origin, product
 * identity, contact details. Changing the domain here updates canonical tags,
 * Open Graph URLs, JSON-LD, the sitemap and robots.txt at once.
 */

const DEFAULT_SITE_URL = "https://safari-os.com";

/**
 * Resolves the canonical origin from the environment.
 *
 * Deliberately tolerant, because this value has to survive however it gets set
 * on a hosting dashboard: an empty string (which `??` would happily pass
 * through to `new URL()`), a bare domain with no scheme, or a trailing path.
 * Anything unusable falls back to the default rather than failing the build —
 * a wrong canonical is recoverable, a site that will not deploy is not.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;

  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const parsed = new URL(candidate);
    // Origin only — abs() supplies the path.
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE = {
  name: "Safari OS",
  /** Legal/alternate name used in the design's lockup. */
  alternateName: "SAFOS",
  url: resolveSiteUrl(),
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
  {
    path: "/",
    label: "Overview",
    priority: 1.0,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/features",
    label: "Features",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    label: "Contact",
    priority: 0.8,
    changeFrequency: "yearly" as const,
  },
];
