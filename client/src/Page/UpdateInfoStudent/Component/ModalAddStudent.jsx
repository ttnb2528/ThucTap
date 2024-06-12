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
import { API_GET_PROVINCE } from "../../../API/Location/getProvince.api.js";
import { API_GET_DISTRICT } from "../../../API/Location/getDistrict.api.js";
import { API_GET_WARD } from "../../../API/Location/getWard.api.js";

// functions
import { getToken } from "~/functions/getToken.js";
import InputDate from "./InputDate.jsx";

const ModalAddStudent = ({ handleHideAddModal, fetchStudent }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCccd_date, setSelectedCccd_date] = useState(new Date());
  const [careers, setCareers] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState(null);
  const [selectedDistrictId, setSelectedDistrictId] = useState(null);
  const [selectedWardId, setSelectedWardId] = useState(null);

  const [form, setForm] = useState({
    code: "",
    fullName: "",
    date: new Date(),
    date_cccd: new Date(),
    isSex: "",
    cccd: "",
    ethnic: "Kinh",
    address: "",
    phone: "",
    levelTraining: "",
    career: "",
    place_cccd: "Cục cảnh sát quản lý hành chính về trật tự xã hội",
    email: "",
    guardianName: "",
    relationshipWithStudent: "",
    cccd_guardian: "",
    phone_guardian: "",
    religion: "",
    nationality: "Việt Nam",
    province: "",
    district: "",
    ward: "",
    policyObject: "",
    priorityObject: "",
    date_group: new Date(),
    place_group: "",
    date_party: new Date(),
    place_party: "",
    dateAdmission: new Date(),
    educationLevel: "",
    typeOfAdmission: "",
    typeOfTraining: "",
    formOfTraining: "",
    admissionObject: "",
    course: "",
    classCourse: "",
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
    setForm((prevForm) => ({
      ...prevForm,
      date: selectedDate,
    }));
  }, [selectedDate]);

  useEffect(() => {
    fetchProvince();
  }, []);

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

  const fetchProvince = async () => {
    const result = await API_GET_PROVINCE();
    console.log(result);
    if (result.status === 200 && result.data.status === 200) {
      const provinceOptions = result.data.data.results.map((province) => {
        return {
          name: province.province_name,
          value: province.province_id,
        };
      });

      setProvinces(provinceOptions);
    }
  };

  const fetchDistricts = async () => {
    const result = await API_GET_DISTRICT(selectedProvinceId);
    console.log(result);
    if (result.status === 200 && result.data.status === 200) {
      const districtOptions = result.data.data.results.map((district) => {
        return {
          name: district.district_name,
          value: district.district_id,
        };
      });

      setDistricts(districtOptions);
    }
  };

  const fetchWards = async () => {
    const result = await API_GET_WARD(selectedDistrictId);
    console.log(result);
    if (result.status === 200 && result.data.status === 200) {
      const wardOptions = result.data.data.results.map((ward) => {
        return {
          name: ward.ward_name,
          value: ward.ward_id,
        };
      });

      setWards(wardOptions);
    }
  };

  useEffect(() => {
    if (selectedProvinceId) {
      fetchDistricts();
    }
  }, [selectedProvinceId]);

  useEffect(() => {
    if (selectedDistrictId) {
      fetchWards();
    }
  }, [selectedDistrictId]);

  career_validation.options = careers;
  console.log(provinces);
  console.log(form);
  console.log(selectedProvinceId);
  console.log(districts);
  console.log(selectedDistrictId);
  console.log(wards);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[90%] h-[90%] bg-white rounded-md relative overflow-y-scroll"
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
        <div className="mt-3 grid md:grid-cols-4 gap-5 p-3">
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

          <Input
            {...cccd_validation}
            value={form.cccd}
            onChange={handleInputChange}
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
            {...place_cccd_validation}
            value={form.place_cccd}
            onChange={handleInputChange}
          />

          <InputDate
            label={"Ngày cấp"}
            value={form.date_cccd}
            selectedDate={selectedCccd_date}
            setSelectedDate={setSelectedCccd_date}
          />

          <InputDate
            label={"Ngày sinh"}
            value={form.date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="mt-3 grid md:grid-cols-3 gap-5 p-3">
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

          <Input
            {...place_party_validation}
            value={form.place_party}
            onChange={handleInputChange}
          />

          <Input
            {...place_group_validation}
            value={form.place_group}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-3 grid md:grid-cols-4 gap-5 p-3">
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

          <InputDate
            label={"Ngày vào đảng"}
            value={form.date_group}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <InputDate
            label={"Ngày vào đoàn"}
            value={form.date_party}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="pl-3 my-2 font-bold">Địa chỉ liên lạc</div>
        <div className="mt-3 grid md:grid-cols-4 gap-5 p-3">
          <Input
            {...address_validation}
            value={form.address}
            onChange={handleInputChange}
          />

          <div className="grid">
            <div className="flex items-center">
              <label
                htmlFor="province"
                className="font-semibold text-xs capitalize"
              >
                Tỉnh/Thành phố <span className="text-red-500">*</span>
              </label>
            </div>
            <select
              name="province"
              id="province"
              className="h-[35px]"
              onChange={(e) => {
                const selectedProvince = provinces.find(
                  (province) => province.value === e.target.value
                );
                setForm({
                  ...form,
                  province: selectedProvince ? selectedProvince.name : "",
                  district: "",
                  ward: "",
                });
                setSelectedProvinceId(e.target.value);
              }}
              value={selectedProvinceId}
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {provinces.map((province) => (
                <option key={province.value} value={province.value}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid">
            <div className="flex items-center">
              <label
                htmlFor="district"
                className="font-semibold text-xs capitalize"
              >
                Quận/Huyện <span className="text-red-500">*</span>
              </label>
            </div>
            <select
              name="district"
              id="district"
              className="h-[35px]"
              onChange={(e) => {
                const selectedDistrict = districts.find(
                  (district) => district.value === e.target.value
                );
                setForm({
                  ...form,
                  district: selectedDistrict ? selectedDistrict.name : "",
                  ward: "",
                });
                setSelectedDistrictId(e.target.value);
              }}
              value={selectedDistrictId}
              disabled={!selectedProvinceId}
            >
              <option value="">Chọn quận/huyện</option>
              {districts.map((district) => (
                <option key={district.value} value={district.value}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid">
            <div className="flex items-center">
              <label
                htmlFor="ward"
                className="font-semibold text-xs capitalize"
              >
                Xã/Phường/Thị trấn <span className="text-red-500">*</span>
              </label>
            </div>
            <select
              name="ward"
              id="ward"
              className="h-[35px]"
              onChange={(e) => {
                const selectedWard = wards.find(
                  (ward) => ward.value === e.target.value
                );
                setForm({
                  ...form,
                  ward: selectedWard ? selectedWard.name : "",
                });
                setSelectedWardId(e.target.value);
              }}
              value={selectedWardId}
              disabled={!selectedDistrictId}
            >
              <option value="">Chọn xã/phường/thị trấn</option>
              {wards.map((ward) => (
                <option key={ward.value} value={ward.value}>
                  {ward.name}
                </option>
              ))}
            </select>
          </div>
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
