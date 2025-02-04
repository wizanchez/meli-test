import React from "react";
import { IChildrenProps } from "../interfaces/general";

interface ItemsContainer extends IChildrenProps {
  className?: string;
}
export const ItemsContainer = (props: ItemsContainer) => {
  const { children, className } = props;

  return <div className={`card ${className}`}>{children}</div>;
};
