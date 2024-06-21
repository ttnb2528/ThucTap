import React, { useState } from "react";
import { toast } from "react-toastify";
// icons
import { GrLinkPrevious } from "react-icons/gr";

// api
import { API_CREATE_CAREER } from "~/API/Career/createCareer.api.js";

// functions
import { getToken } from "~/functions/getToken";

const ModalAddTrainingFields = ({ handleHideAddModal, fetchCareer }) => {
  const [form, setForm] = useState({
    code: "",
    name: "",
    levelStraining: "",
    Circulars: "",
    levelDecision: "",
    numberDecision: "",
    dateDecision: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // console.log(form);

    const result = await API_CREATE_CAREER(getToken(), form);
    console.log(result);

    if (result.status === 200 && result.data.status === 200) {
      toast.success(result.data.message);
      fetchCareer();
      handleHideAddModal();
    } else {
      toast.error(result.data.message);
    }
  };

  
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[60%] h-[75%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center my-3 text-2xl font-semibold">
          <span className="pl-3 cursor-pointer" onClick={handleHideAddModal}>
            <GrLinkPrevious />
          </span>
          <h1>Thêm ngành</h1>
          <div></div>
        </div>

        <div className="dash"></div>

        <h1 className="font-semibold text-lg p-3">Thông tin chung</h1>
        <div className="mt-3 grid md:grid-cols-2 gap-5 pl-4 pr-3">
          <div className="grid">
            <label>Mã ngành nghề</label>
            <input
              name="code"
              value={form.code}
              type="text"
              placeholder="Nhập mã ngành nghề"
              className="bg-white pl-2 py-0 w-full rounded-md flex-1 border outline-none border-slate-300 placeholder:opacity-60 placeholder:text-xs h-[35px]"
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <label>Tên ngành</label>
            <input
              value={form.name}
              name="name"
              type="text"
              placeholder="Nhập tên ngành"
              className="bg-white pl-2 py-0 w-full rounded-md flex-1 border outline-none border-slate-300 placeholder:opacity-60 placeholder:text-xs h-[35px]"
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <label>Trình độ đào tạo</label>
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
          </div>

          <div className="grid">
            <label>Thông tư</label>
            <select
              name="Circulars"
              value={form.Circulars}
              onChange={handleChange}
            >
              <option selected>Chọn thông tư</option>
              <option value="14/02/2021 - Thông tư 26">
                14/02/2021 - Thông tư 26
              </option>
              <option value="15/03/2019 - Thông tư 06">
                15/03/2019 - Thông tư 06
              </option>
            </select>
          </div>

          <div className="grid">
            <label>Cấp quyết định</label>
            <select
              name="levelDecision"
              value={form.levelDecision}
              onChange={handleChange}
            >
              <option selected>Chọn cấp quyết định</option>
              <option value="Cấp Cơ sở dạy nghề">Cấp Cơ sở dạy nghề</option>
              <option value="Cấp Khoa">Cấp Khoa</option>
              <option value="Cấp Tỉnh/Thành phố">Cấp Tỉnh/Thành phố</option>
              <option value="Cấp Bộ/ngành">Cấp Bộ/ngành</option>
              <option value="Cấp Nhà nước">Cấp Nhà nước</option>
            </select>
          </div>

          <div className="grid">
            <label>Số quyết định</label>
            <input
              value={form.numberDecision}
              name="numberDecision"
              type="text"
              placeholder="Nhập số quyết định"
              className="bg-white pl-2 py-0 w-full rounded-md flex-1 border outline-none border-slate-300 placeholder:opacity-60 placeholder:text-xs h-[35px]"
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <label>Ngày quyết định</label>
            <input
              value={form.dateDecision}
              name="dateDecision"
              type="date"
              placeholder="Nhập ngày quyết định"
              className="bg-white pl-2 py-0 w-full rounded-md flex-1 border outline-none border-slate-300 placeholder:opacity-60 placeholder:text-xs h-[35px]"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
            className="border bg-primary p-2 text-white rounded-lg"
            onClick={handleSubmit}
          >
            Thêm môn
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTrainingFields;
