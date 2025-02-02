"use client";
import React, { FC, useContext, createContext } from "react";

import useHoock from "../hooks";
import { pageInitialContext } from "../constants";
import { IpageInitialContext, IPageProvider } from "../interfaces";

export const PageContext =
  createContext<IpageInitialContext>(pageInitialContext);

export const PageSmartSearchProvider: FC<IPageProvider> = ({ children }) => {
  const value = useHoock();
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
