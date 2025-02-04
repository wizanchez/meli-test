import { IItemsResponse } from "../../../../services/interfaces";
import { slugify, customCurrencyFormatter } from "../../../../utils/formatter";

export const transformData = (data: IItemsResponse[]) => {
  return data.map((item) => {
    const {
      title,
      price: { amount },
    } = item;

    return {
      ...item,
      amountFormatted: customCurrencyFormatter(amount),
      titleSlug: slugify(title),
    };
  });
};
