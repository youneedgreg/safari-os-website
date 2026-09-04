"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

const KEY = "sawas-site-theme";
const NEXT: Record<Theme, Theme> = { system: "light", light: "dark", dark: "system" };
const ICON: Record<Theme, string> = { system: "◐", light: "☀", dark: "☾" };
const LABEL: Record<Theme, string> = {
  system: "Theme: follow system. Switch to light.",
  light: "Theme: light. Switch to dark.",
  dark: "Theme: dark. Follow system instead.",
};

function apply(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  // Read the stored choice after hydration. The no-flash script in the document
  // head has already applied it to <html>; this only syncs the button label.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY) as Theme | null;
      if (saved === "light" || saved === "dark" || saved === "system") setTheme(saved);
    } catch {
      /* storage blocked — stay on system */
    }
  }, []);

  function cycle() {
    const next = NEXT[theme];
    setTheme(next);
    apply(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* storage blocked — the choice just won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={cycle}
      title="Switch theme"
      aria-label={LABEL[theme]}
      style={{
        width: 30,
        height: 30,
        borderRadius: 8,
        border: "1px solid var(--line-strong)",
        background: "transparent",
        display: "grid",
        placeItems: "center",
        fontSize: 13,
        color: "var(--muted)",
        cursor: "pointer",
        lineHeight: 1,
      }}
    >
      <span aria-hidden="true">{ICON[theme]}</span>
    </button>
  );
}
