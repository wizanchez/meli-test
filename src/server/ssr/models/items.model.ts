import { NextFunction, Request, Response } from "express";

import { Search, Items } from "../../../services/apiMeli";
import { RESULT_LIMIT } from "../../../config/constants";
import { countDecimals, isNumeric } from "../../../utils/var";
import {
  IItems,
  IFilter,
  IItemDetail,
  IItemsResponse,
  IItemDetailResponse,
} from "../../../services/interfaces/item.interface";

interface IGetItemListProps {
  query: string;
  limit: string;
}

interface IGetItemDetailProps {
  id: string;
}

export class ItemModel {
  public static getItemDetail = async (props: IGetItemDetailProps) => {
    try {
      const { id } = props;

      const resp = await Items.find(id);
      const rows = resp?.rows ?? {};

      const respDescrip = await Items.find(`${id}/description`);
      const items = this.transformItemsDetailOne(rows);

      return {
        total: 1,
        rows: { ...items, description: respDescrip?.rows?.plain_text },
      };
    } catch (err) {
      throw err;
    }
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
        ? this.getCategories(rows.filters, rows.available_filters)
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

  private static getCategories = (
    filters: IFilter[],
    availableFilters: IFilter[]
  ) => {
    const categories = filters.find((filter) => filter.id === "category");
    if (categories) {
      const newCategories = categories.values.flatMap((value) =>
        value?.path_from_root?.map((path) => path.name)
      );
      if (newCategories.length > 0) {
        return newCategories;
      }
    }

    const categoriesAvailable = availableFilters.find(
      (filter) => filter.id === "category"
    );

    if (!categoriesAvailable) {
      return [];
    }

    return categoriesAvailable.values.map((path) => path.name);
  };

  private static transformItems(items: IItems[]): IItemsResponse[] {
    return items.map((item) => {
      return this.transformItemsOne(item);
    });
  }

  private static shortenDescription(desc: string, maxLength = 30) {
    if (desc.length <= maxLength) return desc;

    const words = desc.split(" ");
    let shortDesc = "";

    for (const word of words) {
      if ((shortDesc + " " + word).trim().length > maxLength) break;
      shortDesc += (shortDesc ? " " : "") + word;
    }

    return shortDesc + "...";
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
    const shortDescription = this.shortenDescription(title, 45);
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
/**
 "id": String,
"title": String,
"price": {
  "currency": String,
  "amount": Number,
  "decimals": Number,
},
“picture”: String,
"condition": String,
"free_shipping": Boolean,
"sold_quantity"
, Number
"description": String
 */
