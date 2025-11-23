export type Product = {
  name: string;
  id: string;
  desc: string;
  img: string;
  category: string;
  subCategory: string;
};

export type Category = {
  category: string;
  subCategories?: string[];
};
