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
import { API_LIST_CLASS_CAREER } from "../../../API/Class/listClassWithCareer.api.js";
import { API_LIST_STUDENT } from "~/API/Student/listStudent.api.js";

// functions
import { getToken } from "~/functions/getToken.js";
import InputDate from "./InputDate.jsx";
import ScannerQr from "../../../utils/ScannerQr.js";
import { parseDateString } from "~/functions/parseDateString.js";

const ModalAddStudent = ({ handleHideAddModal, fetchStudent }) => {
  // date
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCccd_date, setSelectedCccd_date] = useState(null);
  const [selectedDateAdmission, setSelectedDateAdmission] = useState(null);
  const [selectedDate_group, setSelectedDate_group] = useState(null);
  const [selectedDate_party, setSelectedDate_party] = useState(null);

  // fetch api
  const [careers, setCareers] = useState([]);
  const [classes, setClasses] = useState([]);

  // fetch location
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  // handle location
  const [selectedProvinceId, setSelectedProvinceId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [selectedWardId, setSelectedWardId] = useState("");

  // modal scanner
  const [showModalScanner, setShowModalScanner] = useState(false);
  const [dataQr, setDataQr] = useState([]);

  // generate code
  const [nextStudentCode, setNextStudentCode] = useState("");

  // form
  const [form, setForm] = useState({
    code: "",
    fullName: "",
    date: "",
    date_cccd: "",
    isSex: "",
    cccd: "",
    ethnic: "Kinh",
    address: "",
    phone: "",
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
    date_group: "",
    place_group: "",
    date_party: "",
    place_party: "",
    dateAdmission: "",
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
    // console.log(result);
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

  const fetchClass = async (data) => {
    const result = await API_LIST_CLASS_CAREER(getToken(), data);
    // console.log("data: " + data);
    if (result.status === 200 && result.data.status === 200) {
      const classOptions = result.data.data.map((classItem) => ({
        name: classItem.className,
        value: classItem._id,
      }));

      if (classOptions.length === 0) {
        classOptions.unshift({
          name: "Không có lớp",
          value: "",
        });
      } else {
        classOptions.unshift({
          name: "Chọn lớp",
          value: "",
        });
      }

      setClasses(classOptions);
    } else {
      setClasses([
        {
          name: "Không có lớp",
          value: "",
        },
      ]);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  useEffect(() => {
    if (form.career) {
      fetchClass(form.career);
    } else {
      setClasses([]);
    }
  }, [form.career]);

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
    // console.clear();
    // console.log(form);
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
    // console.log(result);
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
    // console.log(result);
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
    // console.log(result);
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

  const generateStudentCode = (studentList) => {
    // Start with base code
    let baseCode = "BN";

    if (studentList && studentList.length > 0) {
      // Find hightest student code
      const highestCode = studentList.reduce((maxCode, student) => {
        const studentCode = parseInt(student.code.substring(2)); // Extract the numeric part after "BN"
        return studentCode > maxCode ? studentCode : maxCode;
      }, 0);

      // Increment the highest code to generate next code
      const nextCodeNumber = highestCode + 1;
      baseCode += nextCodeNumber.toString().padStart(6, "0"); // Format the number to 6 digits with leading zeros
    } else {
      // If no students exist, start with BN000001
      baseCode += "000001";
    }

    return baseCode;
  };

  useEffect(() => {
    const fetchStudentList = async () => {
      const result = await API_LIST_STUDENT(getToken());
      // console.log(result);
      if (result.status === 200 && result.data.status === 200) {
        const studentList = result.data.data;
        const generatedCode = generateStudentCode(studentList);
        setNextStudentCode(generatedCode);
        setForm((prevForm) => ({
          ...prevForm,
          code: generatedCode,
        }));
      }
    };

    fetchStudentList();
  }, []);

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
  classCourse_validation.options = classes;

  useEffect(() => {
    if (dataQr.length > 0) {
      // console.log(dataQr[3]);
      // console.log(parseDateString(dataQr[3]));

      setForm({
        ...form,
        cccd: dataQr[0],
        fullName: dataQr[2],
        date: parseDateString(dataQr[3]),
        isSex: dataQr[4],
        address: dataQr[5],
        date_cccd: parseDateString(dataQr[6]),
      });

      setSelectedDate(parseDateString(dataQr[3]));
      setSelectedCccd_date(parseDateString(dataQr[6]));
    }
  }, [dataQr]);

  // console.log(dataQr);

  return (
    <>
      {showModalScanner && (
        <ScannerQr
          onClose={() => setShowModalScanner(false)}
          onScanSuccess={setDataQr}
        />
      )}
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
            <button
              className="p-2 bg-blue-500 text-white rounded-md text-base mr-3"
              onClick={() => setShowModalScanner(true)}
            >
              Quét mã QR
            </button>
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
              required={true}
              label={"Ngày cấp"}
              selectedDate={selectedCccd_date}
              setSelectedDate={(date) => {
                setSelectedCccd_date(date);
                setForm((prevForm) => ({ ...prevForm, date_cccd: date }));
              }}
            />

            <InputDate
              required={true}
              label={"Ngày sinh"}
              selectedDate={selectedDate}
              setSelectedDate={(date) => {
                setSelectedDate(date);
                setForm((prevForm) => ({ ...prevForm, date }));
              }}
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
              {...career_validation}
              value={form.career}
              onChange={handleInputChange}
            />

            <Input
              {...classCourse_validation}
              value={form.classCourse}
              onChange={handleInputChange}
            />

            <Input
              {...course_validation}
              value={form.course}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-3 grid md:grid-cols-4 gap-5 p-3">
            <InputDate
              required={false}
              label={"Ngày vào đảng"}
              selectedDate={selectedDate_party}
              setSelectedDate={(date) => {
                setSelectedDate_party(date);
                setForm((prevForm) => ({ ...prevForm, date_party: date }));
              }}
            />

            <InputDate
              required={false}
              label={"Ngày vào đoàn"}
              selectedDate={selectedDate_group}
              setSelectedDate={(date) => {
                setSelectedDate_group(date);
                setForm((prevForm) => ({ ...prevForm, date_group: date }));
              }}
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
                  Tỉnh/Thành phố
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
                  Quận/Huyện
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
                  Xã/Phường/Thị trấn
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
          <div className="mt-3 grid md:grid-cols-4 gap-5 p-3">
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
            <InputDate
              required={false}
              label={"Thời gian tuyển sinh"}
              selectedDate={selectedDateAdmission}
              setSelectedDate={(date) => {
                setSelectedDateAdmission(date);
                setForm((prevForm) => ({ ...prevForm, dateAdmission: date }));
              }}
            />
          </div>
          <div className="mt-3 grid md:grid-cols-3 gap-5 p-3">
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
    </>
  );
};

export default ModalAddStudent;
