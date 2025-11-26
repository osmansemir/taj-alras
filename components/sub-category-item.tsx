"use client";
import { SidebarMenuSubButton } from "@/components/ui/sidebar";
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

  const isActive = subCategorySlug === category;
  return (
    <SidebarMenuSubButton asChild isActive={isActive}>
      <Link href={`/products?category=${subCategorySlug}`}>
        {subCategory.replace(/\b\w/g, (str) => str.toUpperCase())}
      </Link>
    </SidebarMenuSubButton>
  );
}
