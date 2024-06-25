import React, { useEffect, useState } from "react";
// Table, 
import { Pagination } from "antd";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "antd";

// components
import ModalAddStudent from "./Component/ModalAddStudent.jsx";
import ModalViewInfo from "./Component/ModalViewInfo.jsx";
import ModalUpdateStudent from "./Component/ModalUpdateStudent.jsx";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// functions
import { getToken } from "~/functions/getToken.js";
import { exportXLSX } from "~/functions/exportXLSX.js";

// api
import { API_LIST_STUDENT } from "~/API/Student/listStudent.api.js";
import { API_DELETE_STUDENT } from "~/API/Student/deleteStudent.js";
import { API_LIST_CAREER } from "../../API/Career/ListCareer.api.js";
import { API_LIST_CLASS } from "../../API/Class/listClass.api.js";
import { API_LIST_STUDENT_CONDITION } from "../../API/Student/listStudentWithCondition.api.js";

// icons
import { PiArrowCircleUpLight } from "react-icons/pi";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { FiUpload, FiDownload } from "react-icons/fi";
import useDebounce from "../../hooks/useDebounce.js";

const UpdateInfoStudent = () => {
  const [isModal, setIsModal] = useState(false);
  const [viewInfo, setViewInfo] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [updateStudent, setUpdateStudent] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  // const [data, setData] = useState([]);
  const [careerData, setCareerData] = useState([]);
  const [classesData, setClassesData] = useState([]);

  // table test
  const [students, setStudents] = useState([]);

  // search
  const [search, setSearch] = useState({
    fullName: "",
    cccd: "",
    course: "all",
    classCourse: "all",
    career: "all",
  });

  // pagination
  const [current, setCurrent] = useState(1);
  const pageSize = 5;

  const debounce = useDebounce(search, 500);

  const getData = async () => {
    // console.log(search);
    // console.log(debounce);
    const result = await API_LIST_STUDENT_CONDITION(getToken(), debounce);
    if (result.status === 200 && result.data.status === 200) {
      // const fetchData = result.data.data.map((student, index) => {
      //   return {
      //     stt: index + 1,
      //     code: student?.code,
      //     fullName: student?.fullName,
      //     date: moment(student?.date).format("DD-MM-YYYY"),
      //     isSex: student?.isSex,
      //     cccd: student?.cccd,
      //     ethnic: student?.ethnic,
      //     address: student?.address,
      //     phone: student?.phone,
      //     operation: (
      //       <div className="flex justify-between items-center ">
      //         <span
      //           className="cursor-pointer hover:text-blue-500"
      //           onClick={() => handleViewInfo(student)}
      //         >
      //           <FaEye />
      //         </span>
      //         <span
      //           className="cursor-pointer hover:text-blue-500"
      //           onClick={() => handleModalUpdate(student)}
      //         >
      //           <FaEdit />
      //         </span>
      //         <span
      //           className="cursor-pointer hover:text-blue-500"
      //           // onClick={() => handleDelete(student._id)}
      //           onClick={() => confirmDelete(student._id)}
      //         >
      //           <FaTrash />
      //         </span>
      //       </div>
      //     ),
      //   };
      // });
      // setData(fetchData);
      setStudents(result.data.data);
      setSheetData(result.data.data);
    }
  };

  useEffect(() => {
    getData();
  }, [debounce]);

  // export xlsx data
  const [sheetData, setSheetData] = useState(null);

  // delete
  const [studentToDelete, setStudentToDelete] = useState(null);

  useEffect(() => {
    if (studentToDelete !== null) {
      Modal.confirm({
        title: "Xác nhận xóa",
        content: "Bạn có chắc muốn xóa sinh viên này này không?",
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          handleDelete(studentToDelete);
        },
        onCancel() {
          setStudentToDelete(null);
        },
      });
    }
  }, [studentToDelete]);

  const confirmDelete = (id) => {
    setStudentToDelete(id);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const result = await API_DELETE_STUDENT(getToken(), id);
    console.log(result);
    if (result.status === 200 && result.data.status === 500) {
      return toast.error(result.data.message);
    }

    if (result.status === 200 && result.data.status === 200) {
      toast.success(result.data.message);
      fetchStudent();
    }
  };

  const fetchStudent = async () => {
    const result = await API_LIST_STUDENT(getToken());
    if (result.status === 200 && result.data.status === 200) {
      // const fetchData = result.data.data.map((student, index) => {
      //   return {
      //     stt: index + 1,
      //     code: student?.code,
      //     fullName: student?.fullName,
      //     date: moment(student?.date).format("DD-MM-YYYY"),
      //     isSex: student?.isSex,
      //     cccd: student?.cccd,
      //     ethnic: student?.ethnic,
      //     address: student?.address,
      //     phone: student?.phone,
      //     operation: (
      //       <div className="flex justify-between items-center ">
      //         <span
      //           className="cursor-pointer hover:text-blue-500"
      //           onClick={() => handleViewInfo(student)}
      //         >
      //           <FaEye />
      //         </span>
      //         <span
      //           className="cursor-pointer hover:text-blue-500"
      //           onClick={() => handleModalUpdate(student)}
      //         >
      //           <FaEdit />
      //         </span>
      //         <span
      //           className="cursor-pointer hover:text-blue-500"
      //           // onClick={() => handleDelete(student._id)}
      //           onClick={() => confirmDelete(student._id)}
      //         >
      //           <FaTrash />
      //         </span>
      //       </div>
      //     ),
      //   };
      // });
      setStudents(result.data.data);
      // setData(fetchData);
      // setSheetData(fetchData);
      setSheetData(result.data.data);
    }
  };

  const fetchCareer = async () => {
    const result = await API_LIST_CAREER(getToken());

    if (result.status === 200 && result.data.status === 200) {
      const careerData = result.data.data.map((career) => {
        return {
          value: career._id,
          label: career.name,
        };
      });

      setCareerData(careerData);
    } else {
      console.log("error");
    }
  };

  const fetchClasses = async () => {
    const result = await API_LIST_CLASS(getToken());

    if (result.status === 200 && result.data.status === 200) {
      const classesData = result.data.data.map((classItem) => {
        return {
          value: classItem._id,
          label: classItem.className,
        };
      });

      setClassesData(classesData);
    }
  };

  useEffect(() => {
    fetchStudent();
    fetchCareer();
    fetchClasses();
  }, []);

  // const columnMapping = {
  //   stt: "STT",
  //   code: "Mã SV",
  //   fullName: "Họ và tên",
  //   date: "Ngày sinh",
  //   isSex: "Giới tính",
  //   cccd: "CMTND/CCCCD/Hộ chiếu",
  //   ethnic: "Dân tộc",
  //   address: "Địa chỉ",
  //   phone: "Số điện thoại",
  //   operation: "Thao tác",
  // };

  // const columns = Object.keys(columnMapping).map((key) => ({
  //   title: columnMapping[key],
  //   dataIndex: key,
  //   key: key,
  // }));

  // console.log(data);
  // console.log(sheetData);
  const handleShowAddModal = () => {
    setIsModal(true);
  };

  const handleHideAddModal = () => {
    setIsModal(false);
  };

  const handleViewInfo = (data) => {
    setViewData(data);
    setViewInfo(true);
  };

  const handleModalUpdate = (data) => {
    setUpdateStudent(true);
    setUpdateData(data);
  };

  const currentYear = new Date().getFullYear();
  const courseYears = [
    `${currentYear - 1} - ${currentYear}`,
    `${currentYear} - ${currentYear + 1}`,
    `${currentYear + 1} - ${currentYear + 2}`,
  ];

  return (
    <>
      <div className="flex-1">
        <ToastContainer />
        <div className="flex items-center ml-2">
          <IconWrapper icon={PiArrowCircleUpLight} />
          <h1 className="p-2 uppercase text-xl font-semibold">
            Lý lịch học sinh, sinh viên
          </h1>
        </div>
        <div className="dash"></div>
        <div className="search m-4 mb-5">
          <div className="search-input grid grid-cols-7  gap-5">
            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="nameSearch">Mã TS/Họ và tên</label>
              <input
                id="nameSearch"
                name="fullName"
                onChange={(e) =>
                  setSearch({ ...search, fullName: e.target.value })
                }
                type="text"
                placeholder="Mã tuyển sinh/Họ và tên"
              />
            </div>

            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="cccd">CMTND/CCCD/Hộ chiếu</label>
              <input
                id="cccd"
                name="cccd"
                onChange={(e) => setSearch({ ...search, cccd: e.target.value })}
                type="text"
                placeholder="Nhập CMTND/CCCD/Hộ chiếu"
              />
            </div>

            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="courseSearch">Khóa học</label>
              <select
                name="course"
                id="courseSearch"
                value={search.course}
                onChange={(e) =>
                  setSearch({ ...search, course: e.target.value })
                }
              >
                <option value="all">Chọn khóa học</option>
                {courseYears.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="classSearch">Lớp khóa học</label>
              <select
                name="classCourse"
                value={search.classCourse}
                id="classSearch"
                onChange={(e) =>
                  setSearch({ ...search, classCourse: e.target.value })
                }
              >
                <option value="all">Chọn lớp khóa học</option>
                {classesData.map((classItem, index) => (
                  <option key={index} value={classItem.value}>
                    {classItem.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="careerSearch">Ngành</label>
              <select
                name="career"
                id="careerSearch"
                value={search.career} // Use value prop instead of selected
                onChange={(e) =>
                  setSearch({ ...search, career: e.target.value })
                }
              >
                <option value="all">Chọn Ngành</option>
                {careerData.map((career, index) => (
                  <option key={index} value={career.value}>
                    {career.label}
                  </option>
                ))}
              </select>
            </div>

            <div></div>

            <div className="flex flex-col justify-end">
              <button className="w-32 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                Tìm Kiếm
              </button>
            </div>
          </div>
        </div>
        <div className="dash"></div>
        <div className="result-table m-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold">Kết quả tìm kiếm 0/0 bản ghi</h1>
            </div>

            <div className="flex items-center gap-4 mr-10">
              <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={handleShowAddModal}
              >
                Thêm sinh viên
              </button>
              <label htmlFor="upload">
                <IconWrapper icon={FiUpload} />
              </label>
              <input type="file" name="upload" id="upload" hidden />
              <span onClick={() => exportXLSX("student.xlsx", sheetData)}>
                <IconWrapper icon={FiDownload} />
              </span>
            </div>
          </div>

          <div className="mt-3">
            {/* <Table columns={columns} dataSource={data} rowKey="stt" /> */}

            <div className="grid grid-cols-[0.3fr_0.5fr_0.6fr_0.8fr_0.4fr_1fr_1.2fr_0.7fr_0.4fr] gap-3 pl-2 [&>p]:font-semibold [&>p]:border-r py-3 bg-gray-50">
              <p>STT</p>
              <p>Mã SV</p>
              <p>Ngày sinh</p>
              <p>Họ và tên</p>
              <p>Giới tính</p>
              <p>CMTND/CCCD/Hộ chiếu</p>
              <p>Địa chỉ</p>
              <p>Số điện thoại</p>
              <p style={{ borderRight: "none" }}>Thao tác</p>
            </div>
            <div>
              <div className="dash my-2"></div>
              {students
                .slice((current - 1) * pageSize, current * pageSize)
                .map((student, i) => {
                  return (
                    <div key={i}>
                      <div className="w-full grid grid-cols-[0.3fr_0.5fr_0.6fr_0.8fr_0.4fr_1fr_1.2fr_0.7fr_0.4fr] py-2 gap-3 pl-2 text-sm [&>p]:line-clamp-1">
                        <p>{(current - 1) * pageSize + i + 1}</p>
                        <p>{student.code}</p>
                        <p>{moment(student.date).format("DD-MM-YYYY")}</p>
                        <p>{student.fullName}</p>
                        <p>{student.isSex}</p>
                        <p>{student.cccd}</p>
                        <p>{student.address}</p>
                        <p>{student.phone}</p>
                        <p>
                          <span className="flex justify-between items-center">
                            <span
                              className="cursor-pointer hover:text-blue-500"
                              onClick={() => handleViewInfo(student)}
                            >
                              <FaEye />
                            </span>
                            <span
                              className="cursor-pointer hover:text-blue-500"
                              onClick={() => handleModalUpdate(student)}
                            >
                              <FaEdit />
                            </span>
                            <span
                              className="cursor-pointer hover:text-blue-500"
                              // onClick={() => handleDelete(student._id)}
                              onClick={() => confirmDelete(student._id)}
                            >
                              <FaTrash />
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="dash my-3"></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <Pagination
          className="text-right"
          current={current}
          onChange={setCurrent}
          pageSize={pageSize}
          total={students.length}
          responsive={true}
        />
      </div>
      {isModal && (
        <ModalAddStudent
          fetchStudent={fetchStudent}
          handleHideAddModal={handleHideAddModal}
        />
      )}
      {viewInfo && (
        <ModalViewInfo
          handleHideModal={() => setViewInfo(false)}
          data={viewData}
        />
      )}
      {updateStudent && (
        <ModalUpdateStudent
          fetchStudent={fetchStudent}
          handleHideModal={() => setUpdateStudent(false)}
          data={updateData}
        />
      )}
    </>
  );
};

export default UpdateInfoStudent;
