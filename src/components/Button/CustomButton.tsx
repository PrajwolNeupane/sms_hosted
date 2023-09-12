import classNames from "classnames";
import { Oval } from "react-loader-spinner";

type CustomButton = {
  isLoading?: boolean;
  text: String;
  color?: String;
  onClick?: () => void;
  type?: "reset" | "button";
  variant?: "outline" | "filled";
};

const CustomButton = ({
  isLoading,
  text,
  color,
  onClick,
  type,
}: CustomButton) => {
  const buttonStyle = classNames(
    "flex w-full justify-center items-center rounded-md",
    {
      color: color,
      "bg-primary": !color,
    },
    "px-3 h-10 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  );

  return (
    <button
      type={type ? type : "submit"}
      className={buttonStyle}
      onClick={onClick}
    >
      {isLoading ? (
        <Oval height={25} width={25} color="#ffffff" secondaryColor="grey" />
      ) : (
        text
      )}
    </button>
  );
};

export default CustomButton;
