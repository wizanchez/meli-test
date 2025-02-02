import React from "react";
import { IItemDetailResponse } from "../../../../services/interfaces";

export type TChildren = React.ReactNode;

export interface IInitialsProps {
  total: number;
  rows?: any;
}
export interface IPageProvider extends IInitialsProps {
  children: TChildren;
}
export interface IpageInitialState {
  loading: boolean;
  itemDetail: IItemDetailResponse;
}

export interface IpageInitialContext extends IpageInitialState {
  events: {
    run: VoidFunction;
  };
}
