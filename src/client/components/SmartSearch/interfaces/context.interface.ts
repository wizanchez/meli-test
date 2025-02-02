import React, { KeyboardEvent, ChangeEvent } from "react";
import { TOnOptionClick } from "./types";

export interface IPageProvider {
  children: React.ReactNode;
}

export interface ISearchOptionsItemProps {
  option: string;
  classSelected: string;
  onOptionClick: TOnOptionClick;
}

export interface IpageInitialState {
  lng: string;
  query: string;
  loading: boolean;
  highlightedIndex: number;
  filteredOptions: string[];
}

export interface IpageInitialContext extends IpageInitialState {
  events: {
    onOptionClick: TOnOptionClick;
    onKeyPress: (e: KeyboardEvent) => void;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}
