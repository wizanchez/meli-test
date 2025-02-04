import { IItemDetailResponse } from "../../../../services/interfaces";
import { slugify, customCurrencyFormatter } from "../../../../utils/formatter";

export const transformItems = (items: IItemDetailResponse[]) => {
  return items.map((item) => {
    return {
      ...item,
      slug: slugify(item.title),
      amountFormatted: customCurrencyFormatter(item.price.amount),
    };
  });
};
