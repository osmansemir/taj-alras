import { cn } from "@/lib/utils";
import ProductCard from "./product-card";
import { Product } from "@/types";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="@container w-full">
      <div
        className={cn(
          "grid @3xs:grid-cols-1 @sm:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-3 @6xl:grid-cols-4 @7xl:grid-cols-5 ",
          "justify-center py-10 px-4 md:px-4 gap-3 md:gap-6 ",
        )}
      >
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
