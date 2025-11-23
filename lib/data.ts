import { Product } from "@/types";
import products from "@/data/MOCK_DATA.json";
import { generateSlug } from "./utils";

const PAGE_LIMIT = 10;

export async function getProducts(
  category: string,
  page: number = 1,
): Promise<Product[] | []> {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const totalPages = await getProductsPages();

  if (page > totalPages) return [];
  if (category) {
    return products.filter(
      (product) => generateSlug(product.subCategory) === category,
    );
  }

  return products.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT);
}

export async function getProductsPages() {
  return products.length / PAGE_LIMIT;
}

export async function getCategories() {
  const allCategories = Array.from(
    new Set(products.map((product) => product.category)),
  );

  const categoriesWithSubs = allCategories.map((category) => {
    const subs = Array.from(
      new Set(
        products
          .filter((item) => item.category === category)
          .map((item) => item.subCategory),
      ),
    );

    return {
      category,
      subCategories: subs,
    };
  });

  return categoriesWithSubs;
}
