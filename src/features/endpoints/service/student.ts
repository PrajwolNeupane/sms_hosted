import { addStudentInterface } from "../../../types/form.schema";
import { api } from "../api/api";

const baseEnd = "/student";

export const getStudent = async () => {
  const response = await api.get<any>(`${baseEnd}/getStudents`);
  return response.data;
};

export const addStudent = async (data: any) => {
  const response = await api.post<any, any>(
    `${baseEnd}/signup`,
    data
  );
  return response.data;
};
