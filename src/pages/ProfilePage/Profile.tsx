import { Link } from "react-router-dom";
import PrintIcon from "../../assets/icons/PrintIcon";
import CustomBreadCrumb from "../../components/Breadcrumb/CustomBreadcrumb";
import { useAppSelector } from "../../features/hooks";


function Profile() {
  const auth = useAppSelector((state) => state.auth);

  return (
    <div className="flex flex-col w-full px-10">
      <CustomBreadCrumb
        title="Admin"
        list={[{ name: "View", link: " " }]}
        className="py-8"
      />
      <div className="flex flex-col gap-4 justify-between bg-white p-5 rounded-md w-full">
        <div className="flex flex-row justify-between">
          <h4 className="text-xl font-semibold text-primary">School Details</h4>
          <PrintIcon height="30" width="24" color="#24394d" />
        </div>
        <hr className="w-[calc(100%+40px)] translate-x-[-20px] h-[2px] bg-gray-500" />
        <h4 className="text-[18px] font-[500] text-primary">
          Basic Information
        </h4>
        <div className="flex md:flex-row flex-col gap-5 items-start">
          <img
            src={`${import.meta.env.VITE_REACT_API_URL}/${auth?.logo}`}
            className="w-[200px] aspect-square object-cover rounded-md"
          />
          <div className="flex flex-col overflow-auto gap-5">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2">
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  School Name
                </h3>
                <h2 className="text-primary text-base font-[500]">
                  {auth?.name}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Email</h3>
                <h2 className="text-primary text-base font-[500]">
                  {auth?.email}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Phone</h3>
                <h2 className="text-primary text-base font-[500]">
                  {auth?.phone}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Established Date
                </h3>
                <h2 className="text-primary text-base font-[500]">
                  {auth?.date}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">City</h3>
                <h2 className="text-primary text-base font-[500]">
                  {auth?.city}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Country</h3>
                <h2 className="text-primary text-base font-[500]">
                  {auth?.country}
                </h2>
              </div>
            </div>
            <div>
              <h3 className="text-gray-500 text-lg font-[400]">
                School Description
              </h3>
              <h2 className="text-gray-700 text-lg font-[500]">
                {auth?.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-6 py-5">
        <Link to={"edit"}>
          <button className="bg-primary text-white text-lg font-[400] w-[150px] py-2 rounded-md">
            Edit
          </button>
        </Link>
      </div>
      <div className="py-5 absolute bottom-0 left-[40%] ">
        <h4 className="text-lg font-[400] text-primary text-center">
          © Copyrights ShotCoder Tech 2023. All rights reserved.
        </h4>
      </div>
    </div>
  );
}

export default Profile;
