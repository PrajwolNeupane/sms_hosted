import { useForm } from "react-hook-form";
import CustomButton from "../../components/Button/CustomButton";
import { useQuery } from "react-query";
import { getParent } from "../../features/endpoints/service/parent";
import { Puff } from "react-loader-spinner";
import illustration3 from "../../assets/illustration3.svg";
import { FiSearch } from "react-icons/fi";

const Event = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["parents"],
    queryFn: getParent,
  });

  const { handleSubmit, register } = useForm<SearchForm>();
  const submitHandler = (data: SearchForm) => {
    console.log(data);
  };

  if (isLoading) {
    return (
      <div className="flex flex-grow w-full justify-center items-center">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#24394d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative flex w-full items-center border border-b-gray-300">
        <input
          className="flex flex-grow bg-gray-200 h-16 placeholder:text-primary pl-14 text-md focus:outline-none"
          placeholder="Search"
        />
        <FiSearch className={"absolute left-5 top-5 text-[22px]"} />
      </div>
      <div className="flex w-11/12 pt-5 justify-between items-center">
        <div className="text-[20px]"></div>
        <div>
          <CustomButton text={"Create Parent"} />
        </div>
      </div>
      {/* {data.parents.length === 0 && ( */}
      {/*   <div className="flex flex-col flex-grow justify-center items-center w-full"> */}
      {/*     <img src={illustration3} className="h-[400px]" /> */}
      {/*     <p className="text-lg">No Result Found</p> */}
      {/*   </div> */}
      {/* )} */}
      {
        <div className="bg-white rounded-md w-11/12 my-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-primary">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
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
              <tbody>
                <tr className="bg-white border-b text-primary">
                  <td className="px-6 py-4">
                    <div className="h-12 w-12 bg-primary rounded-full"></div>
                  </td>
                  <td className="px-6 py-4">basnetraymonn@gmail.com</td>
                  <td className="px-6 py-4">Raymon Bikram Basnyat</td>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-4">9802822743</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <CustomButton text={"Edit"} />
                      <CustomButton text={"Delete"} color={"bg-red-700"} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  );
};

export default Event;
