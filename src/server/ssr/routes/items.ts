import express, { Router } from "express";
import controller from "../controllers/items.controller";
import middlewares from "../middlewares";

// const route = express.Router();

export default (app: Router) => {
  //  app.use("/items", route);
  /**
   * GET:  *
   * */
  app.get("/items", controller.itemList);

  app.get("/items/:id/:description", controller.detail);

  //region :POST
  //route.post("/", controller.findAll);

  //region :PUT
  //route.put("/", controller.findAll);
};
