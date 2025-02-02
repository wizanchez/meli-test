export const isArray = (value: any) => Array.isArray(value);
export const isNumeric = (value: any) =>
  !isNaN(value) && !isNaN(parseFloat(value));

export const countDecimals = (num: number) => {
  const str = num.toString();
  return str.includes(".") ? str.length - str.indexOf(".") - 1 : 0;
};
