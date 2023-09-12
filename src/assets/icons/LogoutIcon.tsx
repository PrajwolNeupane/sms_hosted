const LogoutIcon = ({
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
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.998 17C14.986 19.175 14.889 20.353 14.121 21.121C13.242 22 11.828 22 9.00005 22H8.00005C5.17105 22 3.75705 22 2.87805 21.121C2.00005 20.243 2.00005 18.828 2.00005 16L2.00005 8C2.00005 5.172 2.00005 3.757 2.87805 2.879C3.75805 2 5.17105 2 8.00005 2H9.00005C11.828 2 13.242 2 14.121 2.879C14.889 3.647 14.986 4.825 14.998 7"
        stroke={color ? color : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M9 12L22 12M22 12L18.5 15M22 12L18.5 9"
        stroke={color ? color : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default LogoutIcon;
