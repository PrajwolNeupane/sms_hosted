import EditProfileForm from "./components/EditProfileForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  editSchoolProfileInterface,
  editSchoolProfileSchema,
} from "../../types/form.schema";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import axios, { AxiosError } from "axios";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useToast from "../../components/Toasts/CustomToast";
import { setUser } from "../../features/slices/auth";


function EditProfile() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit: editProfile,
    register: registerProfile,
    reset: profileFormReset,
    formState: { errors },
  } = useForm<editSchoolProfileInterface>({
    resolver: yupResolver(editSchoolProfileSchema),
    defaultValues: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_API_URL}/school/profile`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${
              localStorage.getItem("access_token") === undefined
                ? ""
                : localStorage.getItem("access_token")
            }`,
          },
        }
      );
      const date = new Date(response.data.data?.established);
      const formattedDate = date.toISOString().split("T")[0];
      return {
        ...response.data?.data,
        schoolName: response.data.data.name,
        phone: response.data.data.contact,
        postalCode: response.data.data.postal,
        date: formattedDate,
      };
    },
  });

  const submitProfileForm = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.schoolName);
    formData.append("contact", data.phone);
    formData.append("postal", data.postalCode || "");
    formData.append("established", data.date);
    formData.append("file", data.file);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("email", data.email);
    formData.append("description", data.description);
    const response = await axios.put(
      "http://api.shikshya.me:4000/school/profile",
      formData,
      {
        headers: {
          authorization: `Bearer ${
            localStorage.getItem("access_token") === undefined
              ? ""
              : localStorage.getItem("access_token")
          }`,
        },
      }
    );
    try {
      if (response.status === 200) {
        dispatch(setUser({ data: response.data.school }));
        useToast("School Profile Updated", false);
        setTimeout(() => {
          navigate("/profile");
        }, 1500);
      }
    } catch (err) {
      const error = err as AxiosError;
      if (error.response?.status === 401) {
        useToast("Invalid Credentials", true);
      }
      if (error.response?.status === 500) {
        useToast("Server Error", true);
      }
    }
  };


  return (
    <>
      <EditProfileForm
        handleSubmit={editProfile}
        register={registerProfile}
        submitHandler={submitProfileForm}
        clearField={() => {
          profileFormReset();
        }}
        isLoading={true}
        errors={errors}
        onClick={() => {}}
        profile={`${import.meta.env.VITE_REACT_API_URL}/${auth?.logo!}`}
      />
      <ToastContainer
        closeOnClick={true}
        pauseOnHover={true}
        autoClose={1000}
      />
    </>
  );
}

export default EditProfile;