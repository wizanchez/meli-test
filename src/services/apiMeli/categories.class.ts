/* eslint-disable @typescript-eslint/no-explicit-any */

import AdapterDB from "./AdapterApiMeli.class";
import {
  IHttpResponse,
  IOrmGet,
  IGetAllCategoriesResponse,
} from "../interfaces";

const SITE_ID = process.env.REACT_APP_SITE_ID_API_MELI || "MLA";
const API_PATH = ``;
const ENDPOINT_NAME = "";

class CategoriesClass extends AdapterDB {
  constructor(props: any) {
    super(props);
  }

  async getAllCategories(
    props?: IOrmGet
  ): Promise<IHttpResponse<IGetAllCategoriesResponse[]>> {
    const path = `sites/${SITE_ID}/categories`;
    try {
      const resp = (await super.get({
        ...props,
        path,
      })) as any;

      return resp;
    } catch (err: any) {
      console.log("ERROR____CategoriesClass.getAllCategories", { err, path });
      throw err;
    }
  }

  async getInfoCategory(
    id: string,
    props?: IOrmGet
  ): Promise<IHttpResponse<any>> {
    try {
      const path = `categories/${id}`;

      const resp = (await super.get({
        ...props,
        path,
      })) as any;

      return resp;
    } catch (err: any) {
      console.log("ERROR____CategoriesClass.getAllCategories", err);
      throw err;
    }
  }
}
export const Categories = new CategoriesClass({
  serviceName: `${API_PATH}/${ENDPOINT_NAME}`,
});

export default Categories;
