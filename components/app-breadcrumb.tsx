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
        {isMobile && category ? (
          <Link href="/products">
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
          </Link>
        ) : (
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink asChild>
              <Link href="/products">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {isMobile && !category && (
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>{" "}
          </BreadcrumbItem>
        )}
        {category && (
          <>
            <BreadcrumbSeparator className="" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {category
                  .replace(/\b\w/g, (str) => str.toUpperCase())
                  .replace(/\-/g, " ")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
