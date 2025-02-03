/* eslint-disable @typescript-eslint/no-explicit-any */
import Orm from "../orm.class";
import { apiMeliDBFetch } from "../../config/adapters/apiMeli.adapter";
import type {
  IOrmGet,
  IOrmPost,
  IHttpResponse,
  IOrmContructor,
} from "../interfaces";

export class AdapterApiMeli extends Orm {
  serviceName: string;

  constructor(props: IOrmContructor) {
    super(props);
    const { serviceName } = props;
    this.serviceName = serviceName;
  }

  async get(props: IOrmGet = {}): Promise<IHttpResponse<any>> {
    try {
      props.isDataExternal = true;
      const result = await super.getOrm(apiMeliDBFetch, props);

      return result;
    } catch (err: any) {
      console.error("ERROR____apiMeliDBFetch.get", { err, apiMeliDBFetch });
      throw err;
    }
  }

  async find(
    id: number | string,
    props: IOrmGet = {}
  ): Promise<IHttpResponse<any>> {
    try {
      props.path = id as string;
      props.isDataExternal = true;
      const result = await super.getOrm(apiMeliDBFetch, props);

      return result;
    } catch (err: any) {
      console.error("ERROR____apiMeliDBFetch.find", {
        id,
        err,
        apiMeliDBFetch,
      });
      throw err;
    }
  }

  async getFindById(
    id: number | string,
    props: IOrmGet = {}
  ): Promise<IHttpResponse<any>> {
    try {
      props.filters = { id };
      props.isDataExternal = true;
      const result = await super.getOrm(apiMeliDBFetch, props);
      const { rows, val } = result;

      if (val) {
        if (rows.length === 1) {
          result.rows = rows[0];
          return result;
        }
      }

      return result;
    } catch (err: any) {
      console.error("ERROR____apiMeliDBFetch.get", { err, apiMeliDBFetch });
      throw err;
    }
  }

  async post(props: IOrmPost): Promise<IHttpResponse<any>> {
    try {
      const result = await super.postOrm(apiMeliDBFetch, props);
      return result;
    } catch (err: any) {
      console.log("ERROR____apiMeliDBFetch.post", { err, props });
      throw err;
    }
  }

  async patch(props: IOrmPost): Promise<IHttpResponse<any>> {
    try {
      const result = await super.patchOrm(apiMeliDBFetch, props);
      return result;
    } catch (err: any) {
      console.log("ERROR____apiMeliDBFetch.patch", { err, props });
      throw err;
    }
  }
}

export default AdapterApiMeli;
