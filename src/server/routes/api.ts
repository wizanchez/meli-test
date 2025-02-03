import express, { Router } from "express";
import controller from "../controllers/items.controller";
import middlewares from "../middlewares";

const route = express.Router();

export default (app: Router) => {
  app.use("/api", route);
  /**
   * GET:  *
   * */
  route.get(
    "/items",
    middlewares.verifyToken,
    controller.findAll,
    middlewares.successResponse
  );

  //region :POST
  //route.post("/", controller.findAll);

  //region :PUT
  //route.put("/", controller.findAll);
};
