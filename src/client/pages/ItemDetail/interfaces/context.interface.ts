import React from "react";

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
}

export interface IpageInitialContext extends IpageInitialState {
  events: {
    run: VoidFunction;
  };
}
