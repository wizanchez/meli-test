import { IpageInitialState, IpageInitialContext } from "../interfaces";

export const pageInitialState: IpageInitialState = {
  lng: "",
  query: "",
  loading: false,
  filteredOptions: [],
  highlightedIndex: -1,
};

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    onKeyPress: () => {},
    onOptionClick: () => {},
    onInputChange: () => {},
  },
};
