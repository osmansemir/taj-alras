import ProductList from "@/components/products/products-list";
import ProductSkeleton from "@/components/skeletons/products-skeleton";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params?.category || "";
  return (
    <main className="flex w-full justify-center font-sans ">
      <Suspense fallback={<ProductSkeleton />}>
        <ProductList category={category} />
      </Suspense>
    </main>
  );
}
