import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// Functions
import { getToken } from "~/functions/getToken";

// Modal
import ModalUpdateSubject from "./components/ModalUpdateSubject.jsx";
import ModalViewSubject from "./components/ModalViewSubject.jsx";
import ModalAddSubject from "./components/ModalAddSubject.jsx";

// Icons
import { FaEye, FaEdit, FaTrash, FaChevronCircleRight } from "react-icons/fa";

// Api
import { API_LIST_SUBJECT } from "../../API/Subject/listSubject.api.js";
import { API_DELETE_SUBJECT } from "../../API/Subject/deleteSubject.api.js";
import { API_LIST_CAREER } from "../../API/Career/ListCareer.api.js";
import { API_LIST_SUBJECT_CONDITION } from "../../API/Subject/listSubjectWithCondition.api.js";

// Hooks
import useDebounce from "../../hooks/useDebounce.js";

const Subject = () => {
  const [show, setShow] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalView, setModalView] = useState(false);

  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataView, setDataView] = useState(null);

  const [subjectToDelete, setSubjectToDelete] = useState(null);

  const [careers, setCareers] = useState([]);

  const [data, setData] = useState([]);

  // search
  const [search, setSearch] = useState({
    code: "",
    name: "",
    career: "all",
    type: "all",
  });

  const debounce = useDebounce(search, 500);

  const getData = async () => {
    // console.log(debounce);
    try {
      const result = await API_LIST_SUBJECT_CONDITION(getToken(), debounce);
      if (result.status === 200 && result.data.status === 200) {
        const fetchSubjectData = result.data.data.map((subject, index) => {
          return {
            stt: index + 1,
            code: subject?.code,
            name: subject?.name,
            career: subject?.career.name,
            type: subject?.type,
            operation: (
              <div className="flex justify-between items-center ">
                <span
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => handleView(subject)}
                >
                  <FaEye />
                </span>
                <span
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => handleUpdate(subject)}
                >
                  <FaEdit />
                </span>
                <span
                  className="cursor-pointer hover:text-blue-500"
                  onClick={() => confirmDelete(subject._id)}
                >
                  <FaTrash />
                </span>
              </div>
            ),
          };
        });

        setData(fetchSubjectData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [debounce]);

  const fetchSubject = async () => {
    const result = await API_LIST_SUBJECT(getToken());
    // console.log(result);

    if (result.status === 200 && result.data.status === 200) {
      const fetchSubjectData = result.data.data.map((subject, index) => {
        return {
          stt: index + 1,
          code: subject?.code,
          name: subject?.name,
          career: subject?.career.name,
          type: subject?.type,
          operation: (
            <div className="flex justify-between items-center ">
              <span
                className="cursor-pointer hover:text-blue-500"
                onClick={() => handleView(subject)}
              >
                <FaEye />
              </span>
              <span
                className="cursor-pointer hover:text-blue-500"
                onClick={() => handleUpdate(subject)}
              >
                <FaEdit />
              </span>
              <span
                className="cursor-pointer hover:text-blue-500"
                onClick={() => confirmDelete(subject._id)}
              >
                <FaTrash />
              </span>
            </div>
          ),
        };
      });

      setData(fetchSubjectData);
    }
  };

  useEffect(() => {
    fetchSubject();
  }, []);

  const fetchCareer = async () => {
    const result = await API_LIST_CAREER(getToken());

    if (result.status === 200 && result.data.status === 200) {
      const careerOption = result.data.data.map((career) => {
        return {
          value: career._id,
          name: career.name,
        };
      });

      setCareers(careerOption);
    }
  };

  const confirmDelete = (id) => {
    setSubjectToDelete(id);
  };

  const handleDelete = async (id) => {
    const result = await API_DELETE_SUBJECT(getToken(), id);
    if (result.status === 200 && result.data.status === 500) {
      return toast.error(result.data.message);
    }

    if (result.status === 200 && result.data.status === 200) {
      toast.success(result.data.message);
      fetchSubject();
    }
  };

  useEffect(() => {
    if (subjectToDelete !== null) {
      Modal.confirm({
        title: "Xác nhận xóa",
        content: "Bạn có chắc muốn xóa môn học này không?",
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          handleDelete(subjectToDelete);
        },
        onCancel() {
          setSubjectToDelete(null);
        },
      });
    }
  }, [subjectToDelete]);

  useEffect(() => {
    fetchCareer();
  }, []);

  const columnMapping = {
    stt: "STT",
    code: "Mã môn học",
    name: "Tên môn học",
    career: "Ngành nghề",
    type: "Loại",
    operation: "Thao tác",
  };

  const columns = Object.keys(columnMapping).map((key) => ({
    title: columnMapping[key],
    dataIndex: key,
    key: key,
  }));

  const handleShow = () => {
    setShow(true);
  };

  const handleUpdate = (data) => {
    setDataUpdate(data);
    setModalUpdate(true);
  };

  const handleView = (data) => {
    setDataView(data);
    setModalView(true);
  };

  return (
    <>
      <div className="flex-1">
        <ToastContainer />
        <div className="flex items-center ml-2">
          <IconWrapper icon={FaChevronCircleRight} />
          <h1 className="p-2 uppercase text-xl font-semibold">
            Quản lý môn học
          </h1>
        </div>
        <div className="dash"></div>
        <div className="search m-4 mb-5">
          <div className="search-input grid grid-cols-6 gap-5">
            <div className="flex flex-col justify-center">
              <label htmlFor="code" className="text-sm">
                Mã môn
              </label>
              <input
                id="code"
                name="code"
                type="text"
                placeholder="Nhập mã môn"
                onChange={(e) => setSearch({ ...search, code: e.target.value })}
              />
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="name" className="text-sm">
                Tên môn học
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nhập tên môn"
                onChange={(e) => setSearch({ ...search, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="career" className="text-sm">
                Ngành
              </label>
              <select
                name="career"
                id="career"
                onChange={(e) =>
                  setSearch({ ...search, career: e.target.value })
                }
              >
                <option value="all">Chọn ngành</option>
                {careers.map((career, index) => (
                  <option key={index} value={career.value}>
                    {career.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <label htmlFor="type" className="text-sm">
                Loại
              </label>
              <select
                name="type"
                id="type"
                onChange={(e) => setSearch({ ...search, type: e.target.value })}
              >
                <option value="all">Chọn loại</option>
                <option value="Chung">Chung</option>
                <option value="Cơ sở">Cơ sở</option>
                <option value="Chuyên ngành">Chuyên ngành</option>
              </select>
            </div>

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

            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleShow}
              >
                Thêm môn học
              </button>
            </div>
          </div>

          <div className="mt-3">
            <Table columns={columns} dataSource={data} rowKey="stt" />
          </div>
        </div>
      </div>
      {show && (
        <ModalAddSubject
          handleHideAddModal={() => setShow(false)}
          fetchSubject={fetchSubject}
        />
      )}

      {modalUpdate && (
        <ModalUpdateSubject
          data={dataUpdate}
          handleHideUpdateModal={() => setModalUpdate(false)}
          fetchSubject={fetchSubject}
        />
      )}

      {modalView && (
        <ModalViewSubject
          handleHideViewModal={() => setModalView(false)}
          data={dataView}
        />
      )}
    </>
  );
};

export default Subject;
