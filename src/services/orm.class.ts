/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HttpAdapter } from "../config/adapters/http/http.adapter";
import { IHttpResponse, IOrmGet, IOrmPost } from "./interfaces/orm.interface";

interface Options {
  serviceName: string;
}

export class Orm {
  rows: any;
  method: string;
  serviceName: string;

  constructor(props: Options) {
    const { serviceName } = props;
    this.method = "initial";
    this.serviceName = serviceName;
  }

  /**
   * method getList enpoint
   * @returns data any
   */
  async getOrm(
    fetcher: HttpAdapter,
    props: IOrmGet
  ): Promise<IHttpResponse<any>> {
    try {
      const {
        filters,
        endpointRoot,
        path = "",
        isDataExternal = false,
      } = props;
      this.method = "get";
      const url2 = endpointRoot ?? this.serviceName;
      const url = `${url2}${path}`;
      const { data } = await fetcher.get({ url, filters });

      const data2 = isDataExternal ? data : data.rows;
      this.rows = data2;
      const total = Object.keys(data2).length;
      const val = total > 0;
      return {
        val,
        valMsg: val ? "OK" : "NO DATA",
        total,
        rows: this.rows,
      };
    } catch (error: any) {
      throw {
        val: false,
        valMsg: error,
        total: 0,
        rows: {},
      };
    }
  }

  /**
   * method getList enpoint
   * @returns data any
   */
  async postOrm(
    fetcher: HttpAdapter,
    props: IOrmPost
  ): Promise<IHttpResponse<any>> {
    try {
      const {
        body,
        endpointRoot,
        path = "",
        data: params,
        isDataExternal = false,
        isMultiPart = false,
      } = props;
      const url2 = endpointRoot ?? this.serviceName;
      const url = `${url2}${path}`;
      this.method = "post";
      const { data } = await fetcher.post({ url, params, isMultiPart, body });

      const data2 = isDataExternal ? data : data.rows;

      this.rows = data2;
      const total = data.total;
      const val = total > 0;
      const valMsg = data?.valMsg ?? "NO DATA";
      return {
        val,
        valMsg,
        total,
        rows: this.rows,
      };
    } catch (error: any) {
      throw new error();
    }
  }

  /**
   * method getList enpoint
   * @returns data any
   */
  async patchOrm(
    fetcher: HttpAdapter,
    props: IOrmPost
  ): Promise<IHttpResponse<any>> {
    try {
      const {
        path = "",
        endpointRoot,
        isDataExternal = false,
        data: params,
      } = props;
      const url2 = endpointRoot ?? this.serviceName;
      const url = `${url2}${path}`;
      this.method = "patch";
      const { data } = await fetcher.patch({ url, params });

      const data2 = isDataExternal ? data : data.rows;

      this.rows = data2;
      const total = data.total;
      const val = total > 0;
      const valMsg = data?.valMsg ?? "NO DATA";
      return {
        val,
        valMsg,
        total,
        rows: this.rows,
      };
    } catch (error: any) {
      throw new error();
    }
  }

  /**
   * count rows of the query before execute
   * @returns number
   */
  count(): number {
    return this.rows.length ?? 0;
  }

  /**
   * get all Keys of the query result
   * @returns array
   */
  getKeys() {
    const rows = this.method === "findOne" ? this.rows : this.rows[0];
    return Object.keys(rows);
  }
}

export default Orm;
