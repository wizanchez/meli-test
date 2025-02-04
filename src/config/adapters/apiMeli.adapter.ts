import { AxiosAdapter } from "./http/axios.adapter";
import { Env } from "../constants/env";
const URI_API = Env.URI_API_MELI ?? "";
const CODEAUTH_JWT = Env.CODE_AUTH_PUBLIC_JWT ?? "";

console.log("URI_API", URI_API);

export const apiMeliDBFetch = new AxiosAdapter({
  baseURL: URI_API,
  Authorization: CODEAUTH_JWT,
  params: {
    languagesss: "es",
  },
});
