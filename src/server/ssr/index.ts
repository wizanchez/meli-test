import express, { Express, Request, Response } from "express";
import { config } from "./config";
// import { template } from "./render/template";
import { render } from "./render";
import axios from "axios";
// import sassMiddleware from "node-sass-middleware";
// import path from "path";
// import sass from "node-sass";
import cors from "cors";
import routes from "./routes";
import controller from "./controllers/items.controller";

const app: Express = express();
const apiLocal = express.Router();

app.use(
  cors({
    // origin: "http://localhost:3500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.static("dist"));

const fnPathGalaxias = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      "https://images-api.nasa.gov/search?q=galaxies"
    );

    const initialProps = {
      galaxies: data?.collection?.items,
    };
    const html = render(req.url, initialProps);
    res.send(html);
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }
};
/**
 * API LOCAL
 */
app.use("/", routes());
// app.get("/items", controller.itemList);
app.get("/test-ssr", async (req: Request, res: Response) =>
  fnPathGalaxias(req, res)
);

app.get("*", (req: Request, res: Response) => {
  res.send(render(req.url));
});

app.listen(config.PORT, () => {
  console.log(`Server running on port: ${config.PORT}`);
});
