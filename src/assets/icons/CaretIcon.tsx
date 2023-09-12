const CaretIcon = ({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M9.92896 4.85785L16.2929 11.2218C16.6834 11.6123 16.6834 12.2455 16.2929 12.636L9.92896 19"
          stroke={color ? color : "#ffffff"}
          stroke-linecap="round"
        ></path>
      </g>
    </svg>
  );
};
export default CaretIcon;
