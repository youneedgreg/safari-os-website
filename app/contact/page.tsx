import type { Metadata } from "next";
import Link from "next/link";
import DemoForm from "@/components/DemoForm";
import JsonLd from "@/components/JsonLd";
import { SITE, abs } from "@/lib/site";

const DESCRIPTION =
  "Book a 45-minute Safari OS demo walked through with a real itinerary of yours. Pricing is quoted once we know your fleet size and monthly booking volume.";

export const metadata: Metadata = {
  title: "Book a demo",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Book a demo — ${SITE.name}`,
    description: DESCRIPTION,
    url: abs("/contact"),
    type: "website",
  },
  twitter: { title: `Book a demo — ${SITE.name}`, description: DESCRIPTION },
};

const contactGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": abs("/contact#webpage"),
      url: abs("/contact"),
      name: `Book a demo — ${SITE.name}`,
      description: DESCRIPTION,
      isPartOf: { "@id": abs("/#website") },
      about: { "@id": abs("/#organization") },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": abs("/contact#breadcrumbs"),
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Overview", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: abs("/contact") },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactGraph} />

      <section className="wrap">
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
            <li aria-current="page">Contact</li>
          </ol>
        </nav>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <p className="kicker" style={{ margin: "0 0 28px" }}>
              Contact
            </p>
            <h1 style={{ fontSize: "clamp(38px, 6vw, 64px)" }}>Book a demo.</h1>
            <p className="lede">
              Tell us how you operate today and we will show you the same workflow inside Safari
              OS. Pricing is quoted after we understand your fleet and monthly volume.
            </p>

            <dl style={{ display: "grid", gap: 20, margin: 0 }}>
              <div>
                <dt className="eyebrow" style={{ marginBottom: 6 }}>
                  EMAIL
                </dt>
                <dd style={{ margin: 0 }}>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow" style={{ marginBottom: 6 }}>
                  BASED IN
                </dt>
                <dd style={{ margin: 0, fontSize: 15 }}>Nairobi, Kenya</dd>
              </div>
              <div>
                <dt className="eyebrow" style={{ marginBottom: 6 }}>
                  DEMO
                </dt>
                <dd style={{ margin: 0, fontSize: 15 }}>
                  45 minutes, over video, with a real itinerary of yours.
                </dd>
              </div>
            </dl>
          </div>

          <DemoForm />
        </div>
      </section>
    </>
  );
}
