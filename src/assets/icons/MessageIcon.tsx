const MessageIcon = ({
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
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.3333 9.33333V21.3333C27.3333 22.8 26.1333 24 24.6667 24H6L0.666672 29.3333V5.33333C0.666672 3.86667 1.86667 2.66667 3.33334 2.66667H16.8C16.6667 3.06667 16.6667 3.6 16.6667 4C16.6667 7.73333 19.6 10.6667 23.3333 10.6667C24.8 10.6667 26.2667 10.1333 27.3333 9.33333ZM19.3333 4C19.3333 6.26667 21.0667 8 23.3333 8C25.6 8 27.3333 6.26667 27.3333 4C27.3333 1.73333 25.6 0 23.3333 0C21.0667 0 19.3333 1.73333 19.3333 4Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};
export default MessageIcon;
