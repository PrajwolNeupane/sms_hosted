import { api } from "../api/api";

const baseEnd = "/school";

export const useLogin = async (body: LoginForm) => {
  const response = await api.post<any, LoginForm>(`${baseEnd}/signin`, body);
  return response.data;
};

export const useGetProfile = async () => {

  const response = await api.get<any>(
    `${baseEnd}/profile`,
  );

  return response.data;
};
