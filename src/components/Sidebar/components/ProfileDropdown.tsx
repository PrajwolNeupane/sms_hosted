import { PiCaretDownBold } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import SearchIcon from "../../../assets/icons/SearchIcon";
import BellIcon from "../../../assets/icons/BellIcon";
import MessageIcon from "../../../assets/icons/MessageIcon";
import SettingIcon from "../../../assets/icons/SettingIcon";
import HelpIcon from "../../../assets/icons/HelpIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";

type ProfileProps = {
  name: string;
  image: string;
};

const ProfileDropdown = ({ name, image }: ProfileProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex items-center justify-between w-full lg:px-5">
      <div className="hidden lg:flex flex-grow w-1/3 min-w-[400px] bg-gray-200 rounded-md relative items-center justify-between">
        <div className="absolute left-6">
          <SearchIcon color="#24394d" height="25" width="25" />
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search here"
          className="flex pl-16 h-12 outline-none bg-gray-200 rounded-md"
        />
      </div>

      <div className="flex w-full justify-end items-center gap-6">
        <div className="flex gap-2 items-center">
          <div className="flex items-center justify-center h-12 w-12 hover:bg-gray-200 rounded-full">
            <MessageIcon color="#24394d" height="25" width="25" />
          </div>
          <div className="flex items-center justify-center h-12 w-12 hover:bg-gray-200 rounded-full">
            <BellIcon color="#24394d" height="25" width="25" />
          </div>
        </div>
        <div
          className="flex items-center justify-center gap-3 relative"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <div className="flex">
            <img src={image} className="h-12 w-12 border border-gray-300 rounded-full object-contain"/>
          </div>
          <div className="flex items-center gap-3 text-sm group cursor-pointer">
            <div className="hidden xl:flex flex-col">
              <div className="text-lg font-semibold">{name}</div>
              <div className="text-md font-semibold text-gray-400">
                Administrator
              </div>
            </div>
            {isExpanded && (
              <div className="absolute rounded-md border border-gray-200 shadow-md bg-white top-14 right-0 w-[250px] flex flex-col p-3 gap-1 z-50">
                <div className="flex justify-start items-center hover:bg-gray-200 rounded-md p-3 gap-5 border border-gray-200 text-lg">
                  <CgProfile size="25px" />
                  <Link to="/profile">Profile</Link>
                </div>
                <div className="flex justify-start items-center hover:bg-gray-200 rounded-md p-3 gap-5 border border-gray-200 text-lg">
                  <SettingIcon height="30" width="24" color="#24394d" />
                  <Link to="/profile">Setting</Link>
                </div>
                <div className="flex justify-start items-center hover:bg-gray-200 rounded-md p-3 gap-5 border border-gray-200 text-lg">
                  <HelpIcon height="30" width="24" color="#24394d" />
                  <Link to="/profile">Help</Link>
                </div>
                <div className="flex justify-start items-center  rounded-md p-3 gap-5 border  hover:bg-gray-200 border-gray-200 text-lg">
                  <LogoutIcon height="30" width="24" color="#24394d" />
                  <Link to="/profile">Logout</Link>
                </div>
              </div>
            )}
            <div className="hidden xl:flex">
              <PiCaretDownBold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
