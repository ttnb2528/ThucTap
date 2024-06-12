export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  multiline,
  select,
  required,
  options,
  value,
  onChange,
  province_id,
  handleSelectedProvince,
}) => {
  const input_tailwind =
    "bg-white pl-2 py-0 w-full rounded-md flex-1 border outline-none border-slate-300 placeholder:opacity-60 placeholder:text-xs h-[35px]";

  const handleChange = (e) => {
    onChange(e);
    if (select && province_id) {
      handleSelectedProvince(e.target.value);
    }
  };
  return (
    <div className="grid">
      <div className="flex items-center">
        <label htmlFor={id} className="font-semibold text-xs capitalize">
          {label}
        </label>
        {required ? (
          <span className="text-red-500 ml-1 text-xs">*</span>
        ) : (
          <span></span>
        )}
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
        <select
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
          className="h-[35px]"
        >
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
