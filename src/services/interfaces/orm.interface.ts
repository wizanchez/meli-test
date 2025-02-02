export interface IHttpResponse<T> {
  val: boolean;
  valMsg: string;
  total: number;
  rows: T;
}

export interface IOrmGet {
  path?: string;
  filters?: object;
  endpointRoot?: string;
  isDataExternal?: boolean;
}

export interface IOrmPost {
  body?: object;
  path?: string;
  data: object;
  filters?: object;
  isMultiPart?: boolean;
  endpointRoot?: string;
  isDataExternal?: boolean;
}

export interface IOrmContructor {
  serviceName: string;
}
