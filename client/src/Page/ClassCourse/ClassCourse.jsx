import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// icons
import { FaAddressBook, FaEye, FaEdit, FaTrash } from "react-icons/fa";

// functions
import { getToken } from "~/functions/getToken";

// Modals
import ModalViewInfoClass from "./components/ModalViewInfoClass.jsx";
import ModalAddClass from "./components/ModalAddClass.jsx";
import ModalUpdateClass from "./components/ModalUpdateClass.jsx";

// Apis
import { API_LIST_CAREER } from "~/API/Career/ListCareer.api.js";
import { API_DELETE_CLASS } from "../../API/Class/deleteClass.api.js";
import { API_LIST_CLASS } from "../../API/Class/listClass.api.js";
import { API_LIST_CLASS_CONDITION } from "../../API/Class/listClassWithCondition.api.js";

// Hooks
import useDebounce from "../../hooks/useDebounce.js";

const ClassCourse = () => {
  const [data, setData] = useState([]);
  const [careers, setCareers] = useState([]);
  const [modalViewInfo, setModalViewInfo] = useState(false);
  const [modalAddClass, setModalAddClass] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [classToDelete, setClassToDelete] = useState(null);

  const [classInfoData, setClassInfoData] = useState(null);
  const [updateData, setUpdateData] = useState(null);

  // search
  const [search, setSearch] = useState({
    career: "all",
    // course: "all",
  });

  const debounce = useDebounce(search, 500);

  const getData = async () => {
    // console.log(debounce);

    const result = await API_LIST_CLASS_CONDITION(getToken(), debounce);

    if (result.status === 200 && result.data.status === 200) {
      const fetchClassesData = result.data.data.map((classItem, index) => {
        return {
          stt: index + 1,
          className: classItem?.className,
          // course: classItem?.course,
          career: classItem?.career.name,
          // year: classItem?.year,
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
                onClick={() => handleUpdateClass(classItem)}
              >
                <FaEdit />
              </span>
              <span
                className="cursor-pointer hover:text-blue-500"
                onClick={() => confirmDelete(classItem._id)}
              >
                <FaTrash />
              </span>
            </div>
          ),
        };
      });

      setData(fetchClassesData);
    }
  };

  useEffect(() => {
    getData();
  }, [debounce]);

  const fetchCareer = async () => {
    const result = await API_LIST_CAREER(getToken());
    if (result.status === 200 && result.data.status === 200) {
      const careerOptions = result.data.data.map((career) => {
        return {
          value: career._id,
          name: career.name,
        };
      });

      setCareers(careerOptions);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  const handleViewInfo = (data) => {
    setModalViewInfo(true);
    setClassInfoData(data);
  };

  const handleAddClass = () => {
    setModalAddClass(true);
  };

  const handleUpdateClass = (data) => {
    setModalUpdate(true);
    setUpdateData(data);
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
            // course: classItem?.course,
            career: classItem?.career.name,
            // year: classItem?.year,
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
                  onClick={() => handleUpdateClass(classItem)}
                >
                  <FaEdit />
                </span>
                <span
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => confirmDelete(classItem._id)}
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

  const confirmDelete = (id) => {
    setClassToDelete(id);
  };

  const handleDelete = async (id) => {
    const result = await API_DELETE_CLASS(getToken(), id);

    if (result.status === 200 && result.data.status === 200) {
      toast.success(result.data.message);
      fetchClasses();
    }

    if (result.status === 200 && result.data.status !== 200) {
      toast.error(result.data.message);
      setClassToDelete(null);
    }
  };

  useEffect(() => {
    if (classToDelete !== null) {
      Modal.confirm({
        title: "Xác nhận xóa",
        content: "Bạn có chắc chắn muốn xóa lớp này?",
        okText: "Xóa",
        cancelText: "Hủy",
        onOk: () => handleDelete(classToDelete),
        onCancel: () => setClassToDelete(null),
      });
    }
  }, [classToDelete]);

  const columnMapping = {
    stt: "STT",
    className: "Tên lớp",
    career: "Tên ngành nghề",
    levelStraining: "Trình độ đào tạo",
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
        <ToastContainer />
        <div className="flex items-center ml-2">
          <IconWrapper icon={FaAddressBook} />
          <h1 className="p-2 uppercase text-xl font-semibold">Lớp</h1>
        </div>
        <div className="dash"></div>
        <div className="search m-4 mb-5">
          <div className="search-input grid grid-cols-6 gap-5">
            <div className="flex flex-col justify-center text-xs">
              <label htmlFor="career">Ngành nghề</label>
              <select
                name="career"
                id="career"
                onChange={(e) =>
                  setSearch({ ...search, career: e.target.value })
                }
              >
                <option value="all">Chọn ngành nghề</option>
                {careers.map((career) => (
                  <option key={career.value} value={career.value}>
                    {career.name}
                  </option>
                ))}
              </select>
            </div>

            {/* <div className="flex flex-col justify-center text-xs">
              <label htmlFor="schoolYear">Khóa học</label>
              <select
                name="schoolYear"
                id="schoolYear"
                onChange={(e) =>
                  setSearch({ ...search, course: e.target.value })
                }
              >
                <option value="all">Chọn khóa học</option>
                {courseYears.map((courseYear) => (
                  <option key={courseYear} value={courseYear}>
                    {courseYear}
                  </option>
                ))}
              </select>
            </div> */}
            <div></div>
            <div></div>
            <div></div>
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
        <ModalAddClass
          handleHideAddModal={() => setModalAddClass(false)}
          fetchClasses={fetchClasses}
        />
      )}

      {modalViewInfo && (
        <ModalViewInfoClass
          handleHideViewModal={() => setModalViewInfo(false)}
          data={classInfoData}
        />
      )}

      {modalUpdate && (
        <ModalUpdateClass
          handleHideUpdateModal={() => setModalUpdate(false)}
          fetchClasses={fetchClasses}
          data={updateData}
        />
      )}
    </>
  );
};

export default ClassCourse;
