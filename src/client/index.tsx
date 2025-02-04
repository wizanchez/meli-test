import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./routes";
import "./assets/icons/favicon.ico";
import { BrowserRouter } from "react-router-dom";
import "./styles/scss/index.scss";

declare global {
  interface Window {
    __INITIAL_PROPS__: any;
  }
}

const container = document.getElementById("app");
const serverDataElement = document.getElementById("server-data");
let initialProps = {};
if (serverDataElement && serverDataElement.textContent) {
  initialProps = JSON.parse(serverDataElement.textContent);
}

// const initialProps = window.__INITIAL_PROPS__;

if (container) {
  hydrateRoot(
    container,
    <BrowserRouter>
      <App {...initialProps} />
    </BrowserRouter>
  );
} else {
  console.error("Failed to find the app container element.");
}
