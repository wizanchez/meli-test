import { slugify } from "../../../../utils/formatter";
import { ICategory } from "../interfaces";

export const transformCategories = (categories: ICategory[]) => {
  return categories.map((category) => {
    return {
      ...category,
      slug: slugify(category.detail.description),
    };
  });
};
