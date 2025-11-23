"use client";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AppBreadcrumb() {
  const params = useSearchParams();
  const category = params.get("category");
  const isMobile = useIsMobile();

  return (
    <Breadcrumb className="grow">
      <BreadcrumbList>
        {isMobile ? (
          <>
            <BreadcrumbEllipsis className="" />
          </>
        ) : (
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink asChild>
              <Link href="/products">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {category && (
          <>
            <BreadcrumbSeparator className="" />
            <BreadcrumbPage>
              {category
                .replace(/\b\w/g, (str) => str.toUpperCase())
                .replace(/\-/g, " ")}
            </BreadcrumbPage>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
