import CustomInput from "../../../components/Input/CustomInput";
import { InputFields } from "../../../constants/enum";
import logo from "../../../assets/Shikshya-dark.svg";

const ForgotPassForm = () => {
  return (
    <form className="w-3/5 min-w-[250px] " action="#" method="POST">
      <div className="flex flex-col w-full justify-center gap-4">
        <div className="flex w-full justify-center">
          <img src={logo} alt="logo of shikshya" width={"80%"} />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Please enter a new password
          </label>
          <div className="mt-2">
            <CustomInput type={InputFields.EMAIL} />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Please re-enter a new password
          </label>
          <div className="mt-2">
            <CustomInput type={InputFields.EMAIL} />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            change password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassForm;
