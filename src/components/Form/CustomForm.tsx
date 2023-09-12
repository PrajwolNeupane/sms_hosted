import classNames from "classnames";
import { FormEvent, PropsWithChildren } from "react";

type CustomFormProp = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  width?: string;
};

const CustomForm = ({
  children,
  onSubmit,
  width,
}: PropsWithChildren<CustomFormProp>) => {
  const formStyle = classNames("flex flex-col min-w-[250px]", {
    [`w-${width}`]: width,
    "w-3/5": !width,
  });
  return (
    <form className={formStyle} method="POST" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default CustomForm;
