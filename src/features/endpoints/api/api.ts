import instance from "../baseUrl";

export const api = {
  get: <T>(endpoint: string, params?: object, headers?: object) =>
    instance.get<T>(endpoint, { params, headers, withCredentials: true }),
  post: <T, S>(endpoint: string, body: S, headers?: object) =>
    instance.post<T>(endpoint, body, {
      headers,
      withCredentials: true,
    }),
  put: <T, S>(endpoint: string, body: S, headers?: object) =>
    instance.put<T>(endpoint, body, {
      headers,
      withCredentials: true,
    }),
  delete: <T>(endpoint: string, headers?: object) =>
    instance.delete<T>(endpoint, { headers, withCredentials: true }),
};
