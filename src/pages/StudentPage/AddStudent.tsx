import { yupResolver } from "@hookform/resolvers/yup";
import { addStudentInterface, addStudentSchema } from "../../types/form.schema";
import StudentForm from "./components/StudentForm";
import { useForm } from "react-hook-form";
import { searchParent } from "../../features/endpoints/service/parent";
import { useCallback, useState } from "react";
import { addStudent } from "../../features/endpoints/service/student";
import { useAppSelector } from "../../features/hooks";

const AddStudent = () => {
  const auth = useAppSelector((state) => state.auth);
  const {
    handleSubmit: createStudent,
    register: registerStudent,
    reset: studentFormReset,
    formState: { errors },
    setValue,
  } = useForm<addStudentInterface>({
    resolver: yupResolver(addStudentSchema),
  });

  const submitStudentForm = async (data: any) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    if (data.middlename) {
      formData.append("middlename", data.middlename);
    }
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("file", data.file);
    formData.append("contact", `${data.contact}`);
    formData.append("dob", new Date(data.birthDate).toISOString());
    formData.append("country", data.country);
    formData.append("state", data.state);
    formData.append("city", data.city);
    if (data.postalCode) {
      formData.append("postal", data.postalCode);
    }
    formData.append("religion", data.religion);
    formData.append("blood", data.bloodGroup);
    formData.append("gender", data.gender);
    if (data.medicalCondition) {
      formData.append("medical_condition", data.medicalCondition);
    }
    formData.append("student_id", data.studentId);
    formData.append("admission", new Date(data.admissionDate).toISOString());
    formData.append("academic", new Date(data.academicYear).toISOString());
    formData.append("class", data.class);
    formData.append("section", data.section);
    formData.append("rollno", data.rollno);
    formData.append("studentUsername", data.studentUsername);
    formData.append("password", data.password!);
    formData.append("parent_id", data.parentId);
    formData.append("address", "Naxal");
    formData.append("level_id", "1");
    formData.append("school_id", auth._id!);
    console.log(data);
    try {
      const response = await addStudent(formData);
      alert("Form Submmited");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const [parentData, setParentData] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);

  const parentSearchHandler = useCallback((e: any) => {
    setTimeout(async () => {
      try {
        if (e.target.value != "") {
          const response = await searchParent(e.target.value);
          setParentData(response.parents);
          console.log(parentData);
        } else {
          setParentData([]);
        }
      } catch (e) {
        console.log(e);
      }
    }, 500);
  }, []);

  const selectParent = useCallback((data: any) => {
    setSelectedParent(data);
    setValue("parentId", data.id);
  }, []);

  return (
    <>
      <StudentForm
        searchHandler={parentSearchHandler}
        handleSubmit={createStudent}
        register={registerStudent}
        submitHandler={submitStudentForm}
        clearField={() => {
          studentFormReset();
        }}
        setValue={setValue}
        isLoading={true}
        onClick={() => {}}
        errors={errors}
        parentData={parentData}
        selectParent={selectParent}
        selectedParent={selectedParent}
      />
    </>
  );
};

export default AddStudent;
