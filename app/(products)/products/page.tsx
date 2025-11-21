import ProductList from "@/components/products/products-list";
import { getProducts } from "@/lib/data";

export default async function Page() {
  const products = await getProducts(1);
  return (
    <main className="flex w-full justify-center font-sans ">
      <ProductList products={products} />
    </main>
  );
}
