import { Product } from "@/types";
import products from "@/data/MOCK_DATA.json";

const PAGE_LIMIT = 10;

export async function getProducts(page: number): Promise<Product[] | []> {
  const totalPages = await getProductsPages();
  if (page > totalPages) return [];
  return products.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT);
}

export async function getProductsPages() {
  return products.length / PAGE_LIMIT;
}
