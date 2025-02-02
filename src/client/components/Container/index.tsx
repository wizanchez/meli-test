import React from "react";
import { IChildrenProps } from "../interfaces/general";

export const Container = (props: IChildrenProps) => {
  const { children } = props;
  return (
    <div className="content">
      <div className="content-body">{children}</div>
    </div>
  );
};
