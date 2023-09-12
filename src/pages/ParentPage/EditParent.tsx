import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editParentInterface, editParentSchema } from "../../types/form.schema";
import { AxiosError } from "axios";
import { ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useToast from "../../components/Toasts/CustomToast";
import EditParentForm from "./component/EditParentForm";
import {
  editParent,
  getSingleParent,
} from "../../features/endpoints/service/parent";
import { useAppSelector } from "../../features/hooks";

function EditParent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const auth = useAppSelector((state) => state.auth);
  const {
    handleSubmit: editProfile,
    register: registerProfile,
    reset: profileFormReset,
    formState: { errors },
  } = useForm<editParentInterface>({
    resolver: yupResolver(editParentSchema),
    defaultValues: async () => {
      try {
        const response = await getSingleParent(id!);
        console.log(response);
        return {
          ...response,
          parentId:response.parent_id,
          bloodGroup:response.blood
        };
      } catch (e) {
        console.log(e);
      }
    },
  });

  const submitProfileForm = async (data: any) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("middlename", data.middlename);
    formData.append("lastname", data.lastname);
    formData.append("contact", data.contact);
    formData.append("file", data.file);
    formData.append("occupation", data.occupation);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("religion", data.religion);
    formData.append("gender", data.gender);
    formData.append("relation", data.relation);
    formData.append("email", data.email);
    formData.append("parent_id", data.parentId);
    formData.append("school_id", auth._id!);
    formData.append("blood", data.bloodGroup);
    //Fake
    formData.append("address", "Naxal");
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      const response = await editParent(id!, formData);
      useToast("Parent Profile Updated", false);
      setTimeout(() => {
        navigate(`/parent/view/${id}`);
      }, 1500);
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
      <EditParentForm
        handleSubmit={editProfile}
        register={registerProfile}
        submitHandler={submitProfileForm}
        clearField={() => {
          profileFormReset();
        }}
        isLoading={true}
        errors={errors}
        onClick={() => {}}
        // profile={`${import.meta.env.VITE_REACT_API_URL}/${auth?.logo!}`}
      />
      <ToastContainer
        closeOnClick={true}
        pauseOnHover={true}
        autoClose={1000}
      />
    </>
  );
}

export default EditParent;
