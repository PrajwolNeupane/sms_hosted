import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import Sidebar from "../components/Sidebar/Sidebar";
import ForgotPassPage from "../pages/ForgotPassPage/ForgotPassPage";
import PasswordResetPage from "../pages/PasswordResetPage/PasswordResetPage";
import Dashboard from "../pages/DashboardPage/Dashboard";
import Student from "../pages/StudentPage/Student";
import AddStudent from "../pages/StudentPage/AddStudent";
import AddParents from "../pages/ParentPage/AddParent";
import AddEmployee from "../pages/EmployeePage/AddEmployee";
import Routine from "../pages/RoutinePage/Routine";
import Parent from "../pages/ParentPage/Parent";
import Employee from "../pages/EmployeePage/Employee";
import ViewParent from "../pages/ParentPage/ViewParent";
import ViewEmployee from "../pages/EmployeePage/ViewEmployee";
import ViewStudent from "../pages/StudentPage/ViewStudent";
import StudentAttendance from "../pages/AttendancePage/StudentAttendance";
import StudentAttendanceTable from "../pages/AttendancePage/components/StudentAttendanceTable";
import StudentAttendanceDetail from "../pages/AttendancePage/components/StudentAttendanceDetail";
import EmployeeAttendance from "../pages/AttendancePage/EmployeeAttendance";
import EmployeeAttendanceDetail from "../pages/AttendancePage/components/EmployeeAttendanceDetail";
import Profile from "../pages/ProfilePage/Profile";
import EditProfile from "../pages/ProfilePage/EditProfile";
import Protected from "./Protected";
import EditParent from "../pages/ParentPage/EditParent";
import Calander from "../pages/CalanderPage/Calander";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot",
    element: <ForgotPassPage />,
  },
  {
    path: "/reset",
    element: <PasswordResetPage />,
  },
  {
    element: <Protected Page={<Sidebar />} path={"/login"} />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        children: [
          {
            path: "",
            element: <Profile />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
        ],
      },
      {
        path: "/student",
        children: [
          {
            path: "",
            element: <Student />,
          },
          {
            path: "addStudent",
            element: <AddStudent />,
          },
          {
            path: "view",
            element: <ViewStudent />,
          },
        ],
      },
      {
        path: "/parent",
        children: [
          {
            path: "",
            element: <Parent />,
          },
          {
            path: "addParent",
            element: <AddParents />,
          },
          {
            path: "view/:id",
            element: <ViewParent />,
          },
          {
            path: "edit/:id",
            element: <EditParent />,
          },
        ],
      },
      {
        path: "/employee",
        children: [
          {
            path: "",
            element: <Employee />,
          },
          {
            path: "addEmployee",
            element: <AddEmployee />,
          },
          {
            path: "view",
            element: <ViewEmployee />,
          },
        ],
      },
      {
        path: "/attendance",
        children: [
          {
            path: "student",
            children: [
              {
                path: "",
                element: <StudentAttendance />,
              },
              {
                path: "class",
                element: <StudentAttendanceTable />,
              },
              {
                path: "view/:id",
                element: <StudentAttendanceDetail />,
              },
            ],
          },

          {
            path: "staff",
            children: [
              {
                path: "",
                element: <EmployeeAttendance />,
              },
              {
                path: "view/:id",
                element: <EmployeeAttendanceDetail />,
              },
            ],
          },
        ],
      },
      {
        path: "/routine",
        element: <Calander />,
      },
    ],
  },
]);

export default router;
