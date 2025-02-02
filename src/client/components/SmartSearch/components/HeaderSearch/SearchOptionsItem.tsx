import React from "react";

import type { ISearchOptionsItemProps } from "../../interfaces";

export const SearchOptionsItem = (props: ISearchOptionsItemProps) => {
  const { option, classSelected, onOptionClick } = props;
  return (
    <li
      key={option}
      className={`form-suggestions-li ${classSelected}`}
      onClick={() => onOptionClick(option)}
    >
      {option}
    </li>
  );
};
