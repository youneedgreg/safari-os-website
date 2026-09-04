import Link from "next/link";
import Logo from "./Logo";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--header-bg)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="wrap"
        style={{
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--fg)" }}
        >
          <Logo />
          <span style={{ fontFamily: "var(--serif)", fontSize: 19, letterSpacing: "-0.01em" }}>
            Safari OS
          </span>
        </Link>

        <nav
          aria-label="Primary"
          style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}
        >
          <NavLink href="/">Overview</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <ThemeToggle />
          <Link
            href="/contact"
            style={{
              background: "var(--accent)",
              color: "var(--on-accent)",
              fontSize: 14,
              fontWeight: 600,
              padding: "9px 16px",
              borderRadius: 8,
            }}
          >
            Book a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
