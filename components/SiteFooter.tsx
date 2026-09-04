import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", paddingBlock: 40, marginTop: 24 }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={22} />
          <span style={{ fontFamily: "var(--serif)", fontSize: 17 }}>{SITE.name}</span>
          <span className="eyebrow">{SITE.alternateName}</span>
        </div>

        <nav
          aria-label="Footer"
          style={{ display: "flex", flexWrap: "wrap", gap: 20, fontSize: 14 }}
        >
          <Link href="/" style={{ color: "var(--muted)" }}>
            Overview
          </Link>
          <Link href="/features" style={{ color: "var(--muted)" }}>
            Features
          </Link>
          <Link href="/contact" style={{ color: "var(--muted)" }}>
            Contact
          </Link>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </nav>

        <div style={{ fontSize: 13, color: "var(--faint)" }}>
          © {SITE.copyrightYear} {SITE.name}
        </div>
      </div>
    </footer>
  );
}
