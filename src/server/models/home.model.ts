import { NextFunction, Request, Response } from "express";

import { Categories } from "../../services/apiMeli";
import ItemModel from "./items.model";

export class HomeModel {
  public static getCategories = async () => {
    try {
      const resp = await Categories.getAllCategories({ filters: { limit: 8 } });
      const rows = resp?.rows ?? {};

      const categories = rows ?? [];

      for (let index = 0; index < categories.length; index++) {
        const element = categories[index];
        const id = element.id;
        const respDetail = (await Categories.getInfoCategory(id)).rows;
        categories[index].detail = {
          picture: respDetail?.picture,
          description: `${respDetail?.children_categories[0].name}, ${respDetail?.children_categories[1].name}`,
        };
      }

      return categories;
    } catch (err) {
      throw err;
    }
  };

  public static getLastItemsVisited = async () => {
    const resp = await ItemModel.getItemLastVisited();
    return resp.rows;
  };

  public static getJsonStatic = async () => {
    const response = await fetch(
      "https://futbolwin.com/meli/item-data-last-visited.json"
    );
    return response.json();
  };
}

export default HomeModel;
