import axios, { AxiosRequestConfig } from "axios";

import { SERVER_URL } from "src/utils/constant";

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

export const getRequest = <T>(req: AxiosRequestConfig) =>
  request<T>({
    ...req,
    method: "GET",
  });
export const postRequest = <T>(req: AxiosRequestConfig) =>
  request<T>({
    ...req,
    method: "POST",
  });
export const putRequest = <T>(req: AxiosRequestConfig) =>
  request<T>({
    ...req,
    method: "PUT",
  });
export const delRequest = <T>(req: AxiosRequestConfig) =>
  request<T>({
    ...req,
    method: "DELETE",
  });
