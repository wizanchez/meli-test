/* eslint-disable @typescript-eslint/no-explicit-any */
import AdapterDB from "./AdapterApiLocal.class";
import { IHttpResponse, IOrmGet, IItemResponse } from "../interfaces";

const API_PATH = "/items";
const ENDPOINT_NAME = "";

class ItemsClass extends AdapterDB {
  constructor(props: any) {
    super(props);
  }

  async getItem(props: IOrmGet): Promise<IHttpResponse<IItemResponse>> {
    try {
      const resp = (await super.get({
        ...props,
      })) as any;

      return resp;
    } catch (err: any) {
      console.log("ERROR____SearchClass.getSearch", err);
      throw err;
    }
  }
}
export const Items = new ItemsClass({
  serviceName: `${API_PATH}/${ENDPOINT_NAME}`,
});

export default Items;
