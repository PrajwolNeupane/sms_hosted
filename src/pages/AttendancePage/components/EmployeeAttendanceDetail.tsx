import { BiImageAdd } from "react-icons/bi";
import CustomBarChart from "../../../components/Charts/CustomBarChart";
import CustomDougnotChart from "../../../components/Charts/CustomDougnotChart";
import AttendanceSelect from "./AttendanceSelect";
import CustomInput from "../../../components/Input/CustomInput";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { InputFields } from "../../../constants/enum";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { useState } from "react";

const EmployeeAttendanceDetail = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // You can also fetch new data for the selected page here
  };
  return (
    <div className="flex flex-col w-full p-10 ">
      {/* top area for profile */}
      <div className="flex felx-row gap-3 p-5 bg-white border border-gray-300 rounded-md ">
        <div>
          <div className="flex flex-col items-center md:items-start flex-grow w-full gap-5">
            <div className="relative p-1 flex items-center h-20 w-20 rounded-md bg-gray-400  group">
              <div className="flex justify-center items-center rounded-md w-full h-full hover:bg-black hover:opacity-40">
                <input
                  type={"file"}
                  className="absolute opacity-0 w-full h-full rounded-md"
                  onChange={(e) => {}}
                />
                <BiImageAdd
                  className={
                    "invisible text-[35px] text-white group-hover:visible"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-primary font-medium text-xl">Employee Name </h5>
          <h5 className="text-primary font-medium ">Science Teacher</h5>
          <h5 className="text-primary font-medium ">Part-Time</h5>
        </div>
      </div>

      {/* mid area for bar and charts */}
      <div className="flex flex-col xl:flex-row mt-10 gap-5 ">
        {/* bar chart  */}
        <div className="flex justify-center bg-white border border-gray-300 p-3 xl:w-[65%] w-full rounded-md">
          <CustomBarChart />
        </div>

        {/* Dougnet chart */}
        <div className="flex justify-center bg-white border border-gray-300 p-3 xl:w-[35%] w-full rounded-md">
          <CustomDougnotChart />
        </div>
      </div>

      {/* Area For Table */}
      <div className="mt-10">
        <div className=" flex flex-col h-full bg-white rounded-md w-full overflow-y-scroll">
          <div className="flex justify-between px-10 py-2 items-center">
            <div className="flex gap-5 text-sm text-primary">
              <div className="flex w-full flex-col gap-2">
                <CustomInput
                  isValid={true}
                  register={() => {}}
                  type={InputFields.DATE}
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <h4> - to - </h4>
              <div className="flex w-full flex-col gap-2">
                <CustomInput
                  isValid={true}
                  register={() => {}}
                  type={InputFields.DATE}
                  placeholder="YYYY-MM-DD"
                />
              </div>
            </div>
            <div className="relative flex w-1/5 items-center z-10 ">
              <div className="absolute left-6">
                <SearchIcon color="#24394d" height="25" width="25" />
              </div>
              <input
                className="flex flex-grow bg-gray-200 h-10 pl-16 text-md focus:outline-none rounded-md outline-none"
                placeholder="Search By Name  "
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-scroll z-10">
            <thead className="text-xs text-primary uppercase bg-gray-200 border-y-2 border-primary">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Attendance
                </th>
                <th scope="col" className="px-6 py-3">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-white border-b text-primary">
                <td className="px-6 py-4">2023/04/01</td>
                <td className="px-6 py-4">
                  <div>
                    <AttendanceSelect />
                  </div>
                </td>
                <td className="px-6 py-4">Sick leave</td>
              </tr>
              <tr className="bg-white border-b text-primary">
                <td className="px-6 py-4">2023/04/01</td>
                <td className="px-6 py-4">
                  <div>
                    <AttendanceSelect />
                  </div>
                </td>
                <td className="px-6 py-4">Ghumne Jane</td>
              </tr>
              <tr className="bg-white border-b text-primary">
                <td className="px-6 py-4">2023/04/01</td>
                <td className="px-6 py-4">
                  <div>
                    <AttendanceSelect />
                  </div>
                </td>
                <td className="px-6 py-4">Dashanin Aayo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* bottom area for pagination  */}
      <div className="flex flex-row w-full justify-between items-center text-sm ">
        <div className="text-gray-500">Showing 1 to 10 of 57 entries</div>
        <div className="container py-8 w-1/4">
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      {/* last section for copyrights */}
      <div>
        <h4 className="text-lg font-[400] text-primary my-5 text-center">
          © Copyrights ShotCoder Tech 2023. All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default EmployeeAttendanceDetail;
