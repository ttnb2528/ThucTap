import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// icons
import { FaAddressBook, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { API_LIST_CLASS } from "../../API/Class/listClass.api.js";

// functions
import { getToken } from "~/functions/getToken";
import ModalViewInfoClass from "./components/ModalViewInfoClass.jsx";
import ModalAddClass from "./components/ModalAddClass.jsx";

const ClassCourse = () => {
  const [data, setData] = useState([]);
  const [modalViewInfo, setModalViewInfo] = useState(false);
  const [modalAddClass, setModalAddClass] = useState(false);
  const [classInfoData, setClassInfoData] = useState(null);

  const handleViewInfo = (data) => {
    setModalViewInfo(true);
    setClassInfoData(data);
  };

  const handleAddClass = () => {
    setModalAddClass(true);
  };

  const fetchClasses = async () => {
    try {
      const result = await API_LIST_CLASS(getToken());
      // console.log(result);
      if (result.status === 200 && result.data.status === 200) {
        const fetchClassesData = result.data.data.map((classItem, index) => {
          return {
            stt: index + 1,
            className: classItem?.className,
            course: classItem?.course,
            career: classItem?.career.name,
            year: classItem?.year,
            levelStraining: classItem?.career?.levelStraining,
            operation: (
              <div className="flex justify-between items-center ">
                <span
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => handleViewInfo(classItem)}
                >
                  <FaEye />
                </span>
                <span
                  className="cursor-pointer hover:text-blue-500"
                  // onClick={() => handleEditInfo(career)}
                >
                  <FaEdit />
                </span>
                <span
                  className="cursor-pointer hover:text-blue-500"
                  // onClick={() => confirmDelete(career._id)}
                >
                  <FaTrash />
                </span>
              </div>
            ),
          };
        });

        setData(fetchClassesData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  console.log(data);

  const columnMapping = {
    stt: "STT",
    className: "Tên lớp",
    career: "Tên ngành nghề",
    levelStraining: "Trình độ đào tạo",
    year: "Năm",
    course: "Khóa",
    operation: "Thao tác",
  };

  const columns = Object.keys(columnMapping).map((key) => ({
    title: columnMapping[key],
    dataIndex: key,
    key: key,
  }));

  return (
    <>
      <div className="flex-1">
        <div className="flex items-center ml-2">
          <IconWrapper icon={FaAddressBook} />
          <h1 className="p-2 uppercase text-xl font-semibold">Lớp</h1>
        </div>
        <div className="dash"></div>
        <div className="search m-4 mb-5">
          <div className="search-input grid grid-cols-6 gap-5">
            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="level">Trình độ đào tạo</label>
              <select name="level" id="level">
                <option selected>Chọn trình độ đào tạo</option>
                <option value="sơ cấp">Sơ cấp</option>
                <option value="trung cấp">Trung cấp</option>
              </select>
            </div>

            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="career">Ngành nghề</label>
              <select name="career" id="career">
                <option selected>Chọn ngành nghề</option>
                <option value="du lịch">Du lịch</option>
                <option value="kế toán">Kế toán</option>
                <option value="tin học">Tin học</option>
              </select>
            </div>

            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="schoolYear">Khóa học</label>
              <select name="schoolYear" id="schoolYear">
                <option selected>Chọn khóa học</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2024-2025">2024-2025</option>
              </select>
            </div>

            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="classSchoolYear">Lớp khóa học</label>
              <select name="classSchoolYear" id="classSchoolYear">
                <option selected>Chọn lớp khóa học</option>
                <option value="a">a</option>
                <option value="b">b</option>
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

            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddClass}
              >
                Thêm lớp
              </button>
            </div>
          </div>

          <div className="mt-3">
            <Table columns={columns} dataSource={data} rowKey="stt" />
          </div>
        </div>
      </div>

      {modalAddClass && (
        <ModalAddClass handleHideAddModal={() => setModalAddClass(false)} />
      )}

      {modalViewInfo && (
        <ModalViewInfoClass
          handleHideViewModal={() => setModalViewInfo(false)}
          data={classInfoData}
        />
      )}
    </>
  );
};

export default ClassCourse;
