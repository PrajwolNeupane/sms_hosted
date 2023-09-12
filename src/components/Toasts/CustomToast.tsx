import { toast } from "react-toastify";

const useToast = (message: string, isError: boolean) => {
  if (isError) {
    return toast.error(message, { position: "bottom-left" });
  } else {
    return toast.success(message, { position: "bottom-left" });
  }
};

export default useToast;
