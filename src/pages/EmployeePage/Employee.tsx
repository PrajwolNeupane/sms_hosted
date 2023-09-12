import EmployeeTable from "./components/EmployeeTable";
import { Puff } from "react-loader-spinner";
import { useState, useEffect } from "react";

const Employee = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

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

  return <EmployeeTable />;
};

export default Employee;
