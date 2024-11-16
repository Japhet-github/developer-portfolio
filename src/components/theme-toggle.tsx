"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    setDarkMode(
      stored !== null
        ? stored === "true"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    setMounted(true);
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

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <TooltipProvider delayDuration={1000}> {/* 1000ms = 1 second delay */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg w-9 h-9 hover:bg-accent"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            <div className="relative w-4 h-4">
              <Sun
                className={`h-4 w-4 absolute transition-opacity duration-300 rotate-0 scale-100 ${
                  darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100'
                }`}
              />
              <Moon
                className={`h-4 w-4 absolute transition-opacity duration-300 rotate-0 scale-100 ${
                  darkMode ? 'opacity-100' : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          className="bg-popover text-popover-foreground"
          side="bottom"
        >
          <p>{darkMode ? 'Activate light mode' : 'Activate dark mode'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}