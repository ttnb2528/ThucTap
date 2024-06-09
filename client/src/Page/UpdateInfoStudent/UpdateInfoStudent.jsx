import React, { useEffect, useState } from "react";
import { Table } from "antd";
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

// icons
import { PiArrowCircleUpLight } from "react-icons/pi";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { FiUpload, FiDownload } from "react-icons/fi";

const UpdateInfoStudent = () => {
  const [isModal, setIsModal] = useState(false);
  const [viewInfo, setViewInfo] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [updateStudent, setUpdateStudent] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const [data, setData] = useState([]);

  const [sheetData, setSheetData] = useState(null);

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
      const fetchData = result.data.data.map((student, index) => {
        return {
          stt: index + 1,
          code: student?.code,
          fullName: student?.fullName,
          date: moment(student?.date).format("DD-MM-YYYY"),
          isSex: student?.isSex,
          cccd: student?.cccd,
          ethnic: student?.ethnic,
          address: student?.address,
          phone: student?.phone,
          operation: (
            <div className="flex justify-between items-center ">
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
            </div>
          ),
        };
      });
      setData(fetchData);
      setSheetData(fetchData);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const columnMapping = {
    stt: "STT",
    code: "Mã TS",
    fullName: "Họ và tên",
    date: "Ngày sinh",
    isSex: "Giới tính",
    cccd: "CMTND/CCCCD/Hộ chiếu",
    ethnic: "Dân tộc",
    address: "Địa chỉ",
    phone: "Số điện thoại",
    operation: "Thao tác",
  };

  const columns = Object.keys(columnMapping).map((key) => ({
    title: columnMapping[key],
    dataIndex: key,
    key: key,
  }));

  console.log(data);
  console.log(sheetData);
  // const data = [
  //   {
  //     stt: "1",
  //     idEnroll: "B2111898",
  //     name: "Dương Thiên Tấn",
  //     date: "25/11/2003",
  //     gender: "Nam",
  //     idCard: "086203002299",
  //     peoples: "Kinh",
  //     address: "300b, Nguyễn Huệ",
  //     wards: "Thị trấn Chợ Mới",
  //     district: "Chợ Mới",
  //     province: "An Giang",
  //     status: "Pass",
  //   },
  //   {
  //     stt: "2",
  //     idEnroll: "B2111898",
  //     name: "Dương Thiên Tấn",
  //     date: "25/11/2003",
  //     gender: "Nam",
  //     idCard: "086203002299",
  //     peoples: "Kinh",
  //     address: "300b, Nguyễn Huệ",
  //     wards: "Thị trấn Chợ Mới",
  //     district: "Chợ Mới",
  //     province: "An Giang",
  //     status: "Pass",
  //   },
  //   {
  //     stt: "3",
  //     idEnroll: "B2111898",
  //     name: "Dương Thiên Tấn",
  //     date: "25/11/2003",
  //     gender: "Nam",
  //     idCard: "086203002299",
  //     peoples: "Kinh",
  //     address: "300b, Nguyễn Huệ",
  //     wards: "Thị trấn Chợ Mới",
  //     district: "Chợ Mới",
  //     province: "An Giang",
  //     status: "Pass",
  //   },
  // ];

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
          <div className="search-input grid grid-cols-6 gap-5">
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Mã TS/Họ và tên</label>
              <input
                id="name"
                type="text"
                placeholder="Mã tuyển sinh/Họ và tên"
              />
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="idCard">CMTND/CCCD/Hộ chiếu</label>
              <input
                id="idCard"
                type="text"
                placeholder="Nhập CMTND/CCCD/Hộ chiếu"
              />
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="gender">Giới tính</label>
              <select name="gender" id="gender">
                <option selected>Chọn giới tính</option>
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="peoples">Dân tộc</label>
              <select name="peoples" id="peoples">
                <option selected>Chọn dân tộc</option>
                <option value="kinh">Kinh</option>
                <option value="...">...</option>
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="status">Trạng thái</label>
              <select name="status" id="status">
                <option selected>Tất cả</option>
                <option value="9/12">9/12</option>
                <option value="12/12">12/12</option>
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="dateCreated">Ngày tạo</label>
              <input id="dateCreated" type="text" placeholder="Chọn ngày tạo" />
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="schoolYear">Khóa học</label>
              <select name="schoolYear" id="schoolYear">
                <option selected>Chọn khóa học</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="classSchoolYear">Lớp khóa học</label>
              <select name="classSchoolYear" id="classSchoolYear">
                <option selected>Chọn lớp khóa học</option>
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </div>

            <div></div>
            <div></div>
            <div></div>

            <div className="flex flex-col justify-end">
              <button className="w-32 py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600">
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
            <Table columns={columns} dataSource={data} rowKey="stt" />
          </div>
        </div>
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
