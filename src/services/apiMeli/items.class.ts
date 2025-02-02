/* eslint-disable @typescript-eslint/no-explicit-any */

import AdapterDB from "./AdapterApiMeli.class";
// import { IHttpResponse, IOrmGet, ISearchResponse } from "../interfaces";

const API_PATH = "/items";
const ENDPOINT_NAME = "";

class ItemsClass extends AdapterDB {
  constructor(props: any) {
    super(props);
  }
}
export const Items = new ItemsClass({
  serviceName: `${API_PATH}/${ENDPOINT_NAME}`,
});

export default Items;
