import { IpageInitialState, IpageInitialContext } from "../interfaces";

export const pageInitialState: IpageInitialState = {
  loading: true,
};

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    run: () => {},
  },
};
