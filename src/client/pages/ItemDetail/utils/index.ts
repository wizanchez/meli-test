import { IItemsResponse } from "../../../../services/interfaces";

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

const customCurrencyFormatter = (value: number) =>
  "$ " +
  Math.floor(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const slugify = (str: string) => {
  return str.trim().replace(/\s+/g, "-").toLowerCase();
};
