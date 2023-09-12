import React from "react";
import { Link } from "react-router-dom";
import RightSideArrowIcon from "../../assets/icons/RightSideArrowIcon";

const CustomBreadCrumb = ({
  title,
  list,
  className,
}: {
  title: string;
  list: Array<{ link?: string | undefined; name: string }>;
  className?: string;
}) => {
  return (
    <div className={`flex flex-wrap gap-3 items-center ${className!}`}>
      <h2 className="text-xl font-medium text-primary cursor-pointer">{title}</h2>
      {list.map(
        (curr: { link?: string | undefined; name: string }, indx: number) => {
          return (
            <React.Fragment key={indx}>
              {curr.link ? (
                <>
                  <RightSideArrowIcon height="15" width="10" color="#24394d" />
                  <Link to={curr.link}>
                    <h5 className="text-xl font-medium text-primary">
                      {curr.name}
                    </h5>
                  </Link>
                </>
              ) : (
                <>
                  <RightSideArrowIcon height="15" width="10" color="#24394d" />
                  <h5 className="text-xl font-medium text-primary">
                    {curr.name}
                  </h5>
                </>
              )}
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default CustomBreadCrumb;
