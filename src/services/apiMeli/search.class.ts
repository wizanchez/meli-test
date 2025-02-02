/* eslint-disable @typescript-eslint/no-explicit-any */

import AdapterDB from "./AdapterApiMeli.class";
import { IHttpResponse, IOrmGet, ISearchResponse } from "../interfaces";

const API_PATH = "/sites/MLA";
const ENDPOINT_NAME = "/search";

class SearchClass extends AdapterDB {
  constructor(props: any) {
    super(props);
  }

  async getSearch(props: IOrmGet): Promise<IHttpResponse<ISearchResponse>> {
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
export const Search = new SearchClass({
  serviceName: `${API_PATH}/${ENDPOINT_NAME}`,
});

export default Search;
