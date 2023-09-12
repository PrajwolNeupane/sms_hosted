const StudentsIcon = ({
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
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5C9 6.6575 7.6575 8 6 8C4.3425 8 3 6.6575 3 5L3.0825 4.295L0.75 3.125L6 0.5L11.25 3.125V6.875H10.5V3.5L8.9175 4.295L9 5ZM6 9.5C9.315 9.5 12 10.8425 12 12.5V14H0V12.5C0 10.8425 2.685 9.5 6 9.5Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};
export default StudentsIcon;
