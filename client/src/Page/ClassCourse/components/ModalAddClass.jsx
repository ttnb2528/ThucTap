import React, { useEffect, useState } from "react";

// icons
import { GrLinkPrevious } from "react-icons/gr";

// apis
import { API_LIST_CAREER } from "../../../API/Career/ListCareer.api.js";

// functions
import { getToken } from "~/functions/getToken";

const ModalAddClass = ({ handleHideAddModal }) => {
  const [careers, setCareers] = useState([]);
  const [form, setForm] = useState({
    className: "",
    career: "",
    levelStraining: "",
    year: "",
    // course: "",
    students: "",
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

  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear, currentYear + 1];
  const courseYears = [
    `${currentYear - 1} - ${currentYear}`,
    `${currentYear} - ${currentYear + 1}`,
    `${currentYear + 1} - ${currentYear + 2}`,
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[50%] h-[70%] bg-white rounded-md relative overflow-y-scroll"
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
              <option selected>Chọn ngành</option>
              {careers.map((career) => (
                <option key={career._id} value={career._id}>
                  {career.name}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="grid">
            <label className="font-semibold">Trình độ đào tạo:</label>
            <select
              name="levelStraining"
              value={form.levelStraining}
              onChange={handleChange}
            >
              <option selected>Chọn trình độ đào tạo</option>
              <option value="Sơ cấp">Sơ cấp</option>
              <option value="Trung cấp">Trung cấp</option>
              <option value="Cao đăng">Cao đẳng</option>
            </select>
          </div> */}

          <div className="grid">
            <label className="font-semibold">Năm:</label>
            <select name="year" value={form.year} onChange={handleChange}>
              <option selected>Chọn năm</option>
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
              <option selected>Chọn Khóa</option>
              {courseYears.map((courseYear) => (
                <option key={courseYear} value={courseYear}>
                  {courseYear}
                </option>
              ))}
            </select>
          </div>

          <div className="grid">
            <label className="font-semibold">Sinh viên:</label>
            <input
              type="text"
              name="className"
              placeholder="Nhập tên lớp"
              className="bg-white pl-2 py-0 w-full rounded-md flex-1 border outline-none border-slate-300 placeholder:opacity-60 placeholder:text-xs h-[35px]"
            />
            {/* <button
              title="Chi tiết"
              className="bg-primary font-semibold text-xs mb-1 text-white px-[4px] rounded-xl"
            >
              <Link to={"/capnhatlylichsinhvien"}>&#62;</Link>
            </button> */}
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
            className="border bg-primary p-2 text-white rounded-lg"
            onClick={handleHideAddModal}
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddClass;
