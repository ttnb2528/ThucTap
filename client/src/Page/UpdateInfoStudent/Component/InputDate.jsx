import React from "react";
import ReactDatePicker from "react-datepicker";

const InputDate = ({
  label,
  selectedDate,
  setSelectedDate,
  required,
}) => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <label className="font-semibold text-xs capitalize" htmlFor="date">
          {label}
        </label>
        {required && <span className="text-red-500 ml-1">*</span>}
      </div>

      <ReactDatePicker
        className="h-[35px] w-[235px] mt-[4px]"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Chọn ngày"
      />
    </div>
  );
};

export default InputDate;
