import ProductList from "@/components/products/products-list";
import products from "@/data/MOCK_DATA.json";

export default function Page() {
  return (
    <main className="flex w-full justify-center font-sans ">
      <ProductList products={products} />
    </main>
  );
}
