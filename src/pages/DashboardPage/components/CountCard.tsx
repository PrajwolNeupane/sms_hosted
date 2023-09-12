import classNames from "classnames";

type CountCardProps = {
  Icon: JSX.ElementType;
  title: String;
  count: String;
  background: String;
};

const CountCard = ({ Icon, title, count, background }: CountCardProps) => {
  const outerCardStyle = classNames(
    "flex flex-grow items-center rounded-md px-4 ",
    {
      [`${background}`]: background,
    }
  );
  const innerCardStyle = classNames(
    "flex justify-center items-center h-16 w-16 text-[30px] text-white border-r border-gray-400 pr-3"
  );

  return (
    <div className="flex flex-grow flex-col h-28 w-64 rounded-md justify-between lg:w-64 shadow-md border border-gray-300 group">
      <div className={outerCardStyle}>
        <div className={innerCardStyle}>
          <Icon color={"#24394d"} height="40" width="40" />
        </div>
        <div className="flex flex-col flex-grow items-start gap-1 pl-5">
          <div className="font-semibold text-2xl">{count}</div>
          <div className="text-gray-500">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
