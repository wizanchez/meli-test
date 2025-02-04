import { NextFunction, Request, Response } from "express";

import { HomeModel } from "../models/home.model";
import { render } from "../render";

const dashBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await HomeModel.getCategories();
    const host = req.get("host") || "";

    const lastItemsVisited = host.includes("vercel.app")
      ? await HomeModel.getJsonStatic()
      : await HomeModel.getLastItemsVisited();

    const dataSend = {
      categories,
      lastItemsVisited,
    };
    const html = render(req.url, dataSend);

    res.send(html);
  } catch (err) {
    next(err);
  }
};

export default {
  dashBoard,
};
