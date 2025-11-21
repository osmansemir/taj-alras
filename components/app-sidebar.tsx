import * as React from "react";
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react";

import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Food stuff",
      url: "#",
      items: [
        {
          title: "Sugar",
          url: "#",
        },
        {
          title: "Coffee",
          url: "#",
        },
      ],
    },
    {
      title: "Finishing Material",
      url: "#",
      items: [
        {
          title: "Zingo",
          url: "#",
        },
        {
          title: "Boya",
          url: "#",
          isActive: true,
        },
      ],
    },
    {
      title: "Car Spare Parts",
      url: "#",
      items: [
        {
          title: "trucks",
          url: "#",
        },
        {
          title: "decorations",
          url: "#",
        },
        {
          title: "lights",
          url: "#",
        },
      ],
    },
    {
      title: "electronics",
      url: "#",
      items: [
        {
          title: "mobiles",
          url: "#",
        },
        {
          title: "laptops",
          url: "#",
        },
        {
          title: "desktops",
          url: "#",
        },
        {
          title: "tablets",
          url: "#",
        },
      ],
    },
    {
      title: "cosmetics",
      url: "#",
      items: [
        {
          title: "perfumes",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SearchForm className="mt-18" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
