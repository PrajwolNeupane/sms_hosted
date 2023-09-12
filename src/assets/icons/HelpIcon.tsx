const HelpIcon = ({
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
        d="M12 22.5C6.21 22.5 1.5 17.79 1.5 12C1.5 6.21 6.21 1.5 12 1.5C17.79 1.5 22.5 6.21 22.5 12C22.5 17.79 17.79 22.5 12 22.5ZM12 3C7.035 3 3 7.035 3 12C3 16.965 7.035 21 12 21C16.965 21 21 16.965 21 12C21 7.035 16.965 3 12 3Z"
        fill={color ? color : "white"}
      />
      <path
        d="M12 6.75C10.335 6.75 9 8.085 9 9.75H10.5C10.5 8.925 11.175 8.25 12 8.25C12.825 8.25 13.5 8.925 13.5 9.75C13.5 11.25 11.25 11.07 11.25 13.5H12.75C12.75 11.82 15 11.625 15 9.75C15 8.085 13.665 6.75 12 6.75Z"
        fill={color ? color : "white"}
      />
      <path
        d="M11.9998 17.4303C12.5134 17.4303 12.9298 17.0139 12.9298 16.5003C12.9298 15.9867 12.5134 15.5703 11.9998 15.5703C11.4862 15.5703 11.0698 15.9867 11.0698 16.5003C11.0698 17.0139 11.4862 17.4303 11.9998 17.4303Z"
        fill={color ? color : "white"}
      />
      <path
        d="M9.75 10.5C10.1642 10.5 10.5 10.1642 10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75C9 10.1642 9.33579 10.5 9.75 10.5Z"
        fill={color ? color : "white"}
      />
      <path
        d="M12 14.25C12.4142 14.25 12.75 13.9142 12.75 13.5C12.75 13.0858 12.4142 12.75 12 12.75C11.5858 12.75 11.25 13.0858 11.25 13.5C11.25 13.9142 11.5858 14.25 12 14.25Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};
export default HelpIcon;