/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPropsGet {
  url: string;
  body?: object;
  debug?: boolean;
  filters?: object;
  isMultiPart?: boolean;
  options?: Record<string, unknown>;
}
export interface IPropsPos extends IPropsGet {
  params: object;
}

export abstract class HttpAdapter {
  abstract get(props: IPropsGet): Promise<any>;
  abstract post(props: IPropsPos): Promise<any>;
  abstract patch(props: IPropsPos): Promise<any>;
  abstract remove(props: IPropsPos): Promise<any>;
}
