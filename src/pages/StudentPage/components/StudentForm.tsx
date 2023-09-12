import CustomButton from "../../../components/Button/CustomButton";
import { BiImageAdd } from "react-icons/bi";
import CustomForm from "../../../components/Form/CustomForm";
import CustomInput from "../../../components/Input/CustomInput";
import CustomSelect from "../../../components/Input/CustomSelect";
import {
  BloodGroupOptions,
  GenderOptions,
  InputFields,
  RelationOptions,
  ReligionOptions,
  StateOptions,
} from "../../../constants/enum";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { useState } from "react";

import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormReset,
  UseFormSetValue,
} from "react-hook-form";
import CustomBreadCrumb from "../../../components/Breadcrumb/CustomBreadcrumb";
import { addStudentInterface } from "../../../types/form.schema";

type StudentFormProps = {
  submitHandler: (data: addStudentInterface) => void;
  register: UseFormRegister<addStudentInterface>;
  handleSubmit: UseFormHandleSubmit<addStudentInterface, undefined>;
  errors?: FieldErrors<addStudentInterface>;
  isLoading: boolean;
  onClick: () => void;
  setValue: UseFormSetValue<addStudentInterface>;
  clearField: UseFormReset<addStudentInterface>;
  searchHandler: (e: any) => void;
  parentData: any;
  selectParent: (data: any) => void;
  selectedParent: any;
};

const StudentForm = ({
  onClick,
  submitHandler,
  register,
  handleSubmit,
  clearField,
  setValue,
  parentData,
  selectParent,
  selectedParent,
  searchHandler,
  errors,
}: StudentFormProps) => {
  const [profile, setProfile] = useState<string | null>(null);
  const [files, setFiles] = useState<File | null>(null);

  return (
    <div className="flex flex-col px-10 w-full">
      <CustomBreadCrumb
        title="Student"
        list={[{ name: "Add Student", link: " " }]}
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
              Student Details
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

                {/* form starts here  */}
                <div className="flex flex-col justify-between md:flex-row gap-5">
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
                        : errors?.firstname.message}
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
                      register={{
                        ...register("lastname"),
                      }}
                      placeholder="Basnyat"
                    />
                    <label className="error">
                      {errors?.lastname == null ? "" : errors?.lastname.message}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Email Address
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.EMAIL}
                      register={{
                        ...register("email"),
                      }}
                      placeholder="basnetraymonn@gmail.com"
                    />
                    <label className="error">
                      {errors?.email == null ? "" : errors?.email.message}
                    </label>
                  </div>

                  <div className="flex w-full  flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Contact
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.NUMBER}
                      register={{
                        ...register("contact"),
                      }}
                      placeholder="9803822743"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Date of Birth
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.DATE}
                      register={{
                        ...register("birthDate"),
                      }}
                      placeholder="YYYY-MM-DD"
                    />
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
                      {errors?.country == null ? "" : errors?.country.message}
                    </label>
                  </div>

                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      State
                    </label>
                    <CustomSelect<UseFormRegisterReturn>
                      options={StateOptions}
                      register={{
                        ...register("state"),
                      }}
                    />
                    <label className="error">
                      {errors?.state == null ? "" : errors?.state.message}
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
                      {errors?.city == null ? "" : errors?.city.message}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col justify-between md:flex-row gap-5 pt-5">
                  <div className="flex w-full flex-col gap-2 ">
                    <label> Zip/Postal Code </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.NUMBER}
                      register={{
                        ...register("postalCode"),
                      }}
                      placeholder="46600"
                    />
                    <label className="error">
                      {errors?.postalCode == null
                        ? ""
                        : errors?.postalCode.message}
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Religion
                    </label>
                    <CustomSelect<UseFormRegisterReturn>
                      options={ReligionOptions}
                      register={{ ...register("religion") }}
                    />
                    <label className="error">
                      {errors?.religion == null ? "" : errors?.religion.message}
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
                        : errors?.bloodGroup.message}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col justify-between md:flex-row gap-5 pt-5">
                  <div className="flex w-[49%] flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Gender
                    </label>
                    <CustomSelect<UseFormRegisterReturn>
                      options={GenderOptions}
                      register={register("gender")}
                    />
                    <label className="error">
                      {errors?.gender == null ? "" : errors?.gender.message}
                    </label>
                  </div>
                  <div className="flex w-full flex-col gap-2  ">
                    <label> Medical Condition (if any) </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("medicalCondition"),
                      }}
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="mt-10  text-primary border-b border-b-gray-400"></div>
                {/* another setion  */}
                <span className="font-bold text-primary text-xl mt-5">
                  Academic Information
                </span>
                <div className="flex flex-col justify-between md:flex-row gap-5 pt-5">
                  <div className="flex w-full flex-col gap-2">
                    <label> Student Id </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("studentId"),
                      }}
                      placeholder="1234214"
                    />
                    <label className="error">
                      {errors?.studentId == null
                        ? ""
                        : errors?.studentId.message}
                    </label>
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Date of Admission
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.DATE}
                      register={{
                        ...register("admissionDate"),
                      }}
                      placeholder="YYYY-MM-DD"
                    />
                    <label className="error">
                      {errors?.admissionDate == null
                        ? ""
                        : errors?.admissionDate.message}
                    </label>
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <label className="after:content-['*'] after:text-red-700">
                      Academic Year
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("academicYear"),
                      }}
                      placeholder="2023"
                    />
                    <label className="error">
                      {errors?.academicYear == null
                        ? ""
                        : errors?.academicYear.message}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Class
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("class"),
                      }}
                      placeholder="10"
                    />
                    <label className="error">
                      {errors?.class == null ? "" : errors?.class.message}
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="after:content-['*'] after:text-red-700">
                      Section
                    </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("section"),
                      }}
                      placeholder="lotus"
                    />
                    <label className="error">
                      {errors?.section == null ? "" : errors?.section.message}
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label> Roll Number </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("rollno"),
                      }}
                      placeholder="1"
                    />
                    <label className="error">
                      {errors?.rollno == null ? "" : errors?.rollno.message}
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
                    <label> Student Username </label>
                    <CustomInput<UseFormRegisterReturn>
                      isValid={true}
                      type={InputFields.TEXT}
                      register={{
                        ...register("studentUsername"),
                      }}
                      placeholder="raymon"
                    />
                    <label className="error">
                      {errors?.studentUsername == null
                        ? ""
                        : errors?.studentUsername.message}
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
                      {errors?.password == null ? "" : errors?.password.message}
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
                      {errors?.confirm == null ? "" : errors?.confirm.message}
                    </label>
                  </div>
                </div>
                <span className="font-bold text-primary text-xl mt-8">
                  Parents/Gurdian Information
                </span>
                <div className="my-5 text-primary border-b border-b-gray-400"></div>
                <div className="flex flex-col w-2/5 bg-gray-200 rounded-md">
                  <div className="flex w-full gap-5 items-center justify-center px-3">
                    <SearchIcon color="#24394d" height="25" width="25" />
                    <input
                      className="flex flex-grow bg-transparent h-12 text-md focus:outline-none outline-none"
                      placeholder="Search your Parent here"
                      onChange={(e) => {
                        searchHandler(e);
                      }}
                    />
                  </div>
                  {parentData?.length != 0 ? (
                    <div className="flex flex-col items-start pb-3 gap-3">
                      <h4 className="font-medium text-primary text-[18px] mt-8 px-3">
                        Parent List
                      </h4>
                      {parentData?.map((curr: any, indx: number) => (
                        <div
                          key={indx}
                          className="flex gap-3 p-3 cursor-pointer hover:bg-primary w-full hover:text-gray-100"
                          onClick={() => {
                            selectParent(curr);
                          }}
                        >
                          <img
                            src={`${import.meta.env.VITE_REACT_API_URL}/${
                              curr?.profile
                            }`}
                            className="aspect-square w-[50px] rounded-full object-cover"
                          />
                          <div className="flex flex-col">
                            <h4>
                              {curr?.firstname +
                                " " +
                                curr?.middlename +
                                " " +
                                curr?.lastname}
                            </h4>
                            <h4>{curr?.email}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <label className="error">
                  {errors?.parentId == null ? "" : errors?.parentId.message}
                </label>
                {selectedParent && (
                  <>
                    <span className="font-bold text-primary text-xl mt-8">
                      Basic Information
                    </span>
                    <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                      <div className="flex flex-col gap-2 w-full">
                        <label className="after:content-['*'] after:text-red-700">
                          First Name
                        </label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          type={InputFields.TEXT}
                          disable={true}
                          placeholder="Raymon"
                          value={selectedParent?.firstname}
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <label> Middle Name </label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          disable={true}
                          type={InputFields.TEXT}
                          value={selectedParent?.middlename}
                          placeholder="Bikram"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <label className="after:content-['*'] after:text-red-700">
                          Last Name
                        </label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          disable={true}
                          type={InputFields.TEXT}
                          value={selectedParent?.lastname}
                          placeholder="Basnyat"
                        />
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
                          disable={true}
                          value={selectedParent?.contact}
                          placeholder="9817735539"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <label className="after:content-['*'] after:text-red-700">
                          Email Address
                        </label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          disable={true}
                          type={InputFields.EMAIL}
                          value={selectedParent?.email}
                          placeholder=" Raymon@gmail.com"
                        />
                        <label className="error">
                          {errors?.parentEmail == null
                            ? ""
                            : errors?.parentEmail.message}
                        </label>
                      </div>
                      <div className="flex w-full flex-col gap-2">
                        <label>Parent Id </label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          disable={true}
                          type={InputFields.TEXT}
                          value={selectedParent?.id}
                          placeholder="234543"
                          register={{ ...register("parentId") }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                      <div className="flex flex-col gap-2 w-full">
                        <label className="after:content-['*'] after:text-red-700">
                          Country
                        </label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          disable={true}
                          type={InputFields.TEXT}
                          value={selectedParent?.country}
                          placeholder="nepal"
                        />
                        <label className="error">
                          {errors?.parentCountry == null
                            ? ""
                            : errors?.parentCountry.message}
                        </label>
                      </div>
                      <div className="flex w-full flex-col gap-2">
                        <label className="after:content-['*'] after:text-red-700">
                          State
                        </label>
                        <CustomSelect<UseFormRegisterReturn>
                          disable={true}
                          options={StateOptions}
                          value={selectedParent?.state}
                        />
                      </div>
                      <div className="flex w-full flex-col gap-2">
                        <label className="after:content-['*'] after:text-red-700">
                          City
                        </label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          disable={true}
                          type={InputFields.TEXT}
                          value={selectedParent?.city}
                          placeholder="kathmandu"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                      <div className="flex w-full flex-col gap-2">
                        <label>ZIP/Postal Code</label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          disable={true}
                          type={InputFields.NUMBER}
                          value={selectedParent?.postal}
                          placeholder="234543"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <label className="after:content-['*'] after:text-red-700">
                          Religion
                        </label>
                        <CustomSelect<UseFormRegisterReturn>
                          disable={true}
                          options={ReligionOptions}
                          value={selectedParent?.religion}
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <label className="after:content-['*'] after:text-red-700">
                          Blood Group
                        </label>
                        <CustomSelect<UseFormRegisterReturn>
                          options={BloodGroupOptions}
                          disable={true}
                          value={selectedParent?.blood}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between md:flex-row gap-5 mt-5">
                      <div className="flex w-full flex-col gap-2">
                        <label className="after:content-['*'] after:text-red-700">
                          Gender
                        </label>
                        <CustomSelect<UseFormRegisterReturn>
                          options={GenderOptions}
                          disable={true}
                          value={selectedParent?.gender}
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <label className="after:content-['*'] after:text-red-700">
                          Relation
                        </label>
                        <CustomSelect<UseFormRegisterReturn>
                          options={RelationOptions}
                          disable={true}
                          value={selectedParent?.relation}
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <label className="after:content-['*'] after:text-red-700">
                          Occupation
                        </label>
                        <CustomInput<UseFormRegisterReturn>
                          isValid={true}
                          type={InputFields.TEXT}
                          disable={true}
                          value={selectedParent?.occupation}
                          placeholder="CEO"
                        />
                      </div>
                    </div>
                  </>
                )}
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

export default StudentForm;
