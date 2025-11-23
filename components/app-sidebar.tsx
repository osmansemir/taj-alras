import * as React from "react";

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import SidebarInside from "./sidebar-inside";
import SidebarSkeleton from "./skeletons/sidebar-skeleton";

export function AppSidebar({
  ...props
}: {
  props?: React.ComponentProps<typeof Sidebar>;
}) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SearchForm className="mt-5" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <React.Suspense key="categories" fallback={<SidebarSkeleton />}>
            <SidebarInside />
          </React.Suspense>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
