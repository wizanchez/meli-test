/* eslint-disable @typescript-eslint/no-explicit-any */
import Orm from "../orm.class";
import { apiLocalDBFetch } from "../../config/adapters/apiLocal.adapter";
import type {
  IOrmGet,
  IOrmPost,
  IHttpResponse,
  IOrmContructor,
} from "../interfaces";

export class AdapterApiLocal extends Orm {
  serviceName: string;

  constructor(props: IOrmContructor) {
    super(props);
    const { serviceName } = props;
    this.serviceName = serviceName;
  }

  async get(props: IOrmGet = {}): Promise<IHttpResponse<any>> {
    try {
      props.isDataExternal = true;
      const result = await super.getOrm(apiLocalDBFetch, props);

      return result;
    } catch (err: any) {
      console.error("ERROR____apiLocalDBFetch.get", { err, apiLocalDBFetch });
      throw err;
    }
  }

  async getFindById(
    id: number | string,
    props: IOrmGet = {}
  ): Promise<IHttpResponse<any>> {
    try {
      props.filters = { id };
      const result = await super.getOrm(apiLocalDBFetch, props);
      const { rows, val } = result;

      if (val) {
        if (rows.length === 1) {
          result.rows = rows[0];
          return result;
        }
      }

      return result;
    } catch (err: any) {
      console.error("ERROR____apiLocalDBFetch.get", { err, apiLocalDBFetch });
      throw err;
    }
  }

  async post(props: IOrmPost): Promise<IHttpResponse<any>> {
    try {
      const result = await super.postOrm(apiLocalDBFetch, props);
      return result;
    } catch (err: any) {
      console.log("ERROR____apiLocalDBFetch.post", { err, props });
      throw err;
    }
  }

  async patch(props: IOrmPost): Promise<IHttpResponse<any>> {
    try {
      const result = await super.patchOrm(apiLocalDBFetch, props);
      return result;
    } catch (err: any) {
      console.log("ERROR____apiLocalDBFetch.patch", { err, props });
      throw err;
    }
  }
}

export default AdapterApiLocal;
