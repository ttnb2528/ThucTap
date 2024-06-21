import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_LIST_CAREER } from "~/API/Career/ListCareer.api.js";
import { API_LIST_SUBJECT } from "~/API/Subject/listSubject.api.js";
import { API_CREATE_SCHEDULE } from "../../API/Schedule/createSchedule.api.js";
import { API_GET_SCHEDULE } from "~/API/Schedule/getSchedule.api.js";

import { getToken } from "~/functions/getToken";
import TimeTable from "../../Components/TimeTable/TimeTable.jsx";

const CreateSchedule = () => {
  const [careerData, setCareerData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [startPeriod, setStartPeriod] = useState("");
  const [endPeriod, setEndPeriod] = useState("");
  const [timetableData, setTimetableData] = useState({});

  const [form, setForm] = useState({
    fullName: "",
    career: "",
    subject: "",
    dayOfWeek: "",
    session: "",
    year: "",
    period: "",
    room: "",
    classPeriod: "",
  });

  const [selectedCareer, setSelectedCareer] = useState("");
  const [periodOptions, setPeriodOptions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [name]: value };

      if (name === "career") {
        setSelectedCareer(value);
        if (value === "") {
          setSubjectData([]);
        }
      }

      if (name === "subject") {
        setStartPeriod("");
        setEndPeriod("");
        updatedForm.classPeriod = calculateClassPeriod("", "");
      }

      if (startPeriod || endPeriod) {
        updatedForm.classPeriod = calculateClassPeriod(startPeriod, endPeriod);
      }

      return updatedForm;
    });
  };

  const handlePeriodChange = (e) => {
    const { name, value } = e.target;
    if (name === "startPeriod") {
      setStartPeriod(value);
      setForm((prevForm) => ({
        ...prevForm,
        classPeriod: calculateClassPeriod(value, endPeriod),
      }));
    } else if (name === "endPeriod") {
      setEndPeriod(value);
      setForm((prevForm) => ({
        ...prevForm,
        classPeriod: calculateClassPeriod(startPeriod, value),
      }));
    }
  };

  const calculateClassPeriod = (start, end) => {
    let classPeriod = "";
    if (start && end) {
      const startInt = parseInt(start);
      const endInt = parseInt(end);
      if (startInt <= endInt) {
        classPeriod = Array.from(
          { length: endInt - startInt + 1 },
          (_, i) => startInt + i
        ).join(", ");
      }
    }
    return classPeriod;
  };

  const fetchCareer = async () => {
    try {
      const result = await API_LIST_CAREER(getToken());
      if (result.status === 200 && result.data.status === 200) {
        const careerOption = result.data.data.map((career) => {
          return {
            value: career._id,
            label: career.name,
          };
        });
        setCareerData(careerOption);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSubject = async () => {
    try {
      const result = await API_LIST_SUBJECT(getToken(), selectedCareer);
      if (result.status === 200 && result.data.status === 200) {
        const subjectOption = result.data.data.map((subject) => {
          return {
            value: subject._id,
            label: subject.name,
          };
        });
        setSubjectData(subjectOption);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (form.session === "Sáng") {
      setPeriodOptions([1, 2, 3, 4, 5]);
    } else if (form.session === "Chiều") {
      setPeriodOptions([6, 7, 8, 9, 10]);
    } else {
      setPeriodOptions([]);
    }
  }, [form.session]);

  useEffect(() => {
    fetchCareer();
  }, []);

  useEffect(() => {
    if (selectedCareer) {
      fetchSubject();
    }
  }, [selectedCareer]);

  const onSubmit = async () => {
    if (
      !startPeriod ||
      !endPeriod ||
      parseInt(startPeriod) > parseInt(endPeriod)
    ) {
      toast.error("Vui lòng nhập tiết bắt đầu và kết thúc hợp lý!");
      return;
    }
    console.log(form);

    const result = await API_CREATE_SCHEDULE(getToken(), form);
    console.log(result);

    if (result.status === 200 && result.data.status === 200) {
      toast.success(result.data.message);
      getSchedules();
    } else {
      toast.error(result.data.message);
    }
  };

  //get timetable
  const getSchedules = async () => {
    const result = await API_GET_SCHEDULE(getToken());
    // console.log(result);

    if (result.status === 200 && result.data.status === 200) {
      setTimetableData(result.data.data);
    }
  };
  useEffect(() => {
    getSchedules();
  }, []);

  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear, currentYear + 1];
  // console.log(timetableData);

  return (
    <>
      <ToastContainer />
      <div className="mx-[10%] flex justify-center gap-5 items-center mt-4 border-2 p-3">
        <div className="border rounded p-3 basis-9/12">
          <h1 className="text-2xl font-bold mb-3">Tạo lịch học</h1>
          <div className="create grid grid-cols-3 gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Chọn năm học
              </label>

              <select name="year" value={form.year} onChange={handleChange}>
                <option value="">Chọn năm học</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Chọn học kỳ
              </label>

              <select name="period" value={form.period} onChange={handleChange}>
                <option value="">Chọn học kỳ</option>
                <option value="Học kỳ 1">Học kỳ 1</option>
                <option value="Học kỳ 2">Học kỳ 2</option>
                <option value="Học kỳ 3">Học kỳ 3</option>
                <option value="Học kỳ 4">Học kỳ 4</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Chọn ngành
              </label>
              <select name="career" value={form.career} onChange={handleChange}>
                <option value="">Chọn ngành</option>
                {careerData.map((career) => (
                  <option key={career.value} value={career.value}>
                    {career.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Chọn môn học
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
              >
                <option value="">Chọn môn học</option>
                {subjectData.map((subject) => (
                  <option key={subject.value} value={subject.value}>
                    {subject.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Giáo viên
              </label>

              <input
                name="fullName"
                type="text"
                onChange={handleChange}
                placeholder="Tên giáo viên"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Chọn thứ
              </label>
              <select
                name="dayOfWeek"
                value={form.dayOfWeek}
                onChange={handleChange}
              >
                <option value="">Chọn thứ</option>
                <option value="Thứ 2">Thứ 2</option>
                <option value="Thứ 3">Thứ 3</option>
                <option value="Thứ 4">Thứ 4</option>
                <option value="Thứ 5">Thứ 5</option>
                <option value="Thứ 6">Thứ 6</option>
                <option value="Thứ 7">Thứ 7</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Chọn buổi
              </label>

              <select
                name="session"
                value={form.session}
                onChange={handleChange}
              >
                <option value="">Chọn buổi</option>
                <option value="Sáng">Sáng</option>
                <option value="Chiều">Chiều</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Chọn tiết
              </label>

              <select
                value={startPeriod}
                name="startPeriod"
                onChange={handlePeriodChange}
              >
                <option value="">Chọn tiết bắt đầu</option>
                {periodOptions.map((period) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                ))}
              </select>
              <select
                value={endPeriod}
                name="endPeriod"
                onChange={handlePeriodChange}
              >
                <option value="">Chọn tiết kết thúc</option>
                {periodOptions.map((period) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mr-2">
                Chọn phòng học
              </label>

              <input
                name="room"
                type="text"
                placeholder="Nhập phòng học"
                onChange={handleChange}
              />
            </div>
            <div></div>

            <div className="flex justify-center items-center mt-5">
              <button
                className="border bg-primary text-white px-6 py-2 rounded-lg"
                onClick={onSubmit}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
        <div className="result basis-4/12">
          <TimeTable data={timetableData} />
        </div>
      </div>
    </>
  );
};

export default CreateSchedule;
