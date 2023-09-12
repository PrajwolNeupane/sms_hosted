import { Link, useParams } from "react-router-dom";
import BellIcon from "../../assets/icons/BellIcon";
import CustomBreadCrumb from "../../components/Breadcrumb/CustomBreadcrumb";
import { getSingleParent } from "../../features/endpoints/service/parent";
import { useQuery } from "react-query";
import { useEffect } from "react";

const ViewParent = () => {
  const { id } = useParams();

  const {
    data: parentData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["parent"],
    queryFn: () => getSingleParent(id!),
    refetchOnWindowFocus: true,
    retry: false,
  });
  useEffect(() => {
    console.log(parentData);
  }, [parentData]);

  return (
    <div className="flex flex-col w-full px-10">
      <CustomBreadCrumb
        title="Parent"
        list={[
          { name: "All Parent", link: "/parent" },
          { name: "View Details", link: " " },
        ]}
        className="py-8"
      />
      <div className="flex flex-col gap-4 justify-between bg-white p-5 rounded-md w-full">
        <div className="flex flex-row justify-between">
          <h4 className="text-xl font-semibold text-primary">Parent Details</h4>
          <BellIcon height="20px" width="20px" color="black" />
        </div>
        <hr className="w-[calc(100%+40px)] translate-x-[-20px] h-[2px] bg-gray-500" />
        <h4 className="text-[18px] font-[500] text-primary">
          Basic Information
        </h4>
        <div className="flex md:flex-row flex-col gap-5 items-start">
          <img
            src={import.meta.env.VITE_REACT_API_URL + "/" + parentData?.profile}
            className="w-[200px] aspect-square object-cover rounded-md"
          />
          <div className="flex flex-col overflow-auto">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2">
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Parents Name
                </h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.firstname +
                    " " +
                    parentData?.middlename +
                    " " +
                    parentData?.lastname}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Email</h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.email}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Phone</h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.contact}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Parents ID</h3>
                <h2 className="text-primary text-base font-[500]">
                  {" "}
                  {parentData?.parent_id}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">City</h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.city}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Country</h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.country}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Religion</h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.religion}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Blood Group
                </h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.blood}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Gender</h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.gender}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Relation</h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.relation}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Occupation</h3>
                <h2 className="text-primary text-base font-[500]">
                  {parentData?.occupation}
                </h2>
              </div>
            </div>
            <h4 className="text-[18px] font-[500] text-primary mt-5">
              Child Information
            </h4>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  First Child
                </h3>
                <h2 className="text-primary text-base font-[500]">Haru Rai</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Second Child
                </h3>
                <h2 className="text-primary text-base font-[500]">Haru Rai</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Third Child
                </h3>
                <h2 className="text-primary text-base font-[500]">Haru Rai</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Fourth Child
                </h3>
                <h2 className="text-primary text-base font-[500]">Haru Rai</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-6 py-5">
        <button className="bg-[#cc3939] text-white text-lg font-[400] w-[150px] py-2 rounded-md">
          Delete
        </button>
        <Link to={`/parent/edit/${id}`}>
          <button className="bg-primary text-white text-lg font-[400] w-[150px] py-2 rounded-md">
            Edit
          </button>
        </Link>
      </div>
      <div className="py-5">
        <h4 className="text-lg font-[400] text-primary text-center">
          © Copyrights ShotCoder Tech 2023. All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default ViewParent;
