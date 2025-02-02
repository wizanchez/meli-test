import { IItemDetailResponse } from "../../../../services/interfaces";

export const transformData = (
  data: IItemDetailResponse
): IItemDetailResponse => {
  const {
    price: { amount },
  } = data;

  return {
    ...data,
    amountFormatted: customCurrencyFormatter(amount),
  };
};

const customCurrencyFormatter = (value: number) =>
  "$ " +
  Math.floor(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const slugify = (str: string) => {
  return str.trim().replace(/\s+/g, "-").toLowerCase();
};
