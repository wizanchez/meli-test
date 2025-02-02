import React from "react";

import { usePageContext } from "../../context";
import { SearchOptionsItem } from "./SearchOptionsItem";
import { SearchOptionsNotFound } from "./SearchOptionsNotFound";

export const SearchOptions = () => {
  const {
    query,
    filteredOptions,
    highlightedIndex,
    events: { onOptionClick },
  } = usePageContext();

  return (
    <>
      {filteredOptions.length > 0 && query && (
        <ul className="form-suggestions">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => {
              const classSelected =
                index === highlightedIndex ? "selected" : "";
              return (
                <SearchOptionsItem
                  key={option}
                  option={option}
                  classSelected={classSelected}
                  onOptionClick={onOptionClick}
                />
              );
            })
          ) : (
            <SearchOptionsNotFound />
          )}
        </ul>
      )}
    </>
  );
};
