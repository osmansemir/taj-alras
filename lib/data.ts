import { CategoryMap, RawCategory } from "@/types";
import { createClient } from "@/lib/supabase/server";

const PAGE_LIMIT = 10;

export async function getProducts(category: string, searchString: string) {
  if (searchString) {
    const products = await searchProducts(searchString);
    return products;
  }

  if (category) {
    const products = await getProductsbyCategory(category);
    return products;
  }

  const supabase = await createClient();
  const { data: products, error } = await supabase.from("products").select();

  if (error) {
    console.log("Error Fetching Products", error.message);
  }

  return products;
}

export async function getPageCount() {
  const supabase = await createClient();
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
  const supabase = await createClient();
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

export async function searchProducts(searchString: string) {
  const sanitizedQuery = searchString.trim().split(/\s+/).join(" & ");
  const supabase = await createClient();
  const { data: products, error } = await supabase
    .from("products")
    .select()
    .textSearch("tsv", sanitizedQuery);

  if (error) {
    console.log("Error fetching products", error.message);
    return [];
  }

  return products;
}

export async function getProductsbyCategory(slugCategory: string) {
  const category = slugCategory.replace(/\-/g, " ");
  const supabase = await createClient();
  const { data: products, error } = await supabase
    .from("products")
    .select()
    .eq("subCategory", category);

  if (error) {
    console.log("Error fetching products", error.message);
    return [];
  }

  return products;
}
