import { yupResolver } from "@hookform/resolvers/yup";
import {
  addEmployeeInterface,
  addEmployeeSchema,
} from "../../types/form.schema";
import EmployeeForm from "./components/EmployeeForm";
import { useForm } from "react-hook-form";

function AddEmployee() {
  const {
    handleSubmit: createEmployee,
    register: registerEmployee,
    reset: employeeFormReset,
    formState: { errors },
  } = useForm<addEmployeeInterface>({
    resolver: yupResolver(addEmployeeSchema),
  });

  const submitEmployeeForm = (data: addEmployeeInterface) => {
    console.log(data);
  };

  return (
    <>
      <EmployeeForm
        handleSubmit={createEmployee}
        register={registerEmployee}
        submitHandler={submitEmployeeForm}
        clearField={() => {
          employeeFormReset();
        }}
        isLoading={true}
        errors={errors}
        onClick={() => {}}
      />
    </>
  );
}

export default AddEmployee;
