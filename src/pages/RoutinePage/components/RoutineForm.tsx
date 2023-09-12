import React from "react";
import CustomInput from "../../../components/Input/CustomInput";
import { InputFields } from "../../../constants/enum";

function RoutineForm() {
  return (
    <div className="flex flex-row gap-5 items-center text-primary text-lg leading-relaxed">
      <label htmlFor="">Subject </label>
      <CustomInput
        isValid={true}
        type={InputFields.TEXT}
        placeholder="maths / science  / social"
        register={{
          required: true,
        }}
      />
    </div>
  );
}

export default RoutineForm;
