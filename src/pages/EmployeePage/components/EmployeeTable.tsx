import BinIcon from "../../../assets/icons/BinIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import DropDown from "../../ParentPage/component/DropDown";
import illustration3 from "../../../assets/illustration3.svg";

const EmployeeTable = ({ data }: any) => {
  
  
  return (
    <div className="flex flex-col items-center w-full px-10 rounded-lg  overflow-y-scroll no-scrollbar">
      <div className="flex flex-wrap gap-3 w-full items-center justify-between py-5">
        <div className="flex  gap-2 items-center">
          <h2 className="text-2xl font-semibold text-primary">Parent</h2>
          <h5 className="text-2xl font-semibold text-primary">{">"}</h5>
          <h5 className="text-xl font-medium text-primary">All Parent</h5>
        </div>
        <button className="bg-primary text-white w-[150px] text-lg font-[300] py-2 rounded-md">
          + Add new
        </button>
      </div>
      {data?.length != 0 ? (
        <div className="flex flex-col justify-between items-center w-full">
          <div className="bg-white rounded-md w-full overflow-scroll">
            <div className="relative  shadow-md sm:rounded-lg">
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
                  <BinIcon height="20" width="20"></BinIcon>
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
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-primary uppercase bg-gray-200 border-y-2 border-primary">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <input type="checkbox" />
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Photo
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Job Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-primary">
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4">1234123</td>
                    <td className="px-6 py-4">
                      <div className="h-12 w-12 bg-primary rounded-full"></div>
                    </td>
                    <td className="px-6 py-4">Raymon Bikram Basnyat</td>
                    <td className="px-6 py-4">basnetraymonn@gmail.com</td>
                    <td className="px-6 py-4">
                      <div className="w-[90px] bg-[#44ca44] text-white px-3 py-1 rounded-md text-sm">
                        <h4>Full-time</h4>
                      </div>
                    </td>
                    <td className="px-6 py-4">9802822743</td>
                    <td className="px-6 py-4">
                      <DropDown />
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-primary">
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4">1234123</td>
                    <td className="px-6 py-4">
                      <div className="h-12 w-12 bg-primary rounded-full"></div>
                    </td>
                    <td className="px-6 py-4">Raymon Bikram Basnyat</td>
                    <td className="px-6 py-4">basnetraymonn@gmail.com</td>
                    <td className="px-6 py-4">
                      {" "}
                      <div className="w-[90px] bg-[#c9ae37] text-white px-3 py-1 rounded-md text-sm">
                        <h4>Part-time</h4>
                      </div>
                    </td>
                    <td className="px-6 py-4">9802822743</td>
                    <td className="px-6 py-4">
                      <DropDown />
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-primary">
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4">1234123</td>
                    <td className="px-6 py-4">
                      <div className="h-12 w-12 bg-primary rounded-full"></div>
                    </td>
                    <td className="px-6 py-4">Raymon Bikram Basnyat</td>
                    <td className="px-6 py-4">basnetraymonn@gmail.com</td>
                    <td className="px-6 py-4">
                      <div className="w-[90px] bg-[#44ca44] text-white px-3 py-1 rounded-md text-sm">
                        <h4>Full-time</h4>
                      </div>
                    </td>
                    <td className="px-6 py-4">9802822743</td>
                    <td className="px-6 py-4">
                      <DropDown />
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-primary">
                    <td className="px-6 py-4">
                      <input type="checkbox" />
                    </td>
                    <td className="px-6 py-4">1234123</td>
                    <td className="px-6 py-4">
                      <div className="h-12 w-12 bg-primary rounded-full"></div>
                    </td>
                    <td className="px-6 py-4">Raymon Bikram Basnyat</td>
                    <td className="px-6 py-4">basnetraymonn@gmail.com</td>
                    <td className="px-6 py-4">
                      {" "}
                      <div className="w-[90px] bg-[#c9ae37] text-white px-3 py-1 rounded-md text-sm">
                        <h4>Part-time</h4>
                      </div>
                    </td>
                    <td className="px-6 py-4">9802822743</td>
                    <td className="px-6 py-4">
                      <DropDown />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col flex-grow justify-center items-center w-full ">
          <img src={illustration3} className="h-[400px]" />
          <p className="text-lg text-primary">No Result Found</p>
        </div>
      )}
      <div className="my-5">
        <h4 className="text-lg font-[400] text-primary">
          © Copyrights ShotCoder Tech 2023. All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default EmployeeTable;
