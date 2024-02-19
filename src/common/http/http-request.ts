import { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { createAxiosInstance } from './http-client';

export const axiosClient = createAxiosInstance();

const interceptors = {
  onRequest: async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    return config;
  },
  onRequestError: (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
  onResponse: (response: AxiosResponse): AxiosResponse => response,
  onResponseError: async (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
};

axiosClient.interceptors.request.use(interceptors.onRequest, interceptors.onRequestError);
axiosClient.interceptors.response.use(interceptors.onResponse, interceptors.onResponseError);

export async function get<T>(url: string, options?: AxiosRequestConfig) {
  return axiosClient.get<T>(url, options);
}

export async function post<T>(url: string, data: unknown, options?: AxiosRequestConfig) {
  return axiosClient.post<T>(url, data, options);
}

export async function put<T>(id: string, data: unknown, options?: AxiosRequestConfig) {
  return axiosClient.put<T>(id, data, options);
}

export async function patch<T>(id: string, data: unknown, options?: AxiosRequestConfig) {
  return axiosClient.patch<T>(id, data, options);
}

export async function destroy<T>(id: string, options?: AxiosRequestConfig) {
  return axiosClient.delete<T>(id, options);
}

const HttpRequest = { get, post, put, patch, destroy };

export default HttpRequest;
