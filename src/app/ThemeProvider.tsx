"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const theme =
        savedTheme === "dark" || savedTheme === "light"
          ? savedTheme
          : prefersDark
          ? "dark"
          : "light";

      document.documentElement.classList.toggle(
        "dark",
        theme === "dark"
      );

      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "light";
    }

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
