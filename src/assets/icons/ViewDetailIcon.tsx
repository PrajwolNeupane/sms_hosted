const ViewDetailIcon = ({
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
      width={width ? width : "16"}
      height={height ? height : "16"}
      fill={color ? color : "white"}
      viewBox="-3.5 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M11.16 16.153a.477.477 0 0 1-.476.475H1.316a.477.477 0 0 1-.475-.475V3.046a.477.477 0 0 1 .475-.475h6.95l2.893 2.893zm-1.11-9.924H8.059a.575.575 0 0 1-.574-.574V3.679H1.95v11.84h8.102zM3.907 4.92a1.03 1.03 0 1 0 1.029 1.03 1.03 1.03 0 0 0-1.03-1.03zm4.958 3.253h-5.87v1.108h5.87zm0 2.354h-5.87v1.109h5.87zm0 2.354h-5.87v1.109h5.87z"></path>
      </g>
    </svg>
  );
};
export default ViewDetailIcon;
