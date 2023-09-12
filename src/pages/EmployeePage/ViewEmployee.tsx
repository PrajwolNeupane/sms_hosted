import PrintIcon from "../../assets/icons/PrintIcon";
import CustomBreadCrumb from "../../components/Breadcrumb/CustomBreadcrumb";

const ViewEmployee = () => {
  return (
    <div className="flex flex-col w-full px-10">
      <CustomBreadCrumb
        title="Employee"
        list={[{ name: "All Employee" ,link:'/employee'}, { name: "View Details",link:" " }]}
        className="py-8"
      />
      <div className="flex flex-col gap-4 justify-between bg-white p-5 rounded-md w-full">
        <div className="flex flex-row justify-between">
          <h4 className="text-xl font-semibold text-primary">
            Employee Details
          </h4>
          <PrintIcon height="30" width="24" color="#24394d" />
        </div>
        <hr className="w-[calc(100%+40px)] translate-x-[-20px] h-[2px] bg-gray-500" />
        <h4 className="text-[18px] font-[500] text-primary">
          Basic Information
        </h4>
        <div className="flex md:flex-row flex-col gap-5 items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rAVOmLc2BfEXVuUm1q9OAN5IqejLKutDAc_u_QrI&s"
            className="w-[200px] aspect-square object-cover rounded-md"
          />
          <div className="flex flex-col overflow-auto">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2">
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Employee Name
                </h3>
                <h2 className="text-primary text-base font-[500]">John Doe</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Email</h3>
                <h2 className="text-primary text-base font-[500]">
                  prajwolneupane68@gmail.com
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Phone</h3>
                <h2 className="text-primary text-base font-[500]">
                  +977-9876543210
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Employee ID
                </h3>
                <h2 className="text-primary text-base font-[500]">230823</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">City</h3>
                <h2 className="text-primary text-base font-[500]">
                  Kathmandu, Bagmati State, 44600
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Country</h3>
                <h2 className="text-primary text-base font-[500]">Nepal</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Religion</h3>
                <h2 className="text-primary text-base font-[500]">Buddhist</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Blood Group
                </h3>
                <h2 className="text-primary text-base font-[500]">A+</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Gender</h3>
                <h2 className="text-primary text-base font-[500]">Male</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Job Type</h3>
                <h2 className="text-primary text-base font-[500]">Part-time</h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">Job Title</h3>
                <h2 className="text-primary text-base font-[500]">
                  Science Teacher
                </h2>
              </div>
              <div>
                <h3 className="text-gray-500 text-lg font-[400]">
                  Qualification
                </h3>
                <h2 className="text-primary text-base font-[500]">
                  Bachelors Degree
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-6 py-5">
        <button className="bg-[#cc3939] text-white text-lg font-[400] w-[150px] py-2 rounded-md">
          Delete
        </button>
        <button className="bg-primary text-white text-lg font-[400] w-[150px] py-2 rounded-md">
          Edit
        </button>
      </div>
      <div className="py-5">
        <h4 className="text-lg font-[400] text-primary text-center">
          © Copyrights ShotCoder Tech 2023. All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default ViewEmployee;
