import { InputFields } from "../../constants/enum";

type CustomInputProps<T> = {
  type: InputFields;
  placeholder: string;
  onFocus?: () => void;
  isValid?: boolean | undefined;
  register?: T;
  width?: string;
  disable?:boolean;
  value?:string
};

const CustomInput = <T,>({
  type,
  disable,
  isValid,
  register,
  width,
  value,
  placeholder,
}: CustomInputProps<T>) => {
  const style = `border h-10 w-full rounded-md p-3 focus:outline-primary ${
    !isValid ? "border-red-600" : "border-gray-300"
  }`;
  return (
    <input
      type={type}
      {...register}
      className={style}
      placeholder={placeholder}
      disabled={disable}
      value={value}
    />
  );
};

export default CustomInput;
