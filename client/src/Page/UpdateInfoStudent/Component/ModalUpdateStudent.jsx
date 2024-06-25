import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
// Components
import { Input } from "./Input.jsx";
import InputDate from "./InputDate.jsx";

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

// functions
import { getToken } from "~/functions/getToken.js";
import { API_UPDATE_STUDENT } from "../../../API/Student/updateStudent.api.js";
import { API_GET_PROVINCE } from "../../../API/Location/getProvince.api.js";
import { API_GET_DISTRICT } from "../../../API/Location/getDistrict.api.js";
import { API_GET_WARD } from "../../../API/Location/getWard.api.js";
import { API_LIST_CLASS_CAREER } from "../../../API/Class/listClassWithCareer.api.js";

const ModalUpdateStudent = ({ handleHideModal, fetchStudent, data }) => {
  const [selectedDate, setSelectedDate] = useState(data?.date);
  const [selectedCccd_date, setSelectedCccd_date] = useState(data?.date_cccd);
  const [selectedDateAdmission, setSelectedDateAdmission] = useState(
    data?.dateAdmission
  );
  const [selectedDate_group, setSelectedDate_group] = useState(
    data?.date_group
  );
  const [selectedDate_party, setSelectedDate_party] = useState(
    data?.date_party
  );

  const [careers, setCareers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState("");
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [selectedWardId, setSelectedWardId] = useState("");

  const [form, setForm] = useState({
    code: data?.code || "",
    fullName: data?.fullName || "",
    date: data?.date || "",
    isSex: data?.isSex || "",
    cccd: data?.cccd || "",
    date_cccd: data?.date_cccd || "",
    ethnic: data?.ethnic || "",
    phone: data?.phone || "",
    levelTraining: data?.career.levelTraining || "",
    career: data?.career._id || "",
    place_cccd: data?.place_cccd || "",
    email: data?.email || "",
    guardianName: data?.guardianName || "",
    relationshipWithStudent: data?.relationshipWithStudent || "",
    cccd_guardian: data?.cccd_guardian || "",
    phone_guardian: data?.phone_guardian || "",
    religion: data?.religion || "",
    nationality: data?.nationality || "",
    province: data?.province || "",
    district: data?.district || "",
    ward: data?.ward || "",
    policyObject: data?.policyObject || "",
    priorityObject: data?.priorityObject || "",
    date_group: data?.date_group ? data?.date_group : "",
    place_group: data?.place_group || "",
    date_party: data?.date_party ? data?.date_party : "",
    place_party: data?.place_party || "",
    dateAdmission: data?.dateAdmission || "",
    educationLevel: data?.educationLevel || "",
    typeOfAdmission: data?.typeOfAdmission || "",
    typeOfTraining: data?.typeOfTraining || "",
    formOfTraining: data?.formOfTraining || "",
    admissionObject: data?.admissionObject || "",
    course: data?.course || "",
    classCourse: data?.classCourse._id || "",
    address: data?.address || "",
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
    if (form.career) {
      fetchClass(form.career);
    } else {
      setClasses([]);
    }
  }, [form.career]);

  useEffect(() => {
    fetchCareer();
    fetchProvince();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (id) => {
    console.clear();
    // console.log(form);
    // console.log(id);

    try {
      const result = await API_UPDATE_STUDENT(getToken(), id, form);
      console.log(result);
      if (result.status === 200 && result.data.status === 200) {
        toast.success(result.data.message);
        fetchStudent();
        handleHideModal();
      }
      if (result.status === 200 && result.data.status === 300) {
        toast.warn(result.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
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

      const provinceId = result.data.data.results.find(
        (province) => province.province_id === form.province
      )?.province_id;

      // console.log(provinceId);
      setSelectedProvinceId(provinceId);

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

      const districtId = result.data.data.results.find(
        (district) => district.district_id === form.district
      )?.district_id;

      setSelectedDistrictId(districtId);

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

      const wardId = result.data.data.results.find(
        (ward) => ward.ward_id === form.ward
      )?.ward_id;

      setSelectedWardId(wardId);

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
  classCourse_validation.options = classes;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[90%] h-[90%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center my-3 text-2xl font-semibold">
          <span className="pl-3 cursor-pointer" onClick={handleHideModal}>
            <GrLinkPrevious />
          </span>
          <h1>Chỉnh sửa lý lịch sinh viên</h1>
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
                Tỉnh/Thành phố <span className="text-red-500">*</span>
              </label>
            </div>

            <select
              name="province"
              id="province"
              className="h-[35px]"
              onChange={(e) => {
                setSelectedProvinceId(e.target.value);
                setSelectedDistrictId(null);
                setSelectedWardId(null);
                setForm((prevForm) => ({
                  ...prevForm,
                  province: e.target.value,
                  district: "",
                  ward: "",
                }));
              }}
              value={selectedProvinceId}
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {provinces.map((province) => (
                <option
                  key={province.value}
                  value={province.value}
                  // selected={province.name === form.province}
                >
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
                setSelectedDistrictId(e.target.value);
                setSelectedWardId(null);
                setForm((prevForm) => ({
                  ...prevForm,
                  district: e.target.value,
                  ward: "",
                }));
              }}
              value={selectedDistrictId}
            >
              <option value="">Chọn quận/huyện</option>
              {districts.map((district) => (
                <option
                  key={district.value}
                  value={district.value}
                  // selected={district.name === form.district}
                >
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
                setSelectedWardId(e.target.value);
                setForm((prevForm) => ({
                  ...prevForm,
                  ward: e.target.value,
                }));
              }}
              value={selectedWardId}
            >
              <option value="">Chọn xã/phường/thị trấn</option>
              {wards.map((ward) => (
                <option
                  key={ward.value}
                  value={ward.value}
                  // selected={ward.name === form.ward}
                >
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
            onClick={() => handleSubmit(data._id)}
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateStudent;
