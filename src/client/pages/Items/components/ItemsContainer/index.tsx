import React from "react";
import { IItemsContainerProps } from "../../interfaces";

export const ItemsContainer = (props: IItemsContainerProps) => {
  const { children } = props;
  return <div className="card">{children}</div>;
};
