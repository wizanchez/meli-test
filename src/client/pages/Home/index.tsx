import React from "react";
import { PageHomeProvider } from "./context";
import { Slide, SlideCategory } from "./components";
import { IInitialsProps } from "./interfaces";

export const Home = (props: IInitialsProps) => {
  return (
    <PageHomeProvider {...props}>
      <Slide />
      <SlideCategory />
    </PageHomeProvider>
  );
};
