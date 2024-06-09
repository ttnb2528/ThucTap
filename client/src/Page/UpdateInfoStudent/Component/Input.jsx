export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  multiline,
  select,
  options,
  value,
  onChange,
}) => {
  const input_tailwind =
    "bg-white p-2 font-medium rounded-md w-full border outline-none border-slate-300 placeholder:opacity-60";
  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      {multiline ? (
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          className={input_tailwind}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : select ? (
        <select name={name} id={id} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          id={id}
          placeholder={placeholder}
          className={input_tailwind}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};
