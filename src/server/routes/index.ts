import express, { Router } from "express";

import api from "./api";
import items from "./items";

export default () => {
  const app = express.Router();
  api(app);
  items(app);
  return app;
};
