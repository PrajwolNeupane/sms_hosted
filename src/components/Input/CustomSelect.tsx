
type Option = {
  value: string;
  label: string;
};

type CustomSelectProps<T> = {
  options: Option[];
  value?: string;
  register?: T;
  disable?: boolean;
};

const CustomSelect = <T,>({
  options,
  value,
  register,
  disable,
}: CustomSelectProps<T>) => {
  return (
    <select
      disabled={disable}
      value={value}
      {...register} // Assuming you'll pass the "name" property in register
      className="border h-10 w-full rounded-md p-2 focus:outline-primary"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
