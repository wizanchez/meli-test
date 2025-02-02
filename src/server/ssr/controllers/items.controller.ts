import { NextFunction, Request, Response } from "express";

import { ItemModel } from "../models/items.model";
import { render } from "../render";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query.q as string;
    const limit = req.query.limit as string;

    const dataSend = await ItemModel.getItemList({ query, limit });
    res.locals.data = dataSend.rows;
    res.locals.count = dataSend.total;

    next();
  } catch (err) {
    next(err);
  }
};

const itemList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query.search as string;
    const limit = req.query.limit as string;

    const dataSend = await ItemModel.getItemList({ query, limit });
    const html = render(req.url, dataSend);

    res.send(html);
  } catch (err) {
    next(err);
  }
};

const detail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;

    const dataSend = await ItemModel.getItemDetail({ id });
    console.log("dataSend__:::", "PPPPP___", { dataSend, id });
    const html = render(req.url, dataSend);
    console.log("dataSend__:::", "🌏🌏🌏🌏🌏___", { dataSend, id });

    res.send(html);
  } catch (err) {
    next(err);
  }
};

export default {
  findAll,
  itemList,
  detail,
};
