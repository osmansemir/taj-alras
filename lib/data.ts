import { CategoryMap, RawCategory } from "@/types";
import { generateSlug } from "./utils";
import { createClient } from "@/lib/supabase/server";

const PAGE_LIMIT = 10;
const supabase = await createClient();

export async function getProducts(category: string) {
  const { data: products, error } = await supabase.from("products").select();

  if (error) {
    console.log("Error Fetching Products", error.message);
  }

  if (products && category) {
    return products.filter(
      (product) => generateSlug(product.subCategory) === category,
    );
  }

  return products;
}

export async function getPageCount() {
  const { count, error } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.log("Error fetching from server", error);
    return 0;
  }

  const pages = count && Math.ceil(count / PAGE_LIMIT);
  return pages;
}

export async function getCategories() {
  const { data: rawData, error } = await supabase
    .from("products")
    .select("category, subCategory")
    .order("category", { ascending: true });

  if (error) {
    console.log("Error fetching from server", error);
    return [];
  }

  if (!rawData || rawData.length === 0) return [];

  const categoryMap = rawData.reduce(
    (acc: CategoryMap, currentItem: RawCategory) => {
      const { category, subCategory } = currentItem;
      if (!acc[category]) {
        acc[category] = {
          category: category,
          subCategories: [],
        };
      }
      const currentCategory = acc[category];
      if (subCategory && !currentCategory.subCategories.includes(subCategory)) {
        currentCategory.subCategories.push(subCategory);
      }
      return acc;
    },
    {} as CategoryMap,
  );
  return Object.values(categoryMap);
}
