const PrintIcon = ({
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
      viewBox="0 0 24 23"
      fill="none"
    >
      <path
        d="M8.49992 15.6667H15.4999V18H8.49992V15.6667ZM23.6666 16.8333H20.1666V20.3333C20.1666 20.9522 19.9208 21.5457 19.4832 21.9832C19.0456 22.4208 18.4521 22.6667 17.8333 22.6667H6.16659C5.54775 22.6667 4.95425 22.4208 4.51667 21.9832C4.07908 21.5457 3.83325 20.9522 3.83325 20.3333V16.8333H0.333252V7.5C0.333252 6.88116 0.579085 6.28767 1.01667 5.85008C1.45425 5.4125 2.04775 5.16667 2.66659 5.16667H3.83325V2.83333C3.83325 2.21449 4.07908 1.621 4.51667 1.18342C4.95425 0.745833 5.54775 0.5 6.16659 0.5H17.8333C18.4521 0.5 19.0456 0.745833 19.4832 1.18342C19.9208 1.621 20.1666 2.21449 20.1666 2.83333V5.16667H21.3333C21.9521 5.16667 22.5456 5.4125 22.9832 5.85008C23.4208 6.28767 23.6666 6.88116 23.6666 7.5V16.8333ZM6.16659 5.16667H17.8333V2.83333H6.16659V5.16667ZM17.8333 13.3333H6.16659V20.3333H17.8333V13.3333ZM21.3333 9.25C21.3332 9.02011 21.2878 8.79249 21.1998 8.58012C21.1117 8.36776 20.9827 8.17482 20.8201 8.01232C20.6575 7.84982 20.4645 7.72094 20.252 7.63303C20.0396 7.54513 19.812 7.49992 19.5821 7.5C19.3522 7.50008 19.1246 7.54543 18.9122 7.63348C18.6999 7.72152 18.5069 7.85053 18.3444 8.01315C18.1819 8.17576 18.053 8.36878 17.9651 8.5812C17.8772 8.79362 17.832 9.02128 17.8321 9.25117C17.8322 9.71545 18.0168 10.1607 18.3452 10.4888C18.6736 10.817 19.119 11.0013 19.5833 11.0012C20.0475 11.001 20.4927 10.8164 20.8209 10.488C21.1491 10.1596 21.3334 9.71428 21.3333 9.25Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
};
export default PrintIcon;