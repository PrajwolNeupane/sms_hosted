import CountCard from "./components/CountCard";
import StudentsIcon from "../../assets/icons/StudentsIcon";
import ParentsIcon from "../../assets/icons/ParentsIcon";
import EmployeesIcon from "../../assets/icons/EmployeesIcon";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import CustomBarChart from "../../components/Charts/CustomBarChart";
import CustomPieChart from "../../components/Charts/CustomPieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-grow items-center px-10">
      <div className="flex h-20 w-full items-center justify-start text-2xl font-semibold">
        Dashboard
      </div>
      <div className="flex w-full items-center gap-3 justify-center lg:justify-between flex-wrap">
        <CountCard
          background={"bg-white"}
          count={"0"}
          title={"Total Students"}
          Icon={StudentsIcon}
        />
        <CountCard
          background={"bg-white"}
          count={"0"}
          title={"Total Parents"}
          Icon={ParentsIcon}
        />
        <CountCard
          background={"bg-white"}
          count={"0"}
          title={"Total Employees"}
          Icon={StudentsIcon}
        />
        <CountCard
          background={"bg-white"}
          count={"0"}
          title={"Total Revenue"}
          Icon={EmployeesIcon}
        />
      </div>
      <div className="flex flex-col xl:flex-row w-full justify-between gap-6 mt-6">
        <div className="flex justify-center flex-grow bg-white border border-gray-300 p-3 xl:w-[65%] w-full rounded-md">
          <LineChart />
        </div>
        <div className="flex justify-center items-center bg-white border xl:w-[35%] w-full border-gray-300 p-5 rounded-md">
          <CustomPieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
