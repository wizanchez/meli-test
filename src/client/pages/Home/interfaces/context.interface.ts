import React from "react";
import { IItemDetailResponse } from "../../../../services/interfaces";

export type TChildren = React.ReactNode;

export interface ICategoryCardProps {
  category: ICategory;
}

export interface ICategory {
  id: string;
  name: string;
  slug?: string;
  detail: {
    picture: string;
    description: string;
  };
}

export interface IInitialsProps {
  categories: ICategory[];
  lastItemsVisited: IItemDetailResponse[];
}

export interface IPageProvider extends IInitialsProps {
  children: TChildren;
}

export interface IpageInitialState {
  loading: boolean;
  categories: ICategory[];
  lastItemsVisited: IItemDetailResponse[];
}

export interface IpageInitialContext extends IpageInitialState {
  events: {
    run: VoidFunction;
  };
}
