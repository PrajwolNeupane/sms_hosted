import { toast } from "react-toastify";
import { ResponseType } from "../constants/enum";

const showToast = (message: String, type: ResponseType) => {
  switch (type) {
    case ResponseType.SUCCESS:
      return toast.success(message);
    case ResponseType.INVALID:
      return toast.error(message);
    default:
      return toast(message);
  }
};

export default showToast;
