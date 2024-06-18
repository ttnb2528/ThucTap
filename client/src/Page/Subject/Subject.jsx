import React, { useEffect, useState } from "react";
import { Table } from "antd";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// functions
import { getToken } from "~/functions/getToken";

// icons
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaChevronCircleRight,
} from "react-icons/fa";
import { API_LIST_SUBJECT } from "../../API/Subject/listSubject.api.js";

const Subject = () => {
  const [data, setData] = useState([]);

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
                // onClick={() => handleViewInfo(student)}
              >
                <FaEye />
              </span>
              <span
                className="cursor-pointer hover:text-blue-500"
                // onClick={() => handleModalUpdate(student)}
              >
                <FaEdit />
              </span>
              <span
                className="cursor-pointer hover:text-blue-500"
                // onClick={() => handleDelete(student._id)}
                // onClick={() => confirmDelete(student._id)}
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

  return (
    <div className="flex-1">
      <div className="flex items-center ml-2">
        <IconWrapper icon={FaChevronCircleRight} />
        <h1 className="p-2 uppercase text-xl font-semibold">Quản lý môn học</h1>
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
            <label htmlFor="enrollTime">Thời gian tuyển sinh</label>
            <input
              id="enrollTime"
              type="text"
              placeholder="Chọn thời gian tuyển sinh"
            />
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="level">Trình độ đào tạo</label>
            <select name="level" id="level">
              <option selected>Chọn trình độ đào tạo</option>
              <option value="sơ cấp">Sơ cấp</option>
              <option value="trung cấp">Trung cấp</option>
            </select>
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="career">Ngành nghề</label>
            <select name="career" id="career">
              <option selected>Chọn ngành nghề</option>
              <option value="du lịch">Du lịch</option>
              <option value="kế toán">Kế toán</option>
              <option value="tin học">Tin học</option>
            </select>
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

          <div className="flex flex-col justify-center">
            <label htmlFor="status">Trạng thái</label>
            <select name="status" id="status">
              <option selected>Tất cả</option>
              <option value="9/12">9/12</option>
              <option value="12/12">12/12</option>
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
            <label htmlFor="dateCreated">Ngày tạo</label>
            <input id="dateCreated" type="text" placeholder="Chọn ngày tạo" />
          </div>

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

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Thêm môn học
            </button>
          </div>
        </div>

        <div className="mt-3">
          <Table columns={columns} dataSource={data} rowKey="stt" />
        </div>
      </div>
    </div>
  );
};

export default Subject;
