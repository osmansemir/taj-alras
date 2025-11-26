import { cn } from "@/lib/utils";
import ProductCard from "./product-card";
import { getProducts } from "@/lib/data";

export default async function ProductList({
  category,
  searchString,
}: {
  category: string;
  searchString: string;
}) {
  const products = await getProducts(category, searchString);
  return (
    <div className="@container w-full">
      <div
        className={cn(
          " grid @3xs:grid-cols-1 @sm:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-4 @min-[90rem]:grid-cols-5 @min-[110rem]:grid-cols-6 ",
          "justify-center py-10 px-4 md:px-4 gap-3 md:gap-6 ",
        )}
      >
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
