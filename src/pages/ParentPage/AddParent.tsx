import { yupResolver } from "@hookform/resolvers/yup";
import { addParentInterface, addParentSchema } from "../../types/form.schema";
import ParentForm from "./component/ParentForm";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import useToast from "../../components/Toasts/CustomToast";
import { useNavigate } from "react-router-dom";

function AddParent() {
  const navigate = useNavigate();

  const {
    handleSubmit: createParent,
    register: registerParent,
    reset: parentFormReset,
    formState: { errors },
  } = useForm<addParentInterface>({
    resolver: yupResolver(addParentSchema),
  });

  const submitParentForm = async (data: any) => {
    console.log(data);
    const formData = new FormData();
    formData.append("address","Kathmandu");
    formData.append("firstname", data.firstname);
    formData.append("middlename", data.middlename);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
    formData.append("parent_id", data.parentId);
    formData.append("file", data.file);
    formData.append("country", data.country);
    formData.append("state", data.state);
    formData.append("city", data.city);
    formData.append("postal", data.postalCode);
    formData.append("religion", data.religion);
    formData.append("blood", data.bloodGroup);
    formData.append("gender", data.gender);
    formData.append("relation", data.relation);
    formData.append("occupation", data.occupation);
    formData.append("parentUsername", data.parentUsername);
    formData.append("password", data.password);
    formData.append("confirm", data.confirm);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_API_URL}/parent/signup`,
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
      if (response.status === 201) {
        useToast("Parent Profile Created", false);
        setTimeout(() => {
          navigate("/parent");
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
      <ParentForm
        handleSubmit={createParent}
        register={registerParent}
        submitHandler={submitParentForm}
        clearField={() => {
          parentFormReset();
        }}
        isLoading={true}
        errors={errors}
        onClick={() => {}}
      />
    </>
  );
}

export default AddParent;
