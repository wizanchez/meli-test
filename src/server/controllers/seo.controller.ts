import { NextFunction, Request, Response } from "express";

const publicDoamin =
  process.env.REACT_URI_PUBLIC || "https://meli-wiz.vercel.app";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${publicDoamin}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
`;

const generateSiteMapXml = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (err) {
    next(err);
  }
};

export default {
  generateSiteMapXml,
};
