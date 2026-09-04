"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * A real anchor — the canvas used onClick handlers on <span>, which crawlers
 * cannot follow and keyboards cannot reach. aria-current marks the active page
 * for assistive technology.
 */
export default function NavLink({
  href,
  children,
  style,
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      style={{
        fontSize: 14,
        color: active ? "var(--fg)" : "var(--muted)",
        ...style,
      }}
    >
      {children}
    </Link>
  );
}
