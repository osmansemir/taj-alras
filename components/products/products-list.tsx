import ProductCard from "./product-card";
import { Product } from "@/types";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-wrap py-10 px-6 sm:px-4 gap-6 md:gap-6 justify-start">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
