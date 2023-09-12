import {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";
import { useState, useEffect } from "react";
import CustomButton from "../../../components/Button/CustomButton";
import { InputFields } from "../../../constants/enum";
import CustomInput from "../../../components/Input/CustomInput";
import { BiImageAdd } from "react-icons/bi";
import CustomForm from "../../../components/Form/CustomForm";
import CustomBreadCrumb from "../../../components/Breadcrumb/CustomBreadcrumb";
import CustomTextArea from "../../../components/Input/CustomTextArea";
import { editSchoolProfileInterface } from "../../../types/form.schema";

type ProfileFormProps = {
  submitHandler: (data: editSchoolProfileInterface) => void;
  register: UseFormRegister<editSchoolProfileInterface>;
  handleSubmit: UseFormHandleSubmit<editSchoolProfileInterface>;
  errors?: FieldErrors<editSchoolProfileInterface>;
  isLoading: boolean;
  onClick: () => void;
  clearField: UseFormReset<editSchoolProfileInterface>;
  profile: string | null;
};

const EditProfileForm = ({
  onClick,
  submitHandler,
  register,
  handleSubmit,
  clearField,
  errors,
  profile,
}: ProfileFormProps) => {

  const [image, setImage] = useState<{
    profile: string | null;
    files: File | null;
  }>({
    profile: profile ? profile : "",
    files: null,
  });

  useEffect(() => {
    if (profile) {
      setImage({ ...image, profile: profile });
    }
  }, [profile]);

  const genderOptions: Option[] = [
    { value: "gender", label: "Choose a Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const cityOptions: Option[] = [
    { value: "", label: "Choose a City" },
    { value: "koshi", label: "Koshi" },
    { value: "madhesh", label: "Madhesh" },
    { value: "bagmati", label: "Bagmati" },
    { value: "gandaki", label: "Gandaki" },
    { value: "lumbini", label: "Lumbini" },
    { value: "Karnali", label: "Karnali" },
    { value: "sudurPashchim", label: "Sudur Pashchim" },
  ];

  const stateOptions: Option[] = [
    { value: "", label: "Choose a State" },
    { value: "koshi", label: "Koshi" },
    { value: "madhesh", label: "Madhesh" },
    { value: "bagmati", label: "Bagmati" },
    { value: "gandaki", label: "Gandaki" },
    { value: "lumbini", label: "Lumbini" },
    { value: "Karnali", label: "Karnali" },
    { value: "sudurPashchim", label: "Sudur Pashchim" },
  ];

  return (
    <>
      <div className="flex flex-col px-10 w-full">
        {/* Same as */}
        <CustomBreadCrumb
          title="Admin"
          list={[{ name: "Edit", link: " " }]}
          className="py-8"
        />
        <div className="flex w-full pb-10">
          <CustomForm
            width={"full"}
            onSubmit={handleSubmit((data) => {
              const submitData = {
                ...data,
                file: image.files,
                profile: image.profile,
              };
              submitHandler(submitData);
            })}
          >
            <div className="bg-white flex flex-col w-full rounded-md">
              <div className="flex w-full h-20 border-b border-gray-400 items-center px-5 text-xl font-semibold text-primary">
                School Details
              </div>
              <div className="flex w-full flex-col p-5 gap-5">
                <div className="font-medium text-gray-700">
                  Basic Information
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex text-gray-500 after:content-['*'] after:text-red-700">
                    Logo
                  </div>
                  <div className="flex flex-col items-center md:items-start flex-grow w-full gap-5">
                    <div
                      className="relative p-1 flex items-center h-40 w-40 rounded-md bg-gray-400  group"
                      style={{
                        backgroundImage: `url(${
                          image.profile ? image.profile : ""
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="flex justify-center items-center rounded-md w-full h-full hover:bg-black hover:opacity-40">
                        <input
                          type={"file"}
                          accept="image/png, image/jpeg, image/jpg"
                          className="absolute opacity-0 w-full h-full rounded-md"
                          onChange={(e) => {
                            const file = e.target.files![0];
                            const fullPath = URL.createObjectURL(file);
                            setImage({ profile: fullPath, files: file });
                          }}
                        />
                        <BiImageAdd
                          className={
                            "invisible text-[35px] text-white group-hover:visible"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        School Name
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={register("schoolName")}
                        placeholder="Raymon School"
                      />
                      <label className="error">
                        {errors?.schoolName == null
                          ? ""
                          : errors?.schoolName.message}
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Email
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.EMAIL}
                        register={register("email")}
                        placeholder="info@school.edu.np"
                      />
                      <label className="error">
                        {errors?.email == null ? "" : errors?.email.message}
                      </label>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Phone
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.NUMBER}
                        register={register("phone")}
                        placeholder=" 1234567890"
                      />
                      <label className="error">
                        {errors?.phone == null ? "" : errors?.phone.message}
                      </label>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <label className="after:content-['*'] after:text-red-700">
                        Established Date
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.DATE}
                        register={{
                          ...register("date"),
                        }}
                        placeholder="234543"
                      />
                      <label className="error">
                        {errors?.date == null ? "" : errors?.date.message}
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                    <div className="flex w-full flex-col gap-2">
                      <label className="after:content-['*'] after:text-red-700">
                        City
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={{
                          ...register("city"),
                        }}
                        placeholder="ithari"
                      />
                      <label className="error">
                        {errors?.city == null ? "" : errors?.city.message}
                      </label>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <label className="after:content-['*'] after:text-red-700">
                        State
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={{
                          ...register("state"),
                        }}
                        placeholder="1"
                      />
                      <label className="error">
                        {errors?.state == null ? "" : errors?.state.message}
                      </label>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <label className="after:content-['*'] after:text-red-700">
                        Country
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={{
                          ...register("country"),
                        }}
                        placeholder="kathmandu"
                      />
                      <label className="error">
                        {errors?.country == null ? "" : errors?.country.message}
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                    <div className="flex w-1/4 flex-col gap-2">
                      <label>ZIP/Postal Code</label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.NUMBER}
                        register={{
                          ...register("postalCode"),
                        }}
                        placeholder="234543"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                    <div className="flex w-full flex-col gap-2">
                      <label className="after:content-['*'] after:text-red-700">
                        School Description
                      </label>
                      <CustomTextArea<UseFormRegisterReturn>
                        isValid={true}
                        rows={4}
                        register={{
                          ...register("description"),
                        }}
                        placeholder="Enter School Description......."
                      />
                      <label className="error">
                        {errors?.description == null
                          ? ""
                          : errors?.description.message}
                      </label>
                    </div>
                  </div>
                  {/* <div className="mt-10  text-primary border-b border-b-gray-400"></div>
                <span className="font-bold text-primary text-xl mt-5">
                  Account Information
                </span>
                <div className="flex flex-col justify-between md:flex-row gap-5 pt-5">
                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Password
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.PASS}
                      register={{
                        ...register("password", {
                          required: true,
                          minLength: { value: 8, message: "Invalid Length" },
                        }),
                      }}
                      placeholder=""
                    />
                  </div>
                  <div className="flex w-full  flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Confirm Password
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.PASS}
                      register={{
                        ...register("confirm", {
                          required: true,
                          minLength: { value: 8, message: "Invalid Length" },
                        }),
                      }}
                      placeholder=""
                    />
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end pt-5">
              <div className="flex gap-2">
                <CustomButton text={"Clear"} onClick={clearField} />
                <CustomButton text={"Submit"} />
              </div>
            </div>
          </CustomForm>
        </div>
      </div>
    </>
  );
};

export default EditProfileForm;