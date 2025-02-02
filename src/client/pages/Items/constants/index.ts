import { initialItemResponse } from "../../../../services/interfaces";
import { IpageInitialState, IpageInitialContext } from "../interfaces";

export const pageInitialState: IpageInitialState = {
  loading: true,
  itemList: [],
};

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    run: () => {},
    onItemSelected: () => {},
  },
};
