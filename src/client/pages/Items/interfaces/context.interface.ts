import React from "react";
import { IItemsResponse, IItemResponse } from "../../../../services/interfaces";

export interface IInitialsProps {
  total: number;
  rows?: IItemResponse;
}
export type TChildren = React.ReactNode;
type TOnItemSelected = (item: IItemsResponse) => void;

export interface IItemListCardProps {
  item: IItemsResponse;
  onItemSelected: TOnItemSelected;
}

export interface IPageProvider extends IInitialsProps {
  children: TChildren;
}

export interface IItemsContainerProps {
  children: TChildren;
}

export interface IpageInitialState {
  loading: boolean;
  itemList: IItemsResponse[];
}

export interface IpageInitialContext extends IpageInitialState {
  events: {
    run: VoidFunction;
    onItemSelected: TOnItemSelected;
  };
}
