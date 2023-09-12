import {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";
import { useState, useEffect } from "react";
import CustomButton from "../../../components/Button/CustomButton";
import { CityOptions, GenderOptions, InputFields } from "../../../constants/enum";
import CustomInput from "../../../components/Input/CustomInput";
import { BiImageAdd } from "react-icons/bi";
import CustomForm from "../../../components/Form/CustomForm";
import CustomBreadCrumb from "../../../components/Breadcrumb/CustomBreadcrumb";
import { editParentInterface } from "../../../types/form.schema";
import CustomSelect from "../../../components/Input/CustomSelect";

type ProfileFormProps = {
  submitHandler: (data: editParentInterface) => void;
  register: UseFormRegister<editParentInterface>;
  handleSubmit: UseFormHandleSubmit<editParentInterface>;
  errors?: FieldErrors<editParentInterface>;
  isLoading: boolean;
  onClick: () => void;
  clearField: UseFormReset<editParentInterface>;
};

const EditParentForm = ({
  onClick,
  submitHandler,
  register,
  handleSubmit,
  clearField,
  errors,
}: //   profile,
ProfileFormProps) => {
  const [image, setImage] = useState<{
    profile: string | null;
    files: File | null;
  }>({
    profile: "",
    files: null,
  });

  //   useEffect(() => {  
  //     if (profile) {
  //       setImage({ ...image, profile: profile });
  //     }
  //   }, [profile]);

  const relationOptions: Option[] = [
    { value: "", label: "Relation" },
    { value: "Father", label: "Father" },
    { value: "Mother", label: "Mother" },
    { value: "Brother", label: "Brother" },
    { value: "Sister", label: "Sister" },
    { value: "Grandfather", label: "Grandfather" },
    { value: "Grandmother", label: "Grandmother" },
    { value: "Uncle", label: "Uncle" },
    { value: "Aunty", label: "Aunty" },
    { value: "Legal Gurdian", label: "Legal Gurdian" },
  ];

  const religionOptions: Option[] = [
    { value: "", label: "Choose a Religion" },
    { value: "Hindu", label: "Hindu" },
    { value: "Muslim", label: "Muslim" },
    { value: "Christian", label: "Christian" },
    { value: "Buddhism", label: "Buddhism" },
    { value: "Other", label: "Other" },
  ];

  const bloodGroupOptions: Option[] = [
    { value: "", label: "Choose a Blood Group" },
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];

  return (
    <>
      <div className="flex flex-col px-10 w-full">
        {/* Same as */}
        <CustomBreadCrumb
          title="Parent"
          list={[
            { name: "All Parent", link: "/parent" },
            { name: "Edit Parent", link: "" },
          ]}
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
                Parent Details
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
                        First Name
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={register("firstname")}
                        placeholder="Raymon"
                      />
                      <label className="error">
                        {errors?.firstname == null
                          ? ""
                          : errors?.firstname.message}
                      </label>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Middle Name
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={register("middlename")}
                        placeholder="Bikram"
                      />
                      <label className="error">
                        {errors?.middlename == null
                          ? ""
                          : errors?.middlename.message}
                      </label>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Last Name
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={register("lastname")}
                        placeholder="Basynet"
                      />
                      <label className="error">
                        {errors?.lastname == null
                          ? ""
                          : errors?.lastname.message}
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
                        type={InputFields.TEXT}
                        register={register("email")}
                        placeholder="raymon@gmail.com"
                      />
                      <label className="error">
                        {errors?.email == null ? "" : errors?.email.message}
                      </label>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <label className="after:content-['*'] after:text-red-700">
                        Parent ID
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={register("parentId")}
                        placeholder="HCP1"
                      />

                      <label className="error">
                        {errors?.parentId == null
                          ? ""
                          : errors.parentId.message}
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Phone
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.NUMBER}
                        register={register("contact")}
                        placeholder=" 1234567890"
                      />
                      <label className="error">
                        {errors?.contact == null ? "" : errors?.contact.message}
                      </label>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Occupation
                      </label>
                      <CustomInput<UseFormRegisterReturn>
                        isValid={true}
                        type={InputFields.TEXT}
                        register={register("occupation")}
                        placeholder="CEO"
                      />
                      <label className="error">
                        {errors?.occupation == null
                          ? ""
                          : errors?.occupation.message}
                      </label>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <label className="after:content-['*'] after:text-red-700">
                        Gender
                      </label>
                      <CustomSelect<UseFormRegisterReturn>
                        options={GenderOptions}
                        register={register("gender")}
                      />

                      <label className="error">
                        {errors?.gender == null ? "" : errors.gender.message}
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                    <div className="flex w-full flex-col gap-2">
                      <label className="after:content-['*'] after:text-red-700">
                        City
                      </label>
                      <CustomSelect<UseFormRegisterReturn>
                        options={CityOptions}
                        register={{
                          ...register("city"),
                        }}
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
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Religion
                      </label>
                      <CustomSelect<UseFormRegisterReturn>
                        options={religionOptions}
                        onChange={(event) => {}}
                        register={register("religion")}
                      />

                      <label className="error">
                        {errors?.religion == null
                          ? ""
                          : errors.religion.message}
                      </label>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Relation
                      </label>
                      <CustomSelect<UseFormRegisterReturn>
                        options={relationOptions}
                        onChange={(event) => {}}
                        register={register("relation")}
                      />

                      <label className="error">
                        {errors?.relation == null
                          ? ""
                          : errors.relation.message}
                      </label>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="after:content-['*'] after:text-red-700">
                        Blood Group
                      </label>
                      <CustomSelect<UseFormRegisterReturn>
                        options={bloodGroupOptions}
                        register={register("bloodGroup")}
                      />

                      <label className="error">
                        {errors?.bloodGroup == null
                          ? ""
                          : errors.bloodGroup.message}
                      </label>
                    </div>
                  </div>
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

export default EditParentForm;
