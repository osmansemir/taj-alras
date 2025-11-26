"use client";
import { SidebarMenuSubButton, useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { generateSlug } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SubCategoryItem({
  subCategory,
}: {
  subCategory: string;
}) {
  const subCategorySlug = generateSlug(subCategory);
  const params = useSearchParams();
  const category = params.get("category") || "";
  const { setOpenMobile } = useSidebar();
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  const isActive = subCategorySlug === category;
  return (
    <SidebarMenuSubButton onClick={handleClick} asChild isActive={isActive}>
      <Link href={`/products?category=${subCategorySlug}`}>
        {subCategory.replace(/\b\w/g, (str) => str.toUpperCase())}
      </Link>
    </SidebarMenuSubButton>
  );
}
