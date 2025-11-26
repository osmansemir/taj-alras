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
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { getCategories } from "@/lib/data";
import { Minus, Plus } from "lucide-react";
import SubCategoryItem from "./sub-category-item";

export default async function SidebarInside() {
  const data = await getCategories();
  return (
    <SidebarMenu>
      {data.map((category) => (
        <Collapsible
          key={category.category}
          defaultOpen={true}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                {category.category.replace(/\b\w/g, (str) => str.toUpperCase())}
                <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            {category.subCategories?.length ? (
              <CollapsibleContent>
                <SidebarMenuSub>
                  {category.subCategories.map((subCategory) => (
                    <SidebarMenuSubItem key={subCategory}>
                      <SubCategoryItem subCategory={subCategory} />
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
