import express, { Express, Request, Response } from "express";
import { config } from "./config";
// import { template } from "./render/template";
import { render } from "./render";

import cors from "cors";
import routes from "./routes";
import home from "./controllers/home.controller";

const app: Express = express();
// const apiLocal = express.Router();

app.use(
  cors({
    // origin: "http://localhost:3500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.static("dist"));

/**
 * API LOCAL
 */
app.use("/", routes());

// app.get("*", (req: Request, res: Response) => {
//   res.send(render(req.url));
// });
app.get("*", home.dashBoard);

app.listen(config.PORT, () => {
  console.log(`Server running on port: ${config.PORT}`);
});
