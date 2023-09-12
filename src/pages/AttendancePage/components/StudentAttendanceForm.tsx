import CustomBreadCrumb from "../../../components/Breadcrumb/CustomBreadcrumb";
import CustomForm from "../../../components/Form/CustomForm";
import CustomButton from "../../../components/Button/CustomButton";
import { InputFields } from "../../../constants/enum";
import CustomInput from "../../../components/Input/CustomInput";
import CustomSelect from "../../../components/Input/CustomSelect";
import {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormHandleSubmit,
} from "react-hook-form";
import { studentAttendenceInterface } from "../../../types/form.schema";
import { Link } from "react-router-dom";

type StudentAttendanceFormProps = {
  submitHandler: (data: studentAttendenceInterface) => void;
  register: UseFormRegister<studentAttendenceInterface>;
  handleSubmit: UseFormHandleSubmit<studentAttendenceInterface>;
  clearField: () => void;
  onClick: () => void;
  isLoading: boolean;
  errors?: FieldErrors<studentAttendenceInterface>;
};

const StudentAttendanceForm = ({
  onClick,
  submitHandler,
  register,
  handleSubmit,
  clearField,
  errors,
}: StudentAttendanceFormProps) => {
  const classOptions: Option[] = [
    { value: "", label: "Choose a Class" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const sectionOptions: Option[] = [
    { value: "", label: "Choose a Section" },
    { value: "rose", label: "rose" },
    { value: "mary", label: "mary" },
    { value: "daisy", label: "daisy" },
  ];

  return (
    <div className="flex flex-col w-full px-10">
      <CustomForm
        width={"full"}
        onSubmit={handleSubmit((data) => {
          const submitData = {
            ...data,
          };
          submitHandler(submitData);
        })}
      >
        <CustomBreadCrumb
          title="Attendance"
          list={[{ name: "Student Attendence", link: " " }]}
          className="py-8"
        />
        <div className="flex w-full pb-5 ">
          <div className="flex flex-col flex-grow h-full w-full bg-white rounded-md ">
            <div className="flex w-full h-20 border-b border-gray-400 items-center px-5 text-xl font-semibold text-primary ">
              Attendance Details
            </div>
            <div className="flex flex-col px-5 mt-5">
              <div className="font-medium text-gray-700">
                Student Attendance Information
              </div>

              <div className="flex flex-col justify-between md:flex-row gap-5 my-5">
                <div className=" flex flex-col gap-2 w-full">
                  <label className="after:content-['*'] after:text-red-700">
                    Class asd
                  </label>
                  <CustomSelect<UseFormRegisterReturn>
                    options={classOptions}
                    onChange={(event) => {}}
                    register={register("class")}
                  />
                  <label className="error">
                    {errors?.class == null ? "" : errors?.class.message}
                  </label>
                </div>
                <div className=" flex flex-col gap-2 w-full">
                  <label className="after:content-['*'] after:text-red-700">
                    Section
                  </label>
                  <CustomSelect<UseFormRegisterReturn>
                    options={sectionOptions}
                    onChange={(event) => {}}
                    register={register("section")}
                  />
                  <label className="error">
                    {errors?.section == null ? "" : errors?.section.message}
                  </label>
                </div>
                <div className=" flex flex-col gap-2 w-full">
                  <label> Date</label>
                  <CustomInput<UseFormRegisterReturn>
                    isValid={true}
                    type={InputFields.DATE}
                    register={{
                      ...register("date", { required: true }),
                    }}
                    placeholder=""
                  />
                  <label className="error">
                    {errors?.date == null ? "" : errors?.date.message}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end ">
          <div className="flex ">
            <Link to="class">
              <CustomButton text={"Submit"} />
            </Link>
          </div>
        </div>
      </CustomForm>
    </div>
  );
};

export default StudentAttendanceForm;
