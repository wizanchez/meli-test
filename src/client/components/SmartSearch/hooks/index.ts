import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

import { pageInitialState } from "../constants";
import { IpageInitialState } from "../interfaces/context.interface";
import { stat } from "fs";
import { Search } from "../../../../services/apiMeli";
import { Items } from "../../../../services/apiLocal";

export const useSmartSearch = () => {
  const [state, setState] = useState<IpageInitialState>(pageInitialState);
  const [debouncedQuery, setDebouncedQuery] = useState(state.query);

  const changeState = async (states: Partial<IpageInitialState>) => {
    setState((prevState) => ({
      ...prevState,
      ...states,
    }));
  };

  const onOptionClick = (option: string) => {
    changeState({ filteredOptions: [] });
    window.location.href = `/items?search=${option}`;
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    changeState({ query: value, highlightedIndex: -1 });
  };

  const onKeyPress = async (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      const highlightedIndex = Math.min(
        state.highlightedIndex + 1,
        state.filteredOptions.length - 1
      );
      changeState({ highlightedIndex });
    } else if (e.key === "ArrowUp") {
      const highlightedIndex = Math.max(state.highlightedIndex - 1, 0);
      changeState({ highlightedIndex });
    } else if (e.key === "Enter") {
      if (state.highlightedIndex !== -1) {
        const query = state.filteredOptions[state.highlightedIndex];
        changeState({ filteredOptions: [], query });
      }
    }
  };

  const onSearch = async (q: string) => {
    if (q) {
      const resp = await Items.getItem({ filters: { q } });
      const { rows, val } = resp;
      if (!val) {
        changeState({ filteredOptions: [] });
        return;
      }
      const items = rows.items ?? [];
      const filteredOptions = items.map((item) => item.shortDescription);
      changeState({ filteredOptions });
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(state.query);
    }, 500);

    return () => clearTimeout(handler);
  }, [state.query]);

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(state.query);
    }
  }, [debouncedQuery]);

  const testAPI = async () => {};

  useEffect(() => {
    testAPI();
  }, []);

  return {
    ...state,
    events: {
      onKeyPress,
      onOptionClick,
      onInputChange,
    },
  };
};
export default useSmartSearch;
