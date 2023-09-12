import { InputFields } from "../../constants/enum";

type CustomTextAreaProps<T> = {
  placeholder: string;
  onFocus?: () => void;
  isValid?: boolean | undefined;
  register: T;
  width?: string;
  rows: number;
};

const CustomTextArea = <T,>({
  isValid,
  register,
  width,
  placeholder,
  rows,
}: CustomTextAreaProps<T>) => {
  const style = `border h-10 w-full rounded-md p-3 focus:outline-primary ${
    !isValid ? "border-red-600" : "border-gray-300 resize-none h-full"
  }`;
  return (
    <textarea
      {...register}
      className={style}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  );
};

export default CustomTextArea;
