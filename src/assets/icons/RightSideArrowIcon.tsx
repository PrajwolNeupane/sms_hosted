const RightSideArrowIcon = ({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "16"}
      height={height ? height : "16"}
      viewBox="0 0 9 16"
      fill="none"
    >
      <path
        d="M1.33331 14.6663L7.99998 7.99967L1.33331 1.33301"
        stroke={color ? color : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default RightSideArrowIcon;
