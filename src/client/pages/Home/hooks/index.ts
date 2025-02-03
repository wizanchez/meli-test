import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

import { pageInitialState } from "../constants";
import {
  IInitialsProps,
  IpageInitialState,
} from "../interfaces/context.interface";
import { IItemsResponse } from "../../../../services/interfaces";

export const useDashBoard = (props: IInitialsProps) => {
  const { categories } = props;
  const pageInitialHookState: IpageInitialState = {
    ...pageInitialState,
    loading: false,
    categories: categories ?? [],
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
