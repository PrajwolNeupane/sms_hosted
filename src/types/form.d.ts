type LoginForm = {
  email: String;
  password: String;
};

type ForgotForm = {
  email: String;
};

type SearchForm = {
  search: String;
};

type ParentForm = {
  firstname: String;
  middlename: String;
  lastname: String;
  email: String;
  contact: String;
  occupation: String;
  gender: String;
  city: String;
  country: String;
  state: String;
  parentId: String;
  relation: String;
  bloodGroup: String;
  religion: String;
  postalCode: String;
  relation: String;
  password: String;
  confirm: String;
  parentUsername: String;
};

type StudentFormType = {
  firstname: String;
  middlename: String;
  lastname: String;
  email: String;
  contact: String;
  gender: String;
  admissionDate: Date;
  class: String;
  birthDate: Date;
  rollNo: String;
  section: String;
  studentUsername: String;
  medicalCondition: String;
  password: String;
  confirm: String;
  parentFirstname: String;
  parentMiddlename: String;
  parentLastname: String;
  parentOccupation: String;
  parentContactInformation: String;
  parentId: String;
  city: String;
  state: String;
  country: String;
  religion: String;
  bloodGroup: String;
  studentId: String;
  academicYear: String;
  relation: String;
  postalCode: String;
  realtion: String;
};

type EmployeeForm = {
  firstname: String;
  middlename: String;
  lastname: String;
  contact: String;
  email: String;
  qualification: String;
  city: String;
  country: String;
  state: String;
  employeeId: String;
  gender: String;
  religion: String;
  postalCode: String;
  jobType: String;
  jobTitle: String;
  bloodGroup: String;
  password: String;
  confirm: String;
  employeeUsername: String;
};

type SchoolForm = {
  schoolName: string;
  email: string;
  phone: string;
  date: string;
  city: string;
  state: string;
  country: string;
  postalCode: string ;
  description: string;
};

type StudentAttendanceForm = {
  date: Date;
  class: String;
  section: String;
};

type EmployeeAttendanceForm = {
  name: String;
  jobTitle: String;
  date: Date;
};
