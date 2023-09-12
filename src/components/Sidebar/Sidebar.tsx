import { Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import SideTile from "./components/SideTile";
import { RxHamburgerMenu } from "react-icons/rx";
import Profile from "./components/ProfileDropdown";
import Drawer from "./components/Drawer";
import { useState } from "react";
import { useAppSelector } from "../../features/hooks";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import StudentsIcon from "../../assets/icons/StudentsIcon";
import ParentsIcon from "../../assets/icons/ParentsIcon";
import AttendanceIcon from "../../assets/icons/AttendanceIcon";
import RoutineIcon from "../../assets/icons/RoutineIcon";
import EmployeesIcon from "../../assets/icons/EmployeesIcon";

const Sidebar = () => {
  const [drawer, setDrawer] = useState<boolean>(false);
  const school = useAppSelector((state) => state.auth);
  const params = useLocation();
  const upper_links = [
    {
      path: "/",
      title: "Dashboard",
      icon: DashboardIcon,
      isSelected: params.pathname === "/" ? true : false,
      isExpandable: false,
    },
    {
      path: "/student",
      title: "Students",
      icon: StudentsIcon,
      isSelected: params.pathname.split("/")[1] === "student" ? true : false,
      isExpandable: true,
      childern: [
        {
          path: "/student",
          isSelected: params.pathname === "/student" ? true : false,
          title: "All Students",
        },
        {
          path: "/student/addStudent",
          isSelected: params.pathname === "/student/addStudent" ? true : false,
          title: "Add Student",
        },
      ],
    },
    {
      path: "/parent",
      title: "Parents",
      icon: ParentsIcon,
      isSelected: params.pathname.split("/")[1] === "parent" ? true : false,
      isExpandable: true,
      childern: [
        {
          path: "/parent",
          isSelected: params.pathname === "/parent" ? true : false,
          title: "All Parents",
        },
        {
          path: "/parent/addParent",
          isSelected: params.pathname === "/parent/addParent" ? true : false,
          title: "Add Parent",
        },
      ],
    },
    {
      path: "/employee",
      title: "Employees",
      icon: EmployeesIcon,
      isSelected: params.pathname.split("/")[1] === "employee" ? true : false,
      isExpandable: true,
      childern: [
        {
          path: "/employee",
          isSelected: params.pathname === "/employee" ? true : false,
          title: "All Employees",
        },
        {
          path: "/employee/addEmployee",
          isSelected:
            params.pathname === "/employee/addEmployee" ? true : false,
          title: "Add Employee",
        },
      ],
    },
    {
      path: "/attendance",
      title: "Attendance",
      icon: AttendanceIcon,
      isSelected: params.pathname.split("/")[1] === "attendance" ? true : false,
      isExpandable: true,
      childern: [
        {
          path: "/attendance/student",
          isSelected: params.pathname === "/attendance" ? true : false,
          title: "Students",
        },
        {
          path: "/attendance/staff",
          isSelected: params.pathname === "/attendance/staff" ? true : false,
          title: "Employees",
        },
      ],
    },
    {
      path: "/routine",
      title: "Routine",
      icon: RoutineIcon,
      isSelected: params.pathname === "/routine" ? true : false,
      isExpandable: false,
    },
  ];

  return (
    <>
      <div className="flex h-screen">
        <div className="bg-primary w-1/5 min-w-[296px] hidden md:flex flex-col flex-grow">
          <div className="flex items-center py-[70px] justify-center start w-full h-24">
            <img src={logo} width="223px" />
          </div>
          <div className="flex flex-col py-5  justify-between w-full flex-grow overflow-y-scroll no-scrollbar">
            <div className="flex flex-col gap-4 items-center">
              {upper_links.map((item) => (
                <SideTile
                  isSelected={item.isSelected}
                  title={item.title}
                  Icon={item.icon}
                  key={item.title}
                  path={item.path}
                  child={item.childern}
                  isExpandable={item.isExpandable}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-4/5 flex flex-col flex-grow">
          <div className="flex h-20 w-full shadow-lg bg-white px-5 justify-between md:justify-end items-center">
            <div
              className="flex md:hidden p-2 text-lg shadow-sm border border-gray-200 rounded-md"
              onClick={() => setDrawer((prev) => !prev)}
            >
              <RxHamburgerMenu className="w-8 h-8" />
            </div>
            <Profile
              name={school.name!}
              image={import.meta.env.VITE_REACT_API_URL + "/" + school.logo!}
            />
          </div>
          <div className="flex bg-gray-200 h-full w-full overflow-y-scroll no-scrollbar">
            <Outlet />
          </div>
        </div>
      </div>
      {drawer && (
        <Drawer
          onClick={(e) => {
            if (e.target.id == "drawer_overlay_modal") {
              setDrawer(false);
            }
          }}
        />
      )}
    </>
  );
};

export default Sidebar;
