import CustomInput from "../../../components/Input/CustomInput";
import { InputFields } from "../../../constants/enum";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import CustomForm from "../../../components/Form/CustomForm";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/Button/CustomButton";
import { loginSchemaInterface } from "../../../types/form.schema";

type LoginFormProps = {
  submitHandler: (data: loginSchemaInterface) => void;
  register: UseFormRegister<loginSchemaInterface>;
  handleSubmit: UseFormHandleSubmit<loginSchemaInterface, undefined>;
  errors: FieldErrors<loginSchemaInterface>;
  isLoading: boolean;
};

const LoginForm = ({
  register,
  submitHandler,
  handleSubmit,
  errors,
  isLoading,
}: LoginFormProps) => {
  return (
    <CustomForm width="" onSubmit={handleSubmit((data) => submitHandler(data))}>
      <div className="flex flex-col justify-between gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <CustomInput<UseFormRegisterReturn>
              type={InputFields.EMAIL}
              placeholder="basnetraymonn@gmail.com"
              register={{
                ...register("email", {
                  required: true,
                  minLength: { value: 8, message: "Invalid Length" },
                }),
              }}
              isValid={errors.email ? false : true}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-md font-medium text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <NavLink
                to="/forgot"
                className="font-semibold text-primary hover:text-primary"
              >
                Forgot password
              </NavLink>
            </div>
          </div>
          <div className="mt-2">
            <CustomInput
              type={InputFields.PASS}
              placeholder=""
              register={{
                ...register("password"),
              }}
              isValid={errors.password ? false : true}
            />
          </div>
        </div>
        <div>
          {/* <button */}
          {/*   type="submit" */}
          {/*   className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" */}
          {/* > */}
          {/*   Login */}
          {/* </button> */}
          <CustomButton text={"Login"} isLoading={isLoading} />
        </div>
      </div>
    </CustomForm>
  );
};

export default LoginForm;
