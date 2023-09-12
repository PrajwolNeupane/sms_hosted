const SearchIcon = ({
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
      <g>
        <path
          d="M17.6131 15.3746C19.0656 13.4719 19.7161 11.1129 19.4346 8.76956C19.1531 6.42619 17.9602 4.27127 16.0948 2.73593C14.2293 1.20059 11.8287 0.398055 9.37338 0.48888C6.91801 0.579706 4.5889 1.5572 2.85203 3.22579C1.11515 4.89438 0.0986018 7.13102 0.0057491 9.48824C-0.0871036 11.8455 0.75059 14.1494 2.35124 15.9392C3.95189 17.7289 6.19744 18.8725 8.63865 19.1411C11.0799 19.4097 13.5367 18.7835 15.5176 17.3877H15.5161C15.5611 17.4453 15.6091 17.5001 15.6631 17.5533L21.4381 23.0973C21.7194 23.3675 22.1009 23.5194 22.4988 23.5196C22.8968 23.5197 23.2784 23.3681 23.5599 23.0981C23.8413 22.8281 23.9995 22.4618 23.9997 22.0798C23.9998 21.6978 23.8419 21.3314 23.5606 21.0612L17.7856 15.5172C17.732 15.4651 17.6743 15.4184 17.6131 15.3746ZM18.0001 9.83927C18.0001 10.8793 17.7867 11.9092 17.3721 12.8701C16.9575 13.831 16.3498 14.7041 15.5838 15.4396C14.8177 16.175 13.9082 16.7584 12.9073 17.1564C11.9063 17.5544 10.8335 17.7593 9.75013 17.7593C8.66672 17.7593 7.59392 17.5544 6.59299 17.1564C5.59205 16.7584 4.68258 16.175 3.91649 15.4396C3.15041 14.7041 2.54272 13.831 2.12812 12.8701C1.71352 11.9092 1.50013 10.8793 1.50013 9.83927C1.50013 7.73875 2.36932 5.72427 3.9165 4.23898C5.46367 2.75369 7.56209 1.91927 9.75013 1.91927C11.9382 1.91927 14.0366 2.75369 15.5838 4.23898C17.1309 5.72427 18.0001 7.73875 18.0001 9.83927Z"
          fill={color ? color : "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1758_11472">
          <rect
            width="24"
            height="23.04"
            fill="white"
            transform="translate(0 0.479492)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SearchIcon;
