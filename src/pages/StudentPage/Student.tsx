import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import StudentTable from "./components/StudentTable";
import { Puff } from "react-loader-spinner";
import { getStudent } from "../../features/endpoints/service/student";
import { useEffect } from "react";

const Student = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: getStudent,
  });

  const { handleSubmit, register } = useForm<SearchForm>();

  useEffect(() => {
    console.log(data);
  }, [data]);

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
    <>
      <StudentTable data={data?.students} />
    </>
  );
};

export default Student;
