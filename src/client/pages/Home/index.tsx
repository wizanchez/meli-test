import React from "react";

import { PageHomeProvider } from "./context";
import { IInitialsProps } from "./interfaces";
import { Slide, SlideCategory, LastItemVisited } from "./components";

export const Home = (props: IInitialsProps) => {
  return (
    <PageHomeProvider {...props}>
      <Slide />
      <SlideCategory />
      <LastItemVisited />
    </PageHomeProvider>
  );
};
