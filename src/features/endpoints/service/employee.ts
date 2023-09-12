import { api } from "../api/api";

const baseEnd = "/employee";

export const getEmployee = async () => {
  const response = await api.get<any>(`${baseEnd}/`);
  return response.data;
};
