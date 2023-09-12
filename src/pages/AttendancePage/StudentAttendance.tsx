import StudentAttendanceForm from "./components/StudentAttendanceForm";
import StudentAttendanceTable from "./components/StudentAttendanceTable";
import StudentAttendanceDetail from "./components/StudentAttendanceDetail";
import { useForm } from "react-hook-form";
import {
  studentAttendenceInterface,
  studentAttendenceSchema,
} from "../../types/form.schema";
import { yupResolver } from "@hookform/resolvers/yup";

function StudentAttendance() {
  const {
    handleSubmit: createStudentAttendance,
    register: registerStudentAttendance,
    reset: studentAttendanceFormReset,
    formState: { errors },
  } = useForm<studentAttendenceInterface>({
    resolver: yupResolver(studentAttendenceSchema),
  });

  const submitStudentAttendanceForm = (data: studentAttendenceInterface) => {
    console.log(data);
  };

  return (
    <>
      <StudentAttendanceForm
        handleSubmit={createStudentAttendance}
        register={registerStudentAttendance}
        submitHandler={submitStudentAttendanceForm}
        clearField={studentAttendanceFormReset}
        onClick={() => {}}
        errors={errors}
        isLoading={true}
      />

      {/* <StudentAttendanceTable /> */}

      {/* <StudentAttendanceDetail /> */}
    </>
  );
}

export default StudentAttendance;
