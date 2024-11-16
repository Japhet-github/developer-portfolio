"use client";

import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  // Explicitly type the state as boolean | null
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // Update state on mount
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    setDarkMode(
      stored !== null
        ? stored === "true"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkMode", String(darkMode));
    }
  }, [darkMode]);

  // Don't show any icon until we know the state
  const Icon = darkMode === null ? null : darkMode ? Moon : Sun;

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode"
        checked={darkMode ?? false}
        onCheckedChange={(checked: boolean) => setDarkMode(checked)}
        disabled={darkMode === null}
      />
      <label htmlFor="dark-mode" className="sr-only">
        Toggle dark mode
      </label>
      {Icon && <Icon className="h-4 w-4" />}
    </div>
  );
}