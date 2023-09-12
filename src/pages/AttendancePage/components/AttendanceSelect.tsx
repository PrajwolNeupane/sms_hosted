import { useState } from "react";

const AttendanceSelect = () => {
  const [selectedOption, setSelectedOption] = useState("present");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        name=""
        id="attendance"
        className={`border rounded-md p-2 ${
          selectedOption === "present" ? "text-green-400" : "text-red-400"
        }`}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>
    </div>
  );
};

export default AttendanceSelect;
