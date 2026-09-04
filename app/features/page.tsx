import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { MODULES } from "@/lib/content";
import { SITE, abs } from "@/lib/site";

const DESCRIPTION =
  "All eleven Safari OS modules in detail — bookings and quotes, multi-currency costing, AI itineraries, invoicing, fleet compliance, driver and client portals, WhatsApp CRM and the operations calendar.";

export const metadata: Metadata = {
  title: "Features",
  description: DESCRIPTION,
  alternates: { canonical: "/features" },
  openGraph: {
    title: `Features — ${SITE.name}`,
    description: DESCRIPTION,
    url: abs("/features"),
    type: "website",
  },
  twitter: { title: `Features — ${SITE.name}`, description: DESCRIPTION },
};

const featuresGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": abs("/features#webpage"),
      url: abs("/features"),
      name: `Features — ${SITE.name}`,
      description: DESCRIPTION,
      isPartOf: { "@id": abs("/#website") },
      about: { "@id": abs("/#software") },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": abs("/features#breadcrumbs"),
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Overview", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Features", item: abs("/features") },
      ],
    },
    {
      "@type": "ItemList",
      "@id": abs("/features#modules"),
      name: `${SITE.name} modules`,
      numberOfItems: MODULES.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: MODULES.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: m.fullTitle,
        description: m.standfirst,
        url: abs(`/features#${slug(m.fullTitle)}`),
      })),
    },
  ],
};

/** Stable fragment ids, so individual modules are linkable and citable. */
function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={featuresGraph} />

      <section className="wrap">
        {/* Visible breadcrumb, matching the BreadcrumbList above. */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
          <ol
            style={{
              listStyle: "none",
              display: "flex",
              gap: 8,
              margin: 0,
              padding: 0,
              fontSize: 13,
              color: "var(--faint)",
            }}
          >
            <li>
              <Link href="/" style={{ color: "var(--muted)" }}>
                Overview
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Features</li>
          </ol>
        </nav>

        <p className="kicker" style={{ margin: "0 0 28px" }}>
          Features
        </p>
        <h1>Every module, in detail.</h1>
        <p className="lede">What each part of Safari OS does, and what it replaces.</p>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <div style={{ display: "grid", gap: 20 }}>
          {MODULES.map((m) => (
            <article key={m.n} id={slug(m.fullTitle)} className="card" style={{ scrollMarginTop: 80 }}>
              <p className="eyebrow" style={{ margin: "0 0 10px", color: "var(--accent)" }}>
                {m.n}
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: 8 }}>{m.fullTitle}</h2>
              <p style={{ margin: "0 0 18px", fontSize: 16, color: "var(--muted)" }}>
                {m.standfirst}
              </p>
              <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 8 }}>
                {m.points.map((p) => (
                  <li key={p} style={{ fontSize: 15, lineHeight: 1.55 }}>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="card" style={{ marginTop: 40, textAlign: "center", padding: 40 }}>
          <h2>Walk through it with your own season.</h2>
          <p style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", margin: 0 }}>
            <Link href="/contact" className="btn">
              Book a demo
            </Link>
            <Link href="/contact" className="btn-ghost">
              Request pricing
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
