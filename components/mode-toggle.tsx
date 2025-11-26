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
        "w-full md:w-5 md:bg-background  md:text-foreground md:hover:bg-background md:hover:text-primary cursor-pointer ",
        "bg-foreground text-background hover:bg-primary hover:text-foreground",
        className,
      )}
    >
      {theme === "light" ? (
        <Moon className="text-background md:text-foreground" />
      ) : (
        <Sun className="text-background md:text-foreground" />
      )}
      <span className="block md:hidden">
        {theme === "light" ? "Dark" : "Light"}
      </span>
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
