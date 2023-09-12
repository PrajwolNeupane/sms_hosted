import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import CustomButton from "../../../components/Button/CustomButton";
import CustomForm from "../../../components/Form/CustomForm";
import CustomInput from "../../../components/Input/CustomInput";
import { InputFields } from "../../../constants/enum";
import { NavLink } from "react-router-dom";
import { forgetPasswordSchemaInterface } from "../../../types/form.schema";

type ForgotPassProps = {
  submitHandler: (data: forgetPasswordSchemaInterface) => void;
  register: UseFormRegister<forgetPasswordSchemaInterface>;
  handleSubmit: UseFormHandleSubmit<forgetPasswordSchemaInterface, undefined>;
  errors: FieldErrors<forgetPasswordSchemaInterface>;
  isLoading: boolean;
};

const ForgotPassForm = ({
  submitHandler,
  register,
  handleSubmit,
  errors,
  isLoading,
}: ForgotPassProps) => {
  return (
    <CustomForm onSubmit={handleSubmit((data) => submitHandler(data))}>
      <div className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Please enter your email address
          </label>

          <div className="mt-2">
            <CustomInput
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
          <CustomButton isLoading={isLoading} text={"Send Reset Link"} />
        </div>
        <div className="flex justify-center text-sm">
          <NavLink
            to="/login"
            className="font-semibold text-primary hover:text-primary"
          >
            Go Back
          </NavLink>
        </div>
      </div>
    </CustomForm>
  );
};

export default ForgotPassForm;
