import axios from "axios";

import { SERVER_URL } from "src/common/constant";

import type { AxiosRequestConfig } from "axios";

const baseURL = SERVER_URL;
const axiosInstance = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});
const request = <T>(req: AxiosRequestConfig) =>
  axiosInstance<T>(req)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });

export const HTTP = {
  get: <T>(req: AxiosRequestConfig) =>
    request<T>({
      ...req,
      method: "GET",
    }),
  post: <T>(req: AxiosRequestConfig) =>
    request<T>({
      ...req,
      method: "POST",
    }),
  put: <T>(req: AxiosRequestConfig) =>
    request<T>({
      ...req,
      method: "PUT",
    }),
  del: <T>(req: AxiosRequestConfig) =>
    request<T>({
      ...req,
      method: "DELETE",
    }),
} as const;
