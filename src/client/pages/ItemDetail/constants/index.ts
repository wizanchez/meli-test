import { IpageInitialState, IpageInitialContext } from "../interfaces";

export const pageInitialState: IpageInitialState = {
  loading: true,
  itemDetail: {
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
      decimal: 0,
    },
    picture: "",
    condition: "",
    free_shipping: false,
    sold_quantity: 0,
    description: "",
  },
};

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    run: () => {},
  },
};
