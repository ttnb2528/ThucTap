import React, { useEffect, useState } from "react";
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
  address_validation,
  province_validation,
  district_validation,
  wards_validation,
  phone_validation,
  ethnic_validation,
  nationality_validation,
  isSex_validation,
  educationLevel_validation,
  typeOfAdmission_validation,
  typeOfTraining_validation,
  formOfTraining_validation,
  admissionObject_validation,
  levelTraining_validation,
  career_validation,
  cccd_validation,
  place_cccd_validation,
  email_validation,
  guardianName_validation,
  relationshipWithStudent_validation,
  cccd_guardian_validation,
  phone_guardian_validation,
  religion_validation,
  policyObject_validation,
  priorityObject_validation,
  place_group_validation,
  place_party_validation,
  course_validation,
  classCourse_validation,
} from "~/utils/InputValidation.js";

// api
import { API_LIST_CAREER } from "~/API/Career/ListCareer.api.js";
import { API_CREATE_STUDENT } from "~/API/Student/createStudent.api.js";

// functions
import { getToken } from "~/functions/getToken.js";
import InputDate from "./InputDate.jsx";

const ModalAddStudent = ({ handleHideAddModal, fetchStudent }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCccd_date, setSelectedCccd_date] = useState(new Date());
  const [careers, setCareers] = useState([]);
  const [form, setForm] = useState({
    code: "",
    fullName: "",
    date: new Date(),
    cccd_date: new Date(),
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
        className="w-[50%] h-[85%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center my-3 text-2xl font-semibold">
          <span className="pl-3 cursor-pointer" onClick={handleHideAddModal}>
            <GrLinkPrevious />
          </span>
          <h1>Thêm lý lịch sinh viên</h1>
          <div></div>
        </div>
        <div className="dash"></div>
        <div className="pl-3 my-2 font-bold">Thông tin sinh viên</div>
        <div className="mt-3 grid md:grid-cols-3 gap-5 p-3">
          <Input
            {...code_validation}
            value={form.code}
            onChange={handleInputChange}
          />

          <Input
            {...name_validation}
            value={form.fullName}
            onChange={handleInputChange}
          />

          <InputDate
            label={"Ngày sinh"}
            value={form.date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <Input
            {...cccd_validation}
            value={form.cccd}
            onChange={handleInputChange}
          />

          <Input
            {...place_cccd_validation}
            value={form.cccd}
            onChange={handleInputChange}
          />

          <InputDate
            label={"Ngày cấp"}
            value={form.cccd_date}
            selectedDate={selectedCccd_date}
            setSelectedDate={setSelectedCccd_date}
          />

          <Input
            {...phone_validation}
            value={form.phone}
            onChange={handleInputChange}
          />

          <Input
            {...email_validation}
            value={form.email}
            onChange={handleInputChange}
          />

          <Input
            {...isSex_validation}
            value={form.isSex}
            onChange={handleInputChange}
          />

          <Input
            {...ethnic_validation}
            value={form.ethnic}
            onChange={handleInputChange}
          />

          <Input
            {...religion_validation}
            value={form.religion}
            onChange={handleInputChange}
          />

          <Input
            {...nationality_validation}
            value={form.nationality}
            onChange={handleInputChange}
          />

          <Input
            {...guardianName_validation}
            value={form.guardianName}
            onChange={handleInputChange}
          />

          <Input
            {...relationshipWithStudent_validation}
            value={form.relationshipWithStudent}
            onChange={handleInputChange}
          />

          <Input
            {...phone_guardian_validation}
            value={form.phone_guardian}
            onChange={handleInputChange}
          />

          <Input
            {...cccd_guardian_validation}
            value={form.cccd_guardian}
            onChange={handleInputChange}
          />

          <InputDate
            label={"Ngày vào đoàn"}
            value={form.date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <Input
            {...place_group_validation}
            value={form.place_group}
            onChange={handleInputChange}
          />

          <InputDate
            label={"Ngày vào đảng"}
            value={form.date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <Input
            {...place_party_validation}
            value={form.place_party}
            onChange={handleInputChange}
          />

          <Input
            {...course_validation}
            value={form.course}
            onChange={handleInputChange}
          />

          <Input
            {...classCourse_validation}
            value={form.classCourse}
            onChange={handleInputChange}
          />
        </div>
        <div className="pl-3 my-2 font-bold">Địa chỉ liên lạc</div>
        <div className="mt-3 grid md:grid-cols-3 gap-5 p-3">
          <Input
            {...address_validation}
            value={form.address}
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

          <Input
            {...province_validation}
            value={form.province}
            onChange={handleInputChange}
          />

          <Input
            {...district_validation}
            value={form.district}
            onChange={handleInputChange}
          />

          <Input
            {...wards_validation}
            value={form.wards}
            onChange={handleInputChange}
          />
        </div>
        <div className="pl-3 my-2 font-bold">Thông tin khác</div>
        <div className="mt-3 grid md:grid-cols-3 gap-5 p-3">
          <Input
            {...educationLevel_validation}
            value={form.educationLevel}
            onChange={handleInputChange}
          />

          <Input
            {...typeOfAdmission_validation}
            value={form.typeOfAdmission}
            onChange={handleInputChange}
          />

          <Input
            {...typeOfTraining_validation}
            value={form.typeOfTraining}
            onChange={handleInputChange}
          />

          <Input
            {...formOfTraining_validation}
            value={form.formOfTraining}
            onChange={handleInputChange}
          />

          <Input
            {...admissionObject_validation}
            value={form.admissionObject}
            onChange={handleInputChange}
          />

          <Input
            {...policyObject_validation}
            value={form.policyObject}
            onChange={handleInputChange}
          />

          <Input
            {...priorityObject_validation}
            value={form.priorityObject}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center items-center py-3">
          <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddStudent;
