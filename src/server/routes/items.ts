import express, { Router } from "express";
import controller from "../controllers/items.controller";

export default (app: Router) => {
  /**
   * GET:  *
   * */
  app.get("/items", controller.itemList);

  app.get("/items/:id", controller.detail);
  app.get("/items/:id/:description", controller.detail);

  //region :POST
  //route.post("/", controller.findAll);

  //region :PUT
  //route.put("/", controller.findAll);
};
