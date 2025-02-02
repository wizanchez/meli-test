import React, { useState } from "react";

import { usePageContext } from "../../context";
import { ButtonSearch } from "./ButtonSearch";
import { SearchOptions } from "./SearchOptions";

export const HeaderSearch = () => {
  const {
    query,
    events: { onKeyPress, onInputChange },
  } = usePageContext();

  return (
    <div className="flex col-11 col-md-11 col-lg-11">
      <form action="/items" method="GET" className="w-full">
        <div className="box w-full form-search">
          <div className="form-input">
            <input
              type="text"
              value={query}
              name="search"
              id="search"
              autoComplete="off"
              onChange={onInputChange}
              onKeyDown={onKeyPress}
              placeholder="Nunca dejes de buscar"
              className=""
            />
            <ButtonSearch />
          </div>
          <SearchOptions />
        </div>
      </form>
    </div>
  );
};
