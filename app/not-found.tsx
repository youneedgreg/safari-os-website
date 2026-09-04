import type { Metadata } from "next";
import Link from "next/link";

/** A 404 must not be indexed, and must offer a way back into the site. */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="wrap">
      <p className="kicker" style={{ margin: "0 0 28px" }}>
        404
      </p>
      <h1>That page has moved on.</h1>
      <p className="lede">
        The link may be old, or the page may never have existed. The three that do are below.
      </p>
      <p style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/" className="btn">
          Overview
        </Link>
        <Link href="/features" className="btn-ghost">
          Features
        </Link>
        <Link href="/contact" className="btn-ghost">
          Book a demo
        </Link>
      </p>
    </section>
  );
}
