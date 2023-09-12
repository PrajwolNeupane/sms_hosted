import classNames from "classnames";
import { useState } from "react";
import { PiCaretDownBold, PiCaretRightBold } from "react-icons/pi";
import { Link, To, useNavigate } from "react-router-dom";

type Child = {
  path: To;
  isSelected: boolean;
  title: string;
};

type SideTileProps = {
  path: To;
  Icon: JSX.ElementType;
  title: String;
  isSelected: boolean;
  isExpandable: boolean;
  child?: Child[];
};
const SideTile = ({
  Icon,
  title,
  isSelected,
  path,
  isExpandable,
  child,
}: SideTileProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const style = `flex flex-col gap-1 justify-center w-4/5`;
  const tileStyle = classNames(
    "flex w-full h-12 gap-4 items-center cursor-pointer pl-8 rounded-md",
    {
      "bg-white text-primary": isSelected,
      "text-white": !isSelected,
    }
  );
  const navigate = useNavigate();
  return (
    <div
      className={style}
      onClick={!isExpandable ? () => navigate(path) : () => {}}
    >
      <div
        className={tileStyle}
        onClick={isExpandable ? () => setExpanded((prev) => !prev) : () => {}}
      >
        <div className="text-white">
          <Icon color={isSelected ? "#24394d" : "#ffffff"} />
        </div>
        <div className="text-md font-semibold">{title}</div>
        {isExpandable && (
          <div className="flex justify-end flex-grow text-sm font-semibold pr-5 transition ease-in-out">
            {expanded ? <PiCaretDownBold /> : <PiCaretRightBold />}
          </div>
        )}
      </div>
      {isExpandable &&
        expanded &&
        child!.map((item) => {
          const childTile = `flex pl-14 w-full h-12 gap-4 items-center cursor-pointer rounded-md ${
            item.isSelected ? "bg-gray-600" : ""
          } text-white`;
          return (
            <Link
              to={item.path}
              key={item.path.toString()}
              className={childTile}
            >
              <div className="text-md font-semibold">{item.title}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default SideTile;
