"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const handleThemeChange = () => {
    const toTheme = theme === "light" ? "dark" : "light";
    setTheme(toTheme);
  };

  return (
    <Button
      onClick={handleThemeChange}
      className={cn(
        " size-5  bg-background text-foreground hover:bg-background hover:text-primary cursor-pointer ",
        className,
      )}
    >
      {theme === "light" ? <Moon className="" /> : <Sun className="" />}
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
