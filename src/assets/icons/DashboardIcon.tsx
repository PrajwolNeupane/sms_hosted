const DashboardIcon = ({
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
      className="text-white"
      width={width ? width : "16"}
      height={height ? height : "16"}
      viewBox="0 0 14 14"
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.75H5.5C5.9125 7.75 6.25 7.4125 6.25 7V1C6.25 0.5875 5.9125 0.25 5.5 0.25H1C0.5875 0.25 0.25 0.5875 0.25 1V7C0.25 7.4125 0.5875 7.75 1 7.75ZM1 13.75H5.5C5.9125 13.75 6.25 13.4125 6.25 13V10C6.25 9.5875 5.9125 9.25 5.5 9.25H1C0.5875 9.25 0.25 9.5875 0.25 10V13C0.25 13.4125 0.5875 13.75 1 13.75ZM8.5 13.75H13C13.4125 13.75 13.75 13.4125 13.75 13V7C13.75 6.5875 13.4125 6.25 13 6.25H8.5C8.0875 6.25 7.75 6.5875 7.75 7V13C7.75 13.4125 8.0875 13.75 8.5 13.75ZM7.75 1V4C7.75 4.4125 8.0875 4.75 8.5 4.75H13C13.4125 4.75 13.75 4.4125 13.75 4V1C13.75 0.5875 13.4125 0.25 13 0.25H8.5C8.0875 0.25 7.75 0.5875 7.75 1Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};

export default DashboardIcon;
