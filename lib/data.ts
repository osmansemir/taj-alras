import { Product } from "@/types";
import products from "@/data/MOCK_DATA.json";
import { generateSlug } from "./utils";
import { createClient } from "@/lib/supabase/server";

const PAGE_LIMIT = 10;
const supabase = await createClient();

export async function getProducts(
  category: string,
  page: number = 1,
): Promise<Product[] | []> {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const totalPages = await getPageCount();
  try {
    const { data: products } = await supabase.from("products").select();

    if (page > totalPages) return [];
    if (products) {
      if (category) {
        return products.filter(
          (product) => generateSlug(product.subCategory) === category,
        );
      }

      return products.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return [];
}

export async function getPageCount() {
  const { count, error } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.log("Error fetching from server", error);
    return 0;
  }

  const pages = Math.ceil(count / PAGE_LIMIT);
  return pages;
}

export async function getCategories() {
  const { data: rawData, error } = await supabase
    .from("products")
    .select("category, subCategory")
    .order("category", { ascending: true });

  console.log("Raw Data", rawData);
  if (error) {
    console.log("Error fetching from server", error);
    return [];
  }
  if (!rawData || rawData.length === 0) return [];

const groupedCategories = rawData.reduce((acc, currentItem) => {
    const { category, subCategory } = currentItem;

    // Find if a category object already exists in the accumulator (acc)
    let existingCategory = acc.find(item => item.category === category);

    // If the category object doesn't exist, create it
    if (!existingCategory) {
      existingCategory = {
        category: category,
        subCategories: []
      };
      acc.push(existingCategory);
    }

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
