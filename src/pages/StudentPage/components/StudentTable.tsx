import SearchIcon from "../../../assets/icons/SearchIcon";
import BinIcon from "../../../assets/icons/BinIcon";
import DropDown from "../../ParentPage/component/DropDown";
import CustomBreadCrumb from "../../../components/Breadcrumb/CustomBreadcrumb";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import { Link } from "react-router-dom";
import { useState } from "react";

const StudentTable = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // You can also fetch new data for the selected page here
  };

  return (
    <div className="flex flex-col items-center w-full px-10 rounded-lg">
      {/* image area */}
      <div className="flex flex-wrap gap-3 w-full items-center justify-between py-8">
        <CustomBreadCrumb
          title="Student"
          list={[{ name: "All Student", link: "/student" }]}
        />
        <Link to="addStudent">
          <button className="bg-primary text-white w-[150px] text-lg font-[300] py-2 rounded-md">
            + Add new
          </button>
        </Link>
      </div>
      <div className="flex flex-col h-4/5 items-center w-full">
        {/* {data.parents.length === 0 && ( */}
        {/*   <div className="flex flex-col flex-grow justify-center items-center w-full"> */}
        {/*     <img src={illustration3} className="h-[400px]"   /> */}
        {/*     <p className="text-lg">No Result Found</p> */}
        {/*   </div> */}
        {/* )} */}
        {
          <div className=" flex flex-col h-full bg-white rounded-md w-full overflow-y-scroll">
            <div className="flex justify-between px-10 py-2 items-center">
              <div className="flex gap-2 text-sm text-primary">
                <div>show</div>
                <div>
                  <select
                    name=""
                    id="entries"
                    className="bg-gray-200 rounded-sm"
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
                <div>entries</div>
                <BinIcon height="20" width="20" color=""></BinIcon>
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
                    <input type="checkbox" />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Grade
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {data.map((curr: any, indx: number) => (
                  <tr className="bg-white border-b text-primary" key={indx}>
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4">{curr?.id}</td>
                    <td className="px-6 py-4">
                      {curr?.profile == "" ? (
                        <div className="h-12 w-12 bg-primary rounded-full"></div>
                      ) : (
                        <img
                          src={
                            import.meta.env.VITE_REACT_API_URL +
                            "/" +
                            curr?.profile
                          }
                          className="h-12 w-12 object-cover rounded-full"
                        />
                      )}
                    </td>

                    <td className="px-6 py-4">{curr?.email}</td>
                    <td className="px-6 py-4">
                      {curr?.firstname +
                        " " +
                        curr?.middlename +
                        " " +
                        curr?.lastname}
                    </td>
                    <td className="px-6 py-4">10</td>
                    <td className="px-6 py-4">{curr?.contact}</td>
                    <td className="px-6 py-4 ">
                      <DropDown />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
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
        <h4 className="text-lg font-[400] text-primary my-5">
          © Copyrights ShotCoder Tech 2023. All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default StudentTable;
