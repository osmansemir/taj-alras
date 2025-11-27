import ProductList from "@/components/products/products-list";
import ProductSkeleton from "@/components/skeletons/products-skeleton";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search: string }>;
}) {
  const params = await searchParams;
  const category = params?.category || "";
  const searchString = params?.search || "";
  return (
    <main role="main" className="flex w-full justify-center font-sans flex-1 ">
      <Suspense fallback={<ProductSkeleton />}>
        <ProductList category={category} searchString={searchString} />
      </Suspense>
    </main>
  );
}
