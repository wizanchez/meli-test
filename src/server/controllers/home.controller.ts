import { NextFunction, Request, Response } from "express";

import { HomeModel } from "../models/home.model";
import { render } from "../render";

const dashBoard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query.search as string;
    const limit = req.query.limit as string;
    const categories = await HomeModel.getCategories();
    // const response = await fetch('https://tu-app.vercel.app/data.json');
    const lastItemsVisited: any[] = []; //await HomeModel.getLastItemsVisited();

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
