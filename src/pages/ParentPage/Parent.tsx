import { useForm } from "react-hook-form";
import {
  deleteParent,
  getParent,
} from "../../features/endpoints/service/parent";
import { useQuery } from "react-query";
import { Puff } from "react-loader-spinner";
import ParentForm from "./component/ParentForm";
import ParentTable from "./component/ParentTable";
import useToast from "../../components/Toasts/CustomToast";

const Parent = () => {
  const { handleSubmit: submitSearch, register: registerSearch } =
    useForm<SearchForm>();

  const {
    data: parent,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["parent"],
    queryFn: getParent,
    refetchOnWindowFocus: true,
    retry: false,
  });

  const searchHandler = (data: SearchForm) => {
    console.log(data);
  };

  const deleteHandler = async (id: string) => {
    try {
      const response = await deleteParent(id);
      refetch();
      //Toast not working
      useToast("Successfully Deleted Parent", false);
    } catch (e) {
      //Toast not working
      console.log(e);
      useToast("Error on deleting", true);
    }
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
    <>
      <ParentTable
        onClick={() => {}}
        data={parent?.parents}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default Parent;
