import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormReset,
} from "react-hook-form";
import { useState } from "react";
import CustomButton from "../../../components/Button/CustomButton";
import {
  BloodGroupOptions,
  GenderOptions,
  InputFields,
  RelationOptions,
  ReligionOptions,
  StateOptions,
} from "../../../constants/enum";
import CustomSelect from "../../../components/Input/CustomSelect";
import CustomInput from "../../../components/Input/CustomInput";
import { BiImageAdd } from "react-icons/bi";
import CustomForm from "../../../components/Form/CustomForm";
import CustomBreadCrumb from "../../../components/Breadcrumb/CustomBreadcrumb";
import { addParentInterface } from "../../../types/form.schema";

type ParentFormProps = {
  submitHandler: (data: addParentInterface) => void;
  register: UseFormRegister<addParentInterface>;
  handleSubmit: UseFormHandleSubmit<addParentInterface, undefined>;
  errors?: FieldErrors<addParentInterface>;
  isLoading: boolean;
  onClick: () => void;
  clearField: UseFormReset<addParentInterface>;
};

const ParentForm = ({
  onClick,
  submitHandler,
  register,
  handleSubmit,
  clearField,
  errors,
}: ParentFormProps) => {
  const [profile, setProfile] = useState<string | null>(null);
  const [files, setFiles] = useState<File | null>(null);

  return (
    <div className="flex flex-col px-10 w-full">
      <CustomBreadCrumb
        title="Parent"
        list={[{ name: "Add Parent", link: " " }]}
        className="py-8"
      />
      <div className="flex w-full pb-10">
        <CustomForm
          width={"full"}
          onSubmit={handleSubmit((data) => {
            const submitData = {
              ...data,
              file: files,
              profile: profile,
            };
            submitHandler(submitData);
          })}
        >
          <div className="bg-white flex flex-col w-full rounded-md">
            <div className="flex w-full h-20 border-b border-gray-400 items-center px-5 text-xl font-semibold text-primary">
              Parents / Guardian Details
            </div>
            <div className="flex w-full flex-col p-5 gap-5">
              <div className="font-medium text-gray-700">Basic Information</div>
              <div className="flex flex-col gap-2">
                <div className="flex text-gray-500 after:content-['*'] after:text-red-700">
                  Photo
                </div>
                <div className="flex flex-col items-center md:items-start flex-grow w-full gap-5">
                  <div
                    className="relative p-1 flex items-center h-40 w-40 rounded-md bg-gray-400  group"
                    style={{
                      backgroundImage: `url(${profile ? profile : ""})`,
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
                          console.log(file);
                          setProfile(fullPath);
                          setFiles(file);
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
                      register={{
                        ...register("firstname"),
                      }}
                      placeholder="Raymon"
                    />
                    <label className="error">
                      {errors?.firstname == null
                        ? ""
                        : errors.firstname.message}
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label> Middle Name </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("middlename"),
                      }}
                      placeholder="Bikram"
                    />
                    <label className="error">
                      {errors?.middlename == null
                        ? ""
                        : errors.middlename.message}
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Last Name
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("lastname"),
                      }}
                      placeholder="Basnyat"
                    />
                    <label className="error">
                      {errors?.lastname == null ? "" : errors.lastname.message}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col justify-between md:flex-row gap-5 mt-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Contact Information
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.NUMBER}
                      register={{
                        ...register("contact"),
                      }}
                      placeholder="9817735539"
                    />
                    <label className="error">
                      {errors?.contact == null ? "" : errors.contact.message}
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Email Address
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.EMAIL}
                      register={{
                        ...register("email"),
                      }}
                      placeholder=" Raymon@gmail.com"
                    />
                    <label className="error">
                      {errors?.email == null ? "" : errors.email.message}
                    </label>
                  </div>

                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Parent Id
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("parentId"),
                      }}
                      placeholder="234543"
                    />
                    <label className="error">
                      {errors?.parentId == null ? "" : errors.parentId.message}
                    </label>
                  </div>
                </div>
                <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Country
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("country"),
                      }}
                      placeholder="nepal"
                    />
                    <label className="error">
                      {errors?.country == null ? "" : errors.country.message}
                    </label>
                  </div>

                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      State
                    </label>
                    <CustomSelect<UseFormRegisterReturn>
                      options={StateOptions}
                      register={register("state")}
                    />
                    <label className="error">
                      {errors?.state == null ? "" : errors.state.message}
                    </label>
                  </div>
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
                      placeholder="kathmandu"
                    />
                    <label className="error">
                      {errors?.city == null ? "" : errors.city.message}
                    </label>
                  </div>
                </div>
                <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                  <div className="flex w-full flex-col gap-2">
                    <label>ZIP/Postal Code</label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.NUMBER}
                      register={{
                        ...register("postalCode"),
                      }}
                      placeholder="234543"
                    />
                    <label className="error">
                      {errors?.postalCode == null
                        ? ""
                        : errors.postalCode.message}
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Religion
                    </label>
                    <CustomSelect<UseFormRegisterReturn>
                      options={ReligionOptions}
                      register={register("religion")}
                    />

                    <label className="error">
                      {errors?.religion == null ? "" : errors.religion.message}
                    </label>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Blood Group
                    </label>
                    <CustomSelect<UseFormRegisterReturn>
                      options={BloodGroupOptions}
                      register={register("bloodGroup")}
                    />

                    <label className="error">
                      {errors?.bloodGroup == null
                        ? ""
                        : errors.bloodGroup.message}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
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
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Relation
                    </label>
                    <CustomSelect<UseFormRegisterReturn>
                      options={RelationOptions}
                      register={register("relation")}
                    />

                    <label className="error">
                      {errors?.relation == null ? "" : errors.relation.message}
                    </label>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Occupation
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("occupation"),
                      }}
                      placeholder="CEO"
                    />
                    <label className="error">
                      {errors?.occupation == null
                        ? ""
                        : errors.occupation.message}
                    </label>
                  </div>
                </div>

                <div className="mt-10  text-primary border-b border-b-gray-400"></div>

                {/* another section */}
                <span className="font-bold text-primary text-xl mt-5">
                  Account Information
                </span>

                <div className="flex flex-col justify-between md:flex-row gap-5 pt-5">
                  <div className="flex w-full flex-col gap-2">
                    <label> Parent Username </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("parentUsername"),
                      }}
                      placeholder="raymon"
                    />
                    <label className="error">
                      {errors?.parentUsername == null
                        ? ""
                        : errors.parentUsername.message}
                    </label>
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Password
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.PASS}
                      register={{
                        ...register("password"),
                      }}
                      placeholder=""
                    />
                    <label className="error">
                      {errors?.password == null ? "" : errors.password.message}
                    </label>
                  </div>
                  <div className="flex w-full  flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Confirm Password
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.PASS}
                      register={{
                        ...register("confirm"),
                      }}
                      placeholder=""
                    />
                    <label className="error">
                      {errors?.confirm == null ? "" : errors.confirm.message}
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
  );
};

export default ParentForm;
