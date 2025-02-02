import React from "react";
import { IChildrenProps } from "../interfaces/general";

export const ItemsContainer = (props: IChildrenProps) => {
  const { children } = props;
  return <div className="card">{children}</div>;
};
