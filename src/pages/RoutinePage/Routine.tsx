import RoutineTable from "./components/RoutineTable";

function Routine() {
  return (
    <div className="flex w-full flex-col bg-white m-8 overflow-y-scroll no-scrollbar rounded-lg ">
      <div className="flex w-full h-24 gap-10 p-5 justify-end">
        <div className="flex flex-row w-3/12 gap-3 items-center ">
          <label htmlFor="">Select a Class</label>
          <select
            name="class"
            className="w-1/2 border border-gray-300 rounded-lg h-12"
          >
            <option value="">Class 1</option>
            <option value="">Class 2</option>
            <option value="">Class 3</option>
            <option value="">Class 4</option>
            <option value="">Class 5</option>
            <option value="">Class 6</option>
            <option value="">Class 7</option>
            <option value="">Class 8</option>
            <option value="">Class 9</option>
            <option value="">Class 10</option>
          </select>
        </div>
        <div className=" flex flex-row gap-3 w-3/12 items-center">
          <label htmlFor="">Select a Section</label>
          <select
            name="section"
            className="w-1/2 border border-gray-300 rounded-lg h-12"
          >
            <option value="">Section 1</option>
            <option value="">Section 2</option>
            <option value="">Section 3</option>
            <option value="">Section 4</option>
            <option value="">Section 5</option>
            <option value="">Section 6</option>
            <option value="">Section 7</option>
            <option value="">Section 8</option>
            <option value="">Section 9</option>
            <option value="">Section 10</option>
          </select>
        </div>
      </div>

      <div className="">
        <RoutineTable />
      </div>
    </div>
  );
}

export default Routine;
