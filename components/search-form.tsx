"use client";

import { LoaderIcon, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const parmas = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback((str: string) => {
    const params = new URLSearchParams(parmas);
    if (str) {
      params.delete("category");
      params.set("search", str);
    } else {
      params.delete("search");
    }
    setLoading(false);
    replace(`${pathname}\?${params}`);
  }, 300);

  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the Products..."
            className="pl-8"
            onChange={(e) => {
              handleSearch(e.target.value);
              setLoading(true);
            }}
          />
          {loading ? (
            <LoaderIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 animate-spin opacity-50 select-none" />
          ) : (
            <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
          )}
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
