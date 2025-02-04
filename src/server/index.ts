import express, { Express } from "express";
import { config } from "./config";

import cors from "cors";
import routes from "./routes";
import home from "./controllers/home.controller";

const app: Express = express();

app.use(
  cors({
    // origin: "http://localhost:3500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "connect-src 'self' https://api.mercadolibre.com https://http2.mlstatic.com;"
  );
  next();
});
app.use(express.static("dist"));

/**
 * API LOCAL
 */
app.use("/", routes());
app.get("*", home.dashBoard);

app.listen(config.PORT, () => {
  console.log(`Server running on port: ${config.PORT}`);
});
