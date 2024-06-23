import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// functions
import { getToken } from "~/functions/getToken";

import ModalAddTrainingFields from "./component/ModalAddTrainingFields.jsx";

// icons
import { FaAddressBook, FaEye, FaEdit, FaTrash } from "react-icons/fa";

import { API_LIST_CAREER } from "~/API/Career/ListCareer.api.js";
import { API_DELETE_CAREER } from "../../API/Career/deleteCareer.api.js";
import ModalViewCareer from "./component/ModalViewCareer.jsx";
import ModalEditCareer from "./component/ModalEditCareer.jsx";

const TrainingFields = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [careerToDelete, setCareerToDelete] = useState(null);

  const handleShow = () => {
    setShow(true);
  };

  const handleViewInfo = (data) => {
    setViewData(data);
    setShowView(true);
  };

  const handleEditInfo = (data) => {
    setEditData(data);
    setShowEdit(true);
  };

  const fetchCareer = async () => {
    const result = await API_LIST_CAREER(getToken());
    // console.log(result);

    if (result.status === 200 && result.data.status === 200) {
      const fetchCareerData = result.data.data.map((career, index) => {
        return {
          stt: index + 1,
          code: career?.code,
          levelStraining: career?.levelStraining,
          Circulars: career?.Circulars,
          name: career?.name,
          levelDecision: career?.levelDecision,
          numberDecision: career?.numberDecision,
          dateDecision: career?.dateDecision,
          status: career?.status,
          operation: (
            <div className="flex justify-between items-center ">
              <span
                className="cursor-pointer hover:text-blue-500"
                onClick={() => handleViewInfo(career)}
              >
                <FaEye />
              </span>
              <span
                className="cursor-pointer hover:text-blue-500"
                onClick={() => handleEditInfo(career)}
              >
                <FaEdit />
              </span>
              <span
                className="cursor-pointer hover:text-blue-500"
                // onClick={() => handleDelete(student._id)}
                onClick={() => confirmDelete(career._id)}
              >
                <FaTrash />
              </span>
            </div>
          ),
        };
      });
      setData(fetchCareerData);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  const columnMapping = {
    stt: "STT",
    code: "Mã ngành nghề",
    name: "Tên ngành nghề",
    levelStraining: "Trình độ đào tạo",
    Circulars: "Thông tư",
    operation: "Thao tác",
  };

  const columns = Object.keys(columnMapping).map((key) => ({
    title: columnMapping[key],
    dataIndex: key,
    key: key,
  }));

  const confirmDelete = (id) => {
    setCareerToDelete(id);
  };

  const handleDelete = async (id) => {
    console.log(id);

    const result = await API_DELETE_CAREER(getToken(), id);
    // console.log(result);

    if (result.status === 200 && result.data.status === 500) {
      return toast.error(result.data.message);
    }

    if (result.status === 200 && result.data.status === 200) {
      toast.success(result.data.message);
      fetchCareer();
    }
  };

  useEffect(() => {
    if (careerToDelete !== null) {
      Modal.confirm({
        title: "Xác nhận xóa",
        content: "Bạn có chắc muốn xóa sinh viên này này không?",
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          handleDelete(careerToDelete);
        },
        onCancel() {
          setCareerToDelete(null);
        },
      });
    }
  }, [careerToDelete]);

  // console.log(data);

  return (
    <>
      <div className="flex-1">
        <ToastContainer />
        <div className="flex items-center ml-2">
          <IconWrapper icon={FaAddressBook} />
          <h1 className="p-2 uppercase text-xl font-semibold">
            Ngành nghề đào tạo
          </h1>
        </div>
        <div className="dash"></div>
        <div className="search m-4 mb-5">
          <div className="search-input grid grid-cols-6 gap-5">
            <div className="flex flex-col justify-center text-sm">
              <label htmlFor="level">Trình độ đào tạo</label>
              <select name="level" id="level">
                <option selected>Chọn trình độ đào tạo</option>
                <option value="sơ cấp">Sơ cấp</option>
                <option value="trung cấp">Trung cấp</option>
              </select>
            </div>

            <div className="flex flex-col justify-center text-sm">
              <label htmlFor="career">Ngành nghề</label>
              <select name="career" id="career">
                <option selected>Chọn ngành nghề</option>
                <option value="du lịch">Du lịch</option>
                <option value="kế toán">Kế toán</option>
                <option value="tin học">Tin học</option>
              </select>
            </div>

            <div></div>
            <div></div>
            <div></div>

            <div className="flex flex-col justify-end">
              <button className="w-32 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={handleShow}
              >
                Thêm ngành nghề
              </button>
            </div>
          </div>

          <div className="mt-3">
            <Table columns={columns} dataSource={data} rowKey="stt" />
          </div>
        </div>
      </div>

      {show && (
        <ModalAddTrainingFields
          handleHideAddModal={() => setShow(false)}
          fetchCareer={fetchCareer}
        />
      )}

      {showView && (
        <ModalViewCareer
          handleHideViewModal={() => setShowView(false)}
          data={viewData}
        />
      )}

      {showEdit && (
        <ModalEditCareer
          handleHideUpdateModal={() => setShowEdit(false)}
          data={editData}
          fetchCareer={fetchCareer}
        />
      )}
    </>
  );
};

export default TrainingFields;
