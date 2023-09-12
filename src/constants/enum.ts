export enum InputFields {
  TEXT = "text",
  PASS = "password",
  EMAIL = "email",
  NUMBER = "number",
  DATE = "date",
}
export enum ResponseType {
  SUCCESS = "Success",
  INVALID = "Invalid",
}
export const GenderOptions = [
  { value: "", label: "Choose a Gender" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];
export const CityOptions = [
  { value: "", label: "Choose a City" },
  { value: "Koshi", label: "Koshi" },
  { value: "Madhesh", label: "Madhesh" },
  { value: "Bagmati", label: "Bagmati" },
  { value: "Gandaki", label: "Gandaki" },
  { value: "Lumbini", label: "Lumbini" },
  { value: "Karnali", label: "Karnali" },
  { value: "Sudur Pashchim", label: "Sudur Pashchim" },
];

export const StateOptions = [
  { value: "", label: "Choose a State" },
  { value: "Koshi", label: "Koshi" },
  { value: "Madhesh", label: "Madhesh" },
  { value: "Bagmati", label: "Bagmati" },
  { value: "Gandaki", label: "Gandaki" },
  { value: "Lumbini", label: "Lumbini" },
  { value: "Karnali", label: "Karnali" },
  { value: "Sudur Pashchim", label: "Sudur Pashchim" },
];

export const ReligionOptions = [
  { value: "", label: "Choose a Religion" },
  { value: "Hindu", label: "Hindu" },
  { value: "Muslim", label: "Muslim" },
  { value: "Christian", label: "Christian" },
  { value: "Buddhism", label: "Buddhism" },
  { value: "Other", label: "Other" },
];

export const BloodGroupOptions = [
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

export const RelationOptions = [
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

export const QualificationOptions = [
  { value: "", label: "Choose a Qualification" },
  { value: "SEE", label: "SEE" },
  { value: "Bachelor", label: "Bachelor" },
  { value: "Master", label: "Master" },
  { value: "Phd", label: "Phd" },
];

export const JobOptions = [
  { value: "", label: "Choose a Job Type" },
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
];
