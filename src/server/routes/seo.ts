import express, { Router } from "express";
import controller from "../controllers/seo.controller";

export default (app: Router) => {
  /**
   * GET:  *
   * */
  app.get("/sitemap.xml", controller.generateSiteMapXml);
};
