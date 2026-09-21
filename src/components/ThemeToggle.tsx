"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

function getClientTheme(): Theme {
  const stored = localStorage.getItem("theme");
  return stored === "light" || stored === "dark"
    ? stored
    : window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
}

function subscribe(callback: () => void) {
  window.addEventListener("theme-change", callback);
  return () => window.removeEventListener("theme-change", callback);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getClientTheme,
    () => null
  );

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggle() {
    if (!theme) return;
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event("theme-change"));
  }

  // Avoid rendering a theme-dependent button until the browser theme is known.
  if (theme === null) {
    return <span className="w-8 h-8 inline-block" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="w-8 h-8 flex items-center justify-center text-[var(--fg-dim)] hover:text-[var(--fg)] transition-colors"
    >
      {theme === "light" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
