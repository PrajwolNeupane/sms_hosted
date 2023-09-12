import SideTile from "./SideTile";
import { FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import logo from "../../../assets/logo.svg";
import DashboardIcon from "../../../assets/icons/DashboardIcon";
import StudentsIcon from "../../../assets/icons/StudentsIcon";
import ParentsIcon from "../../../assets/icons/ParentsIcon";
import AttendanceIcon from "../../../assets/icons/AttendanceIcon";
import RoutineIcon from "../../../assets/icons/RoutineIcon";
import EmployeesIcon from "../../../assets/icons/EmployeesIcon";
import { useAppSelector } from "../../../features/hooks";
import { useLocation } from "react-router-dom";

type DrawerProps = {
  onClick: (e: any) => void;
};

const Drawer = ({ onClick }: DrawerProps) => {
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
    <div
      className="z-10 fixed w-full h-screen top-0 ease-in-out duration-300 left-0 bg-opacity-60 bg-black"
      id="drawer_overlay_modal"
      onClick={onClick}
    >
      <div className="bg-[#24394d] flex flex-col h-screen w-60 transition ease-in-out duration-300 delay-700">
        <div className="flex items-center justify-center start w-full h-24">
          <img src={logo} width="140px" />
        </div>
        <div className="flex flex-col py-5 justify-between w-full flex-grow">
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
          <div className="flex flex-col items-center gap-4">
            <SideTile
              title={"Settings"}
              Icon={FiSettings}
              isSelected={false}
              isExpandable={false}
              path={"/"}
            />
            <SideTile
              title={"Logout"}
              Icon={FiLogOut}
              isSelected={false}
              isExpandable={false}
              path={"/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
