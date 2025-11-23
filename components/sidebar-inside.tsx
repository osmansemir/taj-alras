import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { getCategories } from "@/lib/data";
import { generateSlug } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";

export default async function SidebarInside() {
  const data = await getCategories();
  return (
    <SidebarMenu>
      {data.map((category, index) => (
        <Collapsible
          key={category.category}
          defaultOpen={index === 1}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                {category.category}
                <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            {category.subCategories?.length ? (
              <CollapsibleContent>
                <SidebarMenuSub>
                  {category.subCategories.map((subCategory) => (
                    <SidebarMenuSubItem key={subCategory}>
                      <SidebarMenuSubButton asChild isActive={false}>
                        <Link
                          href={`/products?category=${generateSlug(subCategory)}`}
                        >
                          {subCategory}
                        </Link>
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
  );
}
