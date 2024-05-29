import React from "react";
import { Table } from "antd";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// icons
import { FaSquareCheck } from "react-icons/fa6";

const AdmissionConfirm = () => {
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Mã TS",
      dataIndex: "idEnroll",
      key: "idEnroll",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Thời gian TS",
      dataIndex: "timeEnroll",
      key: "timeEnroll",
    },
    {
      title: "Trình độ đào tạo",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Ngành nghề",
      dataIndex: "career",
      key: "career",
    },
    {
      title: "Trình độ văn hóa",
      dataIndex: "levelEdu",
      key: "levelEdu",
    },
    {
      title: "Thao tác",
      dataIndex: "operation",
      key: "operation",
    },
  ];
  const data = [
    {
      stt: "1",
      idEnroll: "B2111898",
      name: "Dương Thiên Tấn",
      timeEnroll: "26/05/2024",
      level: "Cao đẳng",
      career: "Tin học văn phòng",
      levelEdu: "12/12",
    },
    {
      stt: "2",
      idEnroll: "B2111898",
      name: "Dương Thiên Tấn",
      timeEnroll: "26/05/2024",
      level: "Cao đẳng",
      career: "Tài chính",
      levelEdu: "12/12",
    },
    {
      stt: "3",
      idEnroll: "B2111898",
      name: "Dương Thiên Tấn",
      timeEnroll: "26/05/2024",
      level: "Cao đẳng",
      career: "Du lịch",
      levelEdu: "12/12",
    },
  ];
  return (
    <div className="flex-1">
      <div className="flex items-center ml-2">
        <IconWrapper icon={FaSquareCheck} />
        <h1 className="p-2 uppercase text-xl font-semibold">
          Xác nhận nhâp học
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
            <label htmlFor="levelEdu">Trình độ văn hóa</label>
            <select name="levelEdu" id="levelEdu">
              <option selected>Chọn trình độ văn hóa</option>
              <option value="9/12">9/12</option>
              <option value="12/12">12/12</option>
            </select>
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="dateCreated">Ngày tạo</label>
            <input id="dateCreated" type="text" placeholder="Chọn ngày tạo" />
          </div>

          <div></div>
          <div></div>
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
            <h1 className="font-bold">Danh sách học sinh, sinh viên 0/0</h1>
          </div>

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Nhập học
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

export default AdmissionConfirm;
