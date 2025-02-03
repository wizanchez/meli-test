import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { template } from "./template";
import { App } from "../../client/routes";
import { ServerStyleSheet } from "styled-components";

export const render = (url: string, initialProps = {}): string => {
  const sheet = new ServerStyleSheet();
  try {
    const stream = renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <App {...initialProps} />
        </StaticRouter>
      )
    );
    const styleTags = sheet.getStyleTags();

    return template(stream, initialProps, styleTags);
  } catch (error) {
    console.log("Error rendering", error);
    return template("Error rendering");
  }
};
