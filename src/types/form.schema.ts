import * as y from "yup";
import YupPassword from "yup-password";
YupPassword(y);

//Login
export const loginSchema = y.object({
  email: y
    .string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: y.string().required("Please enter password"),
});

export type loginSchemaInterface = y.InferType<typeof loginSchema>;

//Forgot Password
export const forgetPasswordSchema = y.object({
  email: y
    .string()
    .email("Please enter valid email")
    .required("Please enter email"),
});

export type forgetPasswordSchemaInterface = y.InferType<
  typeof forgetPasswordSchema
>;

//Edit School Profile
export const editSchoolProfileSchema = y.object({
  schoolName: y.string().required("Please enter school name"),
  email: y
    .string()
    .email("Please enter valid email")
    .required("Please enter email"),
  phone: y.string().required("Please enter phone numbers"),
  date: y.string().required("Please enter date"),
  city: y.string().required("Please enter city"),
  state: y.string().required("Please enter state"),
  country: y.string().required("Please enter country"),
  postalCode: y.string(),
  description: y.string().required("Please enter school description"),
});

export type editSchoolProfileInterface = y.InferType<
  typeof editSchoolProfileSchema
>;

//Add Student
export const addStudentSchema = y.object({
  firstname: y.string().required("Please enter firstname"),
  middlename: y.string(),
  lastname: y.string().required("Please enter lastname"),
  email: y
    .string()
    .email("Please enter valid email")
    .required("Please enter email"),
  contact: y.number().required("Please enter contact number"),
  birthDate: y.string().required("Please enter brith date"),
  country: y.string().required("Please enter country"),
  state: y.string().required("Please enter state"),
  city: y.string().required("Please enter city"),
  postalCode: y.string(),
  religion: y.string().required("Please enter religion"),
  bloodGroup: y.string().required("Please enter blood group"),
  gender: y.string().required("Please select gender"),
  medicalCondition: y.string(),
  //Academic Information
  studentId: y.string().required("Please enter studentId"),
  admissionDate: y.string().required("Please enter admission date"),
  academicYear: y.string().required("Please enter academic year"),
  class: y.string().required("Please enter class"),
  section: y.string().required("Please enter section"),
  rollno: y.string().required("Please enter roll number"),
  //Account Information
  studentUsername: y.string().required("Please enter student username"),
  password: y
    .string()
    .required()
    .min(8, "Password length must be greater than 8")
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character"),
  confirm: y
    .string()
    .required()
    .oneOf([y.ref("password")], "Password must match")
    .required("Please enter confirm password"),
  parentId: y.string().required("Please set Parent ID"),
});

export type addStudentInterface = y.InferType<typeof addStudentSchema>;

//Add Parent Schema
export const addParentSchema = y.object({
  firstname: y.string().required("Please enter firstname"),
  middlename: y.string(),
  lastname: y.string().required("Please enter lastname"),
  contact: y.string().required("Please enter contact number"),
  email: y
    .string()
    .email("Please enter valid email")
    .required("Please enter email"),
  parentId: y.string().required("Please enter parent id"),
  country: y.string().required("Please enter country"),
  state: y.string().required("Please enter state"),
  city: y.string().required("Please enter city"),
  postalCode: y.string(),
  religion: y.string().required("Please enter religion"),
  bloodGroup: y.string().required("Please enter blood group"),
  gender: y.string().required("Please select gender"),
  relation: y.string().required("Please enter relation status"),
  occupation: y.string().required("Please enter parent occupation"),
  parentUsername: y.string().required("Please enter parent user name"),
  password: y
    .string()
    .min(8, "Password length must be greater than 8")
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character"),
  confirm: y
    .string()
    .oneOf([y.ref("password")], "Password must match")
    .required("Please enter confirm password"),
});

export type addParentInterface = y.InferType<typeof addParentSchema>;

//Edit Parent Schema
export const editParentSchema = y.object({
  firstname: y.string().required("Please enter firstname"),
  middlename: y.string(),
  lastname: y.string().required("Please enter lastname"),
  email: y
    .string()
    .email("Please enter valid email")
    .required("Please enter email"),
  parentId: y.string().required("Please enter parent id"),
  contact: y.string().required("Please enter contact number"),
  country: y.string().required("Please enter country"),
  state: y.string().required("Please enter state"),
  city: y.string().required("Please enter city"),
  religion: y.string().required("Please enter religion"),
  bloodGroup: y.string().required("Please enter blood group"),
  gender: y.string().required("Please select gender"),
  relation: y.string().required("Please enter relation status"),
  occupation: y.string().required("Please enter parent occupation"),
});

export type editParentInterface = y.InferType<typeof editParentSchema>;

//Add Employee Schema
export const addEmployeeSchema = y.object({
  firstname: y.string().required("Please enter firstname"),
  middlename: y.string(),
  lastname: y.string().required("Please enter lastname"),
  contact: y.string().required("Please enter contact number"),
  email: y
    .string()
    .email("Please enter valid email")
    .required("Please enter email"),
  employeeId: y.string().required("Please enter parent id"),
  country: y.string().required("Please enter country"),
  state: y.string().required("Please enter state"),
  city: y.string().required("Please enter city"),
  postalCode: y.string(),
  religion: y.string().required("Please enter religion"),
  bloodGroup: y.string().required("Please enter blood group"),
  gender: y.string().required("Please select gender"),
  jobType: y.string().required("Please select job type"),
  jobTitle: y.string().required("Please enter job title"),
  qualification: y.string().required("Please enter qualification"),
  employeeUsername: y.string().required("Please enter employee user name"),
  password: y
    .string()
    .min(8, "Password length must be greater than 8")
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character"),
  confirm: y
    .string()
    .oneOf([y.ref("password")], "Password must match")
    .required("Please enter confirm password"),
});

export type addEmployeeInterface = y.InferType<typeof addEmployeeSchema>;

//Student Attendence Schema
export const studentAttendenceSchema = y.object({
  class: y.string().required("Please enter the class"),
  section: y.string().required("Please enter the section"),
  date: y.string().required("Please enter date"),
});

export type studentAttendenceInterface = y.InferType<
  typeof studentAttendenceSchema
>;
