import BinIcon from "../../../assets/icons/BinIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import ViewDetailIcon from "../../../assets/icons/ViewDetailIcon";
import ActionIcon from "../../../assets/icons/ActionIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

function DropDown({
  id,
  delete: onDelete,
}: {
  id: string;
  delete: (id: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropDown = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        className="flex relative hover:bg-gray-200 cursor-pointer z-20"
        onClick={toggleDropDown}
      >
        <ActionIcon color="#000000" height="25" width="25" />
      </div>
      {isExpanded && (
        <div>
          <div className="absolute rounded-md border border-gray-200 shadow-md bg-white top-30 right-10 w-[250px] flex flex-col p-3 gap-1 z-30">
            <Link to={`edit/${id}`}>
              <div className="flex justify-start items-center hover:bg-gray-200 rounded-md p-2 gap-5 text-lg border-b  border-gray-200 text-green-600">
                <EditIcon color="#17a34a" height="25" width="25" />
                Edit
              </div>
            </Link>
            <div
              className="flex justify-start items-center cursor-pointer hover:bg-gray-200 rounded-md p-2 gap-5 border-b border-gray-200 text-lg text-red-600"
              onClick={() => {
                onDelete(id);
              }}
            >
              <BinIcon height="25px" width="25" color="#e31a1a" />
              Delete
            </div>
            <Link to={`view/${id}`}>
              <div className="flex justify-start items-center hover:bg-gray-200 rounded-md p-2 gap-5 border-b border-gray-200 text-lg">
                <ViewDetailIcon height="25px" width="25" color="#000000" />
                View Detail
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default DropDown;
