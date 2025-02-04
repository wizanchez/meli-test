import express from "express";

import api from "./api";
import seo from "./seo";
import items from "./items";

export default () => {
  const app = express.Router();
  api(app);
  items(app);
  seo(app);
  return app;
};
