/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosError } from "axios";

import { Env } from "../../constants/env";
import { getStringFilter } from "../../../utils/getStringFilter";
import { HttpAdapter, type IPropsGet, type IPropsPos } from "./http.adapter";

interface Options {
  baseURL: string;
  serviceName?: string;
  Authorization: string;
  params?: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;
  private Authorization: string;
  private language: string;
  private timeZone: string;

  constructor(options: Options) {
    const { baseURL, params, Authorization } = options;
    const Authorization3 = Authorization.includes("Client-ID")
      ? Authorization
      : `Bearer ${Authorization}`;

    this.axiosInstance = axios.create({
      params,
      baseURL,
      headers: {
        Authorization: Authorization3,
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use(async (config: any) => {
      config.params = {
        lng: Env.LANG_DEFAULT,
      };

      const token = {
        name: process.env.REACT_APP_AUTHOR_NAME,
        lastname: process.env.REACT_APP_AUTHOR_LASTNAME,
      };
      if (!token) {
        return config;
      }
      config.headers.Authorization = JSON.stringify(token);
      return config;
    });

    this.axiosInstance.interceptors.response.use(
      (response) => {
        const bseUrl = response.config.baseURL;
        const currentUrl = process.env.REACT_APP_URI_API_LOCAL ?? "";

        if (bseUrl?.includes(currentUrl)) {
          const { data } = response;
          const author = data?.author ?? {};
          if (
            author.name !== process.env.REACT_APP_AUTHOR_NAME ||
            author.lastname !== process.env.REACT_APP_AUTHOR_LASTNAME
          ) {
            Promise.reject("Error: No autorizado");
          }
          return response;
        }
        return response;
        return {
          ...response.data,
        };
      },
      (error) => Promise.reject(error)
    );

    this.Authorization = Authorization;
    this.language = "en";
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  get = (props: IPropsGet) =>
    new Promise((resolve, reject) => {
      const { url, filters } = props;
      const dataFilter = getStringFilter(filters, `timeZone=${this.timeZone}`);
      const urlRoyal = url.concat(dataFilter.concatFilter);
      this.axiosInstance
        .get(urlRoyal)
        .then((resp) => resolve(resp))
        .catch((error) => {
          if (axios.isAxiosError(error)) {
            const statusCode = error.response?.status ?? 0;

            switch (statusCode) {
              case 401:
                //401 Unauthorized: El usuario no está autenticado.
                window.location.href = "/login#!wizLogout#!tokenExpiredGet401";
                console.error("401 Unauthorized:", error.response?.data);
                reject(error.response?.data ?? error.response);
                break;

              default:
                break;
            }
          } else {
            console.error("Error inesperado:", error);
          }
          reject(error.response?.data ?? error.response);
        });
    });

  post = (props: IPropsPos) =>
    new Promise((resolve, reject) => {
      const { url, params, isMultiPart = false, body } = props;
      const dataFilter = getStringFilter({}, `timeZone=${this.timeZone}`);
      const urlRoyal = url.concat(dataFilter.concatFilter);
      const headers = isMultiPart
        ? {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        : {};
      const paramSend = isMultiPart ? body : { ...params };

      this.axiosInstance
        .post(urlRoyal, paramSend, headers)
        .then((resp) => resolve(resp))
        .catch((error: Error | AxiosError) => {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              const errorResp = error.response;
              const status = errorResp.status ?? 0;
              switch (status) {
                case 401:
                  debugErrorAxios(error);
                  resolve({ data: error.response.data });
                  // resolve(data);
                  break;

                default:
                  reject(error.response?.data);
                  break;
              }
            }
            reject(error.response?.data);
          }
          reject(error);
        });
    });

  patch = (props: IPropsPos) =>
    new Promise((resolve, reject) => {
      const { url, params } = props;
      const dataFilter = getStringFilter({}, `timeZone=${this.timeZone}`);
      const urlRoyal = url.concat(dataFilter.concatFilter);

      this.axiosInstance
        .patch(
          urlRoyal,
          { ...params },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((resp) => resolve(resp))
        .catch((error: Error | AxiosError) => {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              const errorResp = error.response;
              const status = errorResp.status ?? 0;
              switch (status) {
                case 401:
                  debugErrorAxios(error);
                  resolve({ data: error.response.data });
                  // resolve(data);
                  break;

                default:
                  reject(error.response?.data);
                  break;
              }
            }
            reject(error.response?.data);
          }
          reject(error);
        });
    });

  remove = (props: IPropsPos) =>
    new Promise((resolve, reject) => {
      const { url, params } = props;
      const dataFilter = getStringFilter({}, `timeZone=${this.timeZone}`);
      const urlRoyal = url.concat(dataFilter.concatFilter);
      this.axiosInstance
        .delete(urlRoyal, { ...params })
        .then((resp) => resolve(resp))
        .catch((error: Error | AxiosError) => {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              const errorResp = error.response;
              const status = errorResp.status ?? 0;
              switch (status) {
                case 401:
                  debugErrorAxios(error);
                  resolve({ data: error.response.data });
                  // resolve(data);
                  break;

                default:
                  reject(error.response?.data);
                  break;
              }
            }
            reject(error.response?.data);
          }
          reject(error);
        });
    });
}

const debugErrorAxios = (error: AxiosError) => {
  const errorResp = error.response;
  const status = errorResp?.status ?? 0;

  console.group("_______________POST______________>>>");
  console.log("_______________POST______________>>>");
  console.log("1)._______________status", status);
  console.groupEnd();
  console.log("<<<_______________POST______________||||");
  console.log("<<<_______________POST______________||||");
};
