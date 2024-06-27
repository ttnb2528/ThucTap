import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// icons
import { GrLinkPrevious } from "react-icons/gr";

// apis
import { API_LIST_CAREER } from "../../../API/Career/ListCareer.api.js";

// functions
import { getToken } from "~/functions/getToken";
import { API_CREATE_CLASS } from "../../../API/Class/createClass.api.js";

const ModalAddClass = ({ handleHideAddModal, fetchClasses }) => {
  const [careers, setCareers] = useState([]);
  const [form, setForm] = useState({
    className: "",
    career: "",
    // year: "",
    // course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchCareer = async () => {
    const result = await API_LIST_CAREER(getToken());
    // console.log(result);

    if (result.status === 200 && result.data.status === 200) {
      setCareers(result.data.data);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  const handleSubmit = async () => {
    // console.log(form);

    const result = await API_CREATE_CLASS(getToken(), form);

    if (result.status === 200 && result.data.status === 300) {
      toast.warn(result.data.message);
    }

    if (result.status === 200 && result.data.status === 200) {
      toast.success(result.data.message);
      fetchClasses();
      handleHideAddModal();
    }
  };

  // const currentYear = new Date().getFullYear();
  // const years = [currentYear - 1, currentYear, currentYear + 1];
  // const courseYears = [
  //   `${currentYear - 1}-${currentYear}`,
  //   `${currentYear}-${currentYear + 1}`,
  //   `${currentYear + 1}-${currentYear + 2}`,
  // ];

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[40%] h-[40%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center my-3 text-2xl font-semibold">
          <span className="pl-3 cursor-pointer" onClick={handleHideAddModal}>
            <GrLinkPrevious />
          </span>
          <h1>Thông tin ngành</h1>
          <div></div>
        </div>

        <div className="dash"></div>

        <h1 className="font-semibold text-lg p-3">Thông tin chung</h1>
        <div className="mt-3 grid md:grid-cols-2 gap-5 pl-4 pr-3">
          <div className="grid">
            <label className="font-semibold">Tên lớp:</label>
            <input
              type="text"
              name="className"
              value={form.className}
              onChange={handleChange}
              placeholder="Nhập tên lớp"
              className="bg-white pl-2 py-0 w-full rounded-md flex-1 border outline-none border-slate-300 placeholder:opacity-60 placeholder:text-xs h-[35px]"
            />
          </div>

          <div className="grid">
            <label className="font-semibold">Ngành:</label>
            <select name="career" value={form.career} onChange={handleChange}>
              <option value="">Chọn ngành</option>
              {careers.map((career) => (
                <option key={career._id} value={career._id}>
                  {career.name}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="grid">
            <label className="font-semibold">Năm:</label>
            <select name="year" value={form.year} onChange={handleChange}>
              <option value="">Chọn năm</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="grid">
            <label className="font-semibold">Khóa:</label>
            <select name="course" value={form.course} onChange={handleChange}>
              <option value="">Chọn Khóa</option>
              {courseYears.map((courseYear) => (
                <option key={courseYear} value={courseYear}>
                  {courseYear}
                </option>
              ))}
            </select>
          </div> */}
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
            className="border bg-primary p-2 text-white rounded-lg"
            onClick={handleSubmit}
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddClass;
