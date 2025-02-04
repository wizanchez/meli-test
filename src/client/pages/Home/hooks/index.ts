import { useState, useEffect } from "react";

import { pageInitialState } from "../constants";
import { transformItems } from "../utils/transformItems";
import { IItemsResponse } from "../../../../services/interfaces";
import { transformCategories } from "../utils/transformCategories";
import {
  IInitialsProps,
  IpageInitialState,
} from "../interfaces/context.interface";

export const useDashBoard = (props: IInitialsProps) => {
  const { categories, lastItemsVisited } = props;
  const pageInitialHookState: IpageInitialState = {
    ...pageInitialState,
    loading: false,
    categories: transformCategories(categories ?? []),
    lastItemsVisited: transformItems(lastItemsVisited ?? []),
  };
  const [state, setState] = useState<IpageInitialState>(pageInitialHookState);

  const changeState = async (states: Partial<IpageInitialState>) => {
    setState((prevState) => ({
      ...prevState,
      ...states,
    }));
  };

  const onItemSelected = (item: IItemsResponse) => {
    const { id, title } = item;
    window.location.href = `/items/${id}/${title}`;
  };

  const run = () => {
    changeState({
      loading: false,
    });
  };

  useEffect(() => {
    run();
  }, []);

  return {
    ...state,
    events: {
      run,
      onItemSelected,
    },
  };
};
export default useDashBoard;
