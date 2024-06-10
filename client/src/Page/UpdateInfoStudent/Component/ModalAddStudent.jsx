import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

// Components
import { Input } from "./Input.jsx";

// icons
import { GrLinkPrevious } from "react-icons/gr";

// utils
import {
  name_validation,
  code_validation,
  cccd_validation,
  address_validation,
  phone_validation,
  ethnic_validation,
  isSex_validation,
  levelTraining_validation,
  career_validation,
} from "~/utils/InputValidation.js";

// api
import { API_LIST_CAREER } from "~/API/Career/ListCareer.api.js";
import { API_CREATE_STUDENT } from "~/API/Student/createStudent.api.js";

// functions
import { getToken } from "~/functions/getToken.js";

const ModalAddStudent = ({ handleHideAddModal, fetchStudent }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [careers, setCareers] = useState([]);
  const [form, setForm] = useState({
    code: "",
    fullName: "",
    date: new Date(),
    isSex: "",
    cccd: "",
    ethnic: "",
    address: "",
    phone: "",
    levelTraining: "",
    career: "",
  });

  const fetchCareer = async () => {
    const result = await API_LIST_CAREER(getToken());
    console.log(result);
    if (result.status === 200 && result.data.status === 200) {
      const careerOptions = result.data.data.map((career) => {
        return {
          name: career.name,
          value: career._id,
        };
      });

      careerOptions.unshift({
        name: "Chọn ngành nghề",
        value: "",
      });

      setCareers(careerOptions);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  useEffect(() => {
    setForm({
      ...form,
      date: selectedDate,
    });
  }, [selectedDate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.clear();
    console.log(form);
    const result = await API_CREATE_STUDENT(getToken(), form);
    console.log(result);
    if (result.status === 200 && result.data.status === 300) {
      return toast.warn(result.data.message);
    }

    if (result.status === 200 && result.data.status === 200) {
      toast.success(result.data.message);
      fetchStudent();
      handleHideAddModal();
    }
  };

  career_validation.options = careers;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[40%] h-[85%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className="flex justify-between items-center my-3 text-2xl font-semibold"
          onClick={handleHideAddModal}
        >
          <span className="pl-3">
            <GrLinkPrevious />
          </span>
          <h1>Thêm lý lịch sinh viên</h1>
          <div></div>
        </div>
        <div className="dash"></div>
        <div className="mt-3 grid md:grid-cols-2 gap-5 p-3">
          <Input
            {...name_validation}
            value={form.fullName}
            onChange={handleInputChange}
          />
          <Input
            {...code_validation}
            value={form.code}
            onChange={handleInputChange}
          />
          <div className="flex flex-col w-full ">
            <label className="font-semibold capitalize" htmlFor="date">
              Ngày sinh
            </label>
            <DatePicker
              value={form.date}
              className="w-full p-2"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
          <Input
            {...cccd_validation}
            value={form.cccd}
            onChange={handleInputChange}
          />
          <Input
            {...address_validation}
            value={form.address}
            onChange={handleInputChange}
          />
          <Input
            {...ethnic_validation}
            value={form.ethnic}
            onChange={handleInputChange}
          />
          <Input
            {...phone_validation}
            value={form.phone}
            onChange={handleInputChange}
          />
          <Input
            {...isSex_validation}
            value={form.isSex}
            onChange={handleInputChange}
          />
          <Input
            {...career_validation}
            value={form.career}
            onChange={handleInputChange}
          />

          <Input
            {...levelTraining_validation}
            value={form.levelTraining}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center items-center py-3">
          <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            ThemeF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddStudent;
