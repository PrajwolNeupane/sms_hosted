const SettingIcon = ({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2009_17045)">
        <path
          d="M12.0666 7.33301C9.46657 7.33301 7.3999 9.39967 7.3999 11.9997C7.3999 14.5997 9.46657 16.6663 12.0666 16.6663C14.6666 16.6663 16.7332 14.5997 16.7332 11.9997C16.7332 9.39967 14.6666 7.33301 12.0666 7.33301ZM12.0666 15.333C10.1999 15.333 8.73324 13.8663 8.73324 11.9997C8.73324 10.133 10.1999 8.66634 12.0666 8.66634C13.9332 8.66634 15.3999 10.133 15.3999 11.9997C15.3999 13.8663 13.9332 15.333 12.0666 15.333Z"
          fill={color ? color : "white"}
        />
        <path
          d="M21.8668 9.79967L20.0002 9.19967L19.6002 8.19967L20.5335 6.46634C20.7335 6.06634 20.6668 5.53301 20.3335 5.19967L18.7335 3.59967C18.4002 3.26634 17.8668 3.19967 17.4668 3.39967L15.7335 4.33301L14.7335 3.93301L14.1335 2.06634C14.0002 1.66634 13.6002 1.33301 13.1335 1.33301H10.8668C10.4002 1.33301 10.0002 1.66634 9.9335 2.13301L9.3335 3.99967C8.9335 4.06634 8.60016 4.19967 8.26683 4.39967L6.5335 3.46634C6.1335 3.26634 5.60016 3.33301 5.26683 3.66634L3.66683 5.26634C3.3335 5.59967 3.26683 6.13301 3.46683 6.53301L4.3335 8.19967C4.20016 8.53301 4.06683 8.93301 3.9335 9.26634L2.06683 9.86634C1.66683 9.99967 1.3335 10.3997 1.3335 10.8663V13.133C1.3335 13.5997 1.66683 13.9997 2.1335 14.133L4.00016 14.733L4.40016 15.733L3.46683 17.4663C3.26683 17.8663 3.3335 18.3997 3.66683 18.733L5.26683 20.333C5.60016 20.6663 6.1335 20.733 6.5335 20.533L8.26683 19.5997L9.26683 19.9997L9.86683 21.933C10.0002 22.333 10.4002 22.6663 10.8668 22.6663H13.1335C13.6002 22.6663 14.0002 22.333 14.1335 21.933L14.7335 19.9997L15.7335 19.5997L17.4668 20.533C17.8668 20.733 18.4002 20.6663 18.7335 20.333L20.3335 18.733C20.6668 18.3997 20.7335 17.8663 20.5335 17.4663L19.6002 15.733L20.0002 14.733L21.9335 14.133C22.3335 13.9997 22.6668 13.5997 22.6668 13.133V10.8663C22.6668 10.3997 22.3335 9.93301 21.8668 9.79967ZM21.3335 12.933L18.9335 13.6663L18.8668 13.9997L18.2668 15.3997L18.0668 15.733L19.2668 17.933L17.9335 19.2663L15.7335 18.0663L15.4002 18.2663C14.9335 18.533 14.4668 18.733 14.0002 18.8663L13.6668 18.933L12.9335 21.333H11.0668L10.3335 18.933L10.0002 18.8663L8.60016 18.2663L8.26683 18.0663L6.06683 19.2663L4.7335 17.933L5.9335 15.733L5.7335 15.3997C5.46683 14.933 5.26683 14.4663 5.1335 13.9997L5.06683 13.6663L2.66683 12.933V11.0663L4.9335 10.3997L5.06683 10.0663C5.20016 9.53301 5.40016 9.06634 5.66683 8.59967L5.86683 8.26634L4.7335 6.06634L6.06683 4.73301L8.20016 5.93301L8.5335 5.73301C9.00016 5.46634 9.46683 5.26634 10.0002 5.13301L10.3335 4.99967L11.0668 2.66634H12.9335L13.6668 4.99967L14.0002 5.13301C14.4668 5.26634 14.9335 5.46634 15.4002 5.73301L15.7335 5.93301L17.9335 4.73301L19.2668 6.06634L18.0668 8.26634L18.2668 8.59967C18.5335 9.06634 18.7335 9.53301 18.8668 9.99967L18.9335 10.333L21.3335 11.0663V12.933Z"
          fill={color ? color : "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2009_17045">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SettingIcon;
