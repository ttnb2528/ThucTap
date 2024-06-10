import React from "react";
import ReactDatePicker from "react-datepicker";

const InputDate = ({ label, value, selectedDate, setSelectedDate }) => {
  return (
    <div className="grid">
      <div className="flex items-center">
        <label className="font-semibold text-xs capitalize" htmlFor="date">
          {label}
        </label>
        <span className="text-red-500 ml-1">*</span>
      </div>

      <ReactDatePicker
        className="h-[35px] w-[235px] mt-[4px]"
        value={value}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
};

export default InputDate;
