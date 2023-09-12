import { api } from "../api/api";

const baseEnd = "/parent";

export const getParent = async () => {
  const response = await api.get<any>(`${baseEnd}/getParents`);
  return response.data;
};

export const editParent = async (id: string, data: any) => {
  const response = await api.put<any, any>(`${baseEnd}/update/${id}`, data);
  return response.data;
};

export const getSingleParent = async (id: string) => {
  const response = await api.get<any>(`${baseEnd}/details/${id}`);
  return response.data.parent;
};

export const deleteParent = async (id: string) => {
  const response = await api.delete<any>(`${baseEnd}/delete/${id}`);
  return response.data;
};

export const searchParent = async (name: string) => {
  const response = await api.get<any>(
    `${baseEnd}/getParents?name=${name}&show=5`
  );
  return response.data;
};
