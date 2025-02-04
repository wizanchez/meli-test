export const customCurrencyFormatter = (value: number) =>
  "$ " +
  Math.floor(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const slugify = (str: string) => {
  const slesehh = str.replace(/\//g, "");
  const result = slesehh.replace(/%/g, "");
  return result.trim().replace(/\s+/g, "+").toLowerCase();
};

export const shortenDescription = (desc: string, maxLength = 40) => {
  if (desc.length <= maxLength) return desc;

  const words = desc.split(" ");
  let shortDesc = "";

  for (const word of words) {
    if ((shortDesc + " " + word).trim().length > maxLength) break;
    shortDesc += (shortDesc ? " " : "") + word;
  }

  return shortDesc + "...";
};
