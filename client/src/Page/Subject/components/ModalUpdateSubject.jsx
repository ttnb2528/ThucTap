import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Icons
import { GrLinkPrevious } from "react-icons/gr";

// Api
import { API_LIST_CAREER } from "../../../API/Career/ListCareer.api.js";

// Functions
import { getToken } from "~/functions/getToken";
import { API_UPDATE_SUBJECT } from "../../../API/Subject/updateSubject.api.js";

const ModalUpdateSubject = ({ handleHideUpdateModal, data, fetchSubject }) => {
  const [form, setForm] = useState({
    code: data?.code,
    name: data?.name,
    career: data?.career._id,
    type: data?.type,
  });

  const [careers, setCareers] = useState([]);

  const fetchCareer = async () => {
    const result = await API_LIST_CAREER(getToken());
    // console.log(result);
    if (result.status === 200 && result.data.status === 200) {
      const careerOption = result.data.data.map((career) => {
        return {
          value: career._id,
          name: career.name,
        };
      });

      setCareers(careerOption);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (id) => {
    // console.log(form);
    try {
      const result = await API_UPDATE_SUBJECT(getToken(), form, id);

      if (result.status === 200 && result.data.status === 200) {
        toast.success("Cập nhật môn học thành công");
        fetchSubject();
        handleHideUpdateModal();
      }

      if (result.status === 200 && result.data.status !== 200) {
        toast.error(result.data.message);
      }
    } catch (error) {
      toast.error("Cập nhật môn học thất bại");
      console.log(error);
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[40%] h-[40%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center my-3 text-2xl font-semibold">
          <span className="pl-3 cursor-pointer" onClick={handleHideUpdateModal}>
            <GrLinkPrevious />
          </span>
          <h1>Chỉnh môn học</h1>
          <div></div>
        </div>

        <div className="dash"></div>

        <div className="mt-3 mb-5 grid md:grid-cols-2 gap-5 pl-4 pr-3">
          <div className="grid">
            <label>Mã môn</label>
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
            <label>Tên môn</label>
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
            <label>Ngành</label>
            <select name="career" value={form.career} onChange={handleChange}>
              <option value="">Chọn ngành nghề</option>
              {careers.map((career, i) => (
                <option key={i} value={career.value}>
                  {career.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid">
            <label>Loại</label>
            <select name="type" value={form.type} onChange={handleChange}>
              <option value="">Chọn loại</option>
              <option value="Chung">Chung</option>
              <option value="Cơ sở">Cơ sở</option>
              <option value="Chuyên ngành">Chuyên ngành</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center items-center mb-5">
          <button
            className="border bg-primary p-2 px-4 text-white rounded-lg"
            onClick={() => handleSubmit(data._id)}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateSubject;
