import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";

import { Search, Items } from "../../services/apiMeli";
import { RESULT_LIMIT } from "../../config/constants";
import { countDecimals, isNumeric } from "../../utils/var";
import { shortenDescription } from "../../utils/formatter";

const DATA_FS_ITEMS_LAST_VISITED =
  process.env.REACT_DATA_FS_ITEMS_LAST_VISITED ?? "";
const filePath = path.join(__dirname, DATA_FS_ITEMS_LAST_VISITED);

import {
  IItems,
  IFilter,
  IItemDetail,
  IItemsResponse,
  IItemDetailResponse,
} from "../../services/interfaces/item.interface";

interface IGetItemListProps {
  query: string;
  limit: string;
}

interface IGetItemDetailProps {
  id: string;
}

export class ItemModel {
  public static getItemDetail = async (props: IGetItemDetailProps) => {
    // try {
    const { id } = props;

    const resp = await Items.find(id);
    const rows = resp?.rows ?? {};

    const respDescrip = await Items.find(`${id}/description`);
    const description = respDescrip.val
      ? respDescrip.rows.plain_text
      : "No tiene descripción";
    const items = this.transformItemsDetailOne(rows);

    const categories = await this.getCategories([], rows?.category_id);

    const dataItemSend = {
      categories,
      items: { ...items, description },
    };

    await this.saveItemLastVisited({
      ...dataItemSend.items,
      thumbnail: rows.thumbnail,
      description: "",
    });

    return {
      total: 1,
      rows: dataItemSend,
    };
    // } catch (err) {
    //   throw err;
    // }
  };

  public static getItemLastVisited = async (): Promise<any> =>
    new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          reject({ val: false, valMsg: "Error al leer el archivo", rows: [] });
        }

        let records = [];
        if (data) {
          records = JSON.parse(data);
          resolve({ val: true, valMsg: "OK", rows: records });
        }
        reject({ val: false, valMsg: "No hay registros", rows: [] });
      });
    });

  private static saveItemLastVisited = async (item: any) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return { val: false, valMsg: "Error al leer el archivo", rows: [] };
      }

      let records = [];
      if (data) {
        records = JSON.parse(data);
      }

      records = records.filter((record: any) => record.id !== item.id);

      if (records.length > 10) {
        records.pop();
      }
      records.unshift(item);

      fs.writeFile(filePath, JSON.stringify(records, null, 2), (err) => {
        if (err) {
          return {
            val: false,
            valMsg: "Error al guardar el archivo",
            rows: [],
          };
        }
        return {
          val: true,
          valMsg: "Registro guardado exitosamente",
          rows: [],
        };
      });
    });
  };

  public static getItemList = async (props: IGetItemListProps) => {
    try {
      const { query, limit } = props;
      const limitNumber = isNumeric(limit) ? Number(limit) : RESULT_LIMIT;
      const limitFormat =
        limitNumber > RESULT_LIMIT ? RESULT_LIMIT : limitNumber;

      const resp = await Search.getSearch({
        filters: { q: query, limit: limitFormat },
      });
      const rows = resp?.rows ?? {};
      const results = rows.results ?? [];
      const categories = rows.filters
        ? await this.getCategories(rows.filters, results?.[0]?.category_id)
        : [];
      const items = this.transformItems(results);
      const dataSend = {
        categories,
        items: items,
        // resultOri: rows,
      };
      return {
        total: resp.rows.paging.total,
        rows: dataSend,
      };
    } catch (err) {
      throw err;
    }
  };

  private static getCategories = async (
    filters: IFilter[],
    category: string
  ): Promise<string[]> => {
    const categories = filters.find((filter) => filter.id === "category");

    if (categories) {
      const newCategories = categories.values.flatMap((value) =>
        value?.path_from_root?.map((path) => path.name)
      );
      if (newCategories.length > 0) {
        return newCategories as string[];
      }
    }
    if (category) {
      const resp = await Search.getSearch({
        filters: { category, limit: 1 },
      });
      const rows = resp?.rows ?? {};
      const filters2 = rows.filters ?? [];
      return this.getCategories(filters2, "");
    }
    return [];
  };

  private static transformItems(items: IItems[]): IItemsResponse[] {
    return items.map((item) => {
      return this.transformItemsOne(item);
    });
  }

  private static transformItemsOne(item: IItems): IItemsResponse {
    const {
      id,
      title,
      condition,
      thumbnail,
      currency_id: currency,
      address: { state_name },
      shipping: { free_shipping },
      sale_price: { regular_amount, amount },
    } = item;
    const decimal = countDecimals(amount);
    const shortDescription = shortenDescription(title, 45);
    return {
      id,
      title,
      shortDescription,
      price: {
        currency,
        amount: regular_amount ?? amount,
        decimal,
      },
      picture: thumbnail,
      condition,
      free_shipping,
      state_name,
    } as IItemsResponse;
  }

  private static transformItemsDetailOne(
    item: IItemDetail
  ): IItemDetailResponse {
    const {
      id,
      title,
      price,
      condition,
      thumbnail,
      base_price,
      initial_quantity,
      currency_id: currency,
      shipping: { free_shipping },
    } = item;
    const decimal = countDecimals(price ?? base_price);
    const picture = item.pictures[0].url ?? thumbnail;
    return {
      id,
      title,
      price: {
        currency,
        amount: price ?? base_price,
        decimal,
      },
      picture,
      condition,
      free_shipping,
      description: "",
      sold_quantity: initial_quantity,
    } as IItemDetailResponse;
  }
}

export default ItemModel;
