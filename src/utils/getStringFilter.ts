import { isArray } from "./var";
import { IRFilter } from "./interfaces/getStringFilter.interface";

export const getStringFilter = (
  filter: unknown,
  stringConcat?: string
): IRFilter => {
  let concatFilter = `?${stringConcat}&`;

  if (typeof filter !== "object") {
    return {
      val: false,
      concatFilter: concatFilter.substring(0, concatFilter.length - 1),
    };
  }
  const keys = Object.entries(filter as object);

  keys.forEach(([key, val]) => {
    const isArr = isArray(val);

    if (isArr) {
      val.forEach((valOne: any) => {
        concatFilter = `${concatFilter}${key}=${valOne}&`;
      });
    } else {
      concatFilter = `${concatFilter}${key}=${val}&`;
    }
  });
  concatFilter = concatFilter.substring(0, concatFilter.length - 1);
  return {
    val: !!concatFilter,
    concatFilter,
  };
};
