import { IpageInitialState, IpageInitialContext } from "../interfaces";

export const pageInitialState: IpageInitialState = {
  loading: true,
  categories: [],
};

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    run: () => {},
  },
};
