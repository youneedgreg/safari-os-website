import type { Metadata } from "next";
import Link from "next/link";
import DemoForm from "@/components/DemoForm";
import Screenshot from "@/components/Screenshot";
import signIn from "@/public/screenshots/safari-os-sign-in.png";
import JsonLd from "@/components/JsonLd";
import { CORE_MODULE_COUNT, FAILURES, MODULES, PAIN_STRIP, REGION, SECURITY } from "@/lib/content";
import { SHOTS } from "@/lib/shots";
import { SITE, abs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safari OS — Safari Booking & Tour Operator Software",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": abs("/#software"),
      name: SITE.name,
      alternateName: SITE.alternateName,
      url: SITE.url,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Tour operator and safari booking management",
      operatingSystem: "Web browser",
      description: SITE.description,
      publisher: { "@id": abs("/#organization") },
      inLanguage: "en",
      featureList: MODULES.map((m) => m.fullTitle),
      screenshot: [
        {
          "@type": "ImageObject",
          url: abs("/screenshots/dashboard.jpg"),
          caption: "The Safari OS operations dashboard",
          width: 1920,
          height: 1200,
        },
        {
          "@type": "ImageObject",
          url: abs("/screenshots/bookings-pipeline.jpg"),
          caption: "The Safari OS booking pipeline",
          width: 1920,
          height: 1200,
        },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Safari and tour operators in Kenya, Tanzania and Uganda",
      },
    },
    {
      "@type": "WebPage",
      "@id": abs("/#webpage"),
      url: SITE.url,
      name: "Safari OS — Safari Booking & Tour Operator Software",
      description: SITE.description,
      isPartOf: { "@id": abs("/#website") },
      about: { "@id": abs("/#software") },
      inLanguage: "en",
    },
  ],
};

/** The home grid shows the lifecycle spine; /features shows all 21. */
const coreModules = MODULES.slice(0, CORE_MODULE_COUNT);

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph} />

      <section className="wrap">
        <p className="kicker" style={{ margin: "0 0 28px" }}>
          {SITE.name} · {SITE.alternateName}
        </p>
        <h1 style={{ maxWidth: "16ch" }}>The operating system for safari operators.</h1>
        <p className="lede">
          One platform for the whole booking lifecycle — enquiry, quote, costing, itinerary,
          invoice, driver dispatch and post-trip marketing. Instead of an inbox, a spreadsheet and
          a WhatsApp group.
        </p>
        <p style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "0 0 64px" }}>
          <Link href="/contact" className="btn">
            Book a demo
          </Link>
          <a href="#how" className="btn-ghost">
            See how it works
          </a>
        </p>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 1,
            background: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {PAIN_STRIP.map((line) => (
            <li key={line} style={{ background: "var(--surface)", padding: "22px 24px" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: 10 }}>
                TODAY
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.45 }}>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <Screenshot
          {...SHOTS.dashboard}
          caption="The operations dashboard. Screenshots are of the real product, running on demonstration data."
        />
      </section>

      <section className="wrap">
        <p className="kicker" style={{ margin: "0 0 16px" }}>
          The daily failures
        </p>
        <h2>Nothing breaks loudly. It breaks at the gate.</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginTop: 40,
          }}
        >
          {FAILURES.map((f) => (
            <article key={f.n} className="card">
              <p className="eyebrow" style={{ margin: "0 0 12px" }}>
                {f.n}
              </p>
              <h3>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="wrap" style={{ scrollMarginTop: 80 }}>
        <p className="kicker" style={{ margin: "0 0 16px" }}>
          The platform
        </p>
        <h2>Twenty-one modules, one thread from enquiry to invoice.</h2>
        <p className="lede" style={{ marginBottom: 40 }}>
          Each one replaces a place work currently disappears into.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {coreModules.map((m, i) => (
            <article
              key={m.n}
              className="card"
              style={i === 0 ? { gridColumn: "1 / -1" } : undefined}
            >
              <p className="eyebrow" style={{ margin: "0 0 12px", color: "var(--accent)" }}>
                {m.n} · {m.kicker}
              </p>
              <h3>{m.title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>
                {m.summary}
              </p>

              {i === 0 ? (
                <div style={{ marginTop: 24 }}>
                  <Screenshot {...SHOTS["bookings-pipeline"]} />
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <p style={{ marginTop: 32 }}>
          <Link href="/features" style={{ fontWeight: 500 }}>
            See the full module breakdown →
          </Link>
        </p>
      </section>

      <section className="wrap">
        <p className="kicker" style={{ margin: "0 0 16px" }}>
          Built for the region
        </p>
        <h2>Built for how safaris actually run.</h2>
        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginTop: 40,
          }}
        >
          {REGION.map((r) => (
            <div key={r.title} className="card">
              <dt style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>{r.title}</dt>
              <dd style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "var(--muted)" }}>
                {r.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap">
        <p className="kicker" style={{ margin: "0 0 16px" }}>
          Security &amp; roles
        </p>
        <h2>Your commercial data, properly fenced.</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            marginTop: 40,
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {SECURITY.map((s) => (
              <article key={s.title} className="card">
                <h3 style={{ fontSize: 18 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "var(--muted)" }}>
                  {s.body}
                </p>
              </article>
            ))}
          </div>

          <Screenshot
            src={signIn}
            alt="The Safari OS sign-in screen, showing the email and password fields for an operator workspace."
            caption="Every workspace sits behind its own sign-in, with per-user 2FA available."
          />
        </div>
      </section>

      <section className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <p className="kicker" style={{ margin: "0 0 16px" }}>
              Book a demo
            </p>
            <h2>See it against your own season.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--muted)" }}>
              Forty-five minutes, walked through with a real itinerary of yours. We will talk
              pricing once we know your fleet and volume.
            </p>
            <p style={{ fontSize: 15, color: "var(--muted)" }}>
              Prefer email? <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
          <DemoForm />
        </div>
      </section>
    </>
  );
}
