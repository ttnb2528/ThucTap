import React, { useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// icons
import { FaAddressBook } from "react-icons/fa";

const Schedule = () => {
  const [selectedYear, setSelectedYear] = useState(null);

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
      title: "Khóa",
      dataIndex: "schoolYear",
      key: "schoolYear",
    },
    {
      title: "Lớp",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
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
      schoolYear: 45,
      class: "201",
      status: "Pass",
    },
    {
      stt: "2",
      idEnroll: "B2111898",
      name: "Dương Thiên Tấn",
      timeEnroll: "26/05/2024",
      level: "Cao đẳng",
      career: "Tài chính",
      schoolYear: 45,
      class: "201",
      status: "Pass",
    },
    {
      stt: "3",
      idEnroll: "B2111898",
      name: "Dương Thiên Tấn",
      timeEnroll: "26/05/2024",
      level: "Cao đẳng",
      career: "Du lịch",
      schoolYear: 45,
      class: "201",
      status: "Pass",
    },
  ];

  console.log(selectedYear);
  return (
    <div className="flex-1">
      <div className="flex items-center ml-2">
        <IconWrapper icon={FaAddressBook} />
        <h1 className="p-2 uppercase text-xl font-semibold">
          Thông tin học sinh, sinh viên nhập trường
        </h1>
      </div>
      <div className="dash"></div>

      <div className="result-table m-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Chọn năm:</h1>
            <select
              className="rounded-md md:mt-0 ml-2"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="" selected>
                Chọn năm
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
              Lưu tất cả
            </button>
            <Link
              to="/taothoikhoabieu"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
            >
              Tạo thời khóa biểu
            </Link>
          </div>
        </div>

        <div className="mt-3">
          <Table columns={columns} dataSource={data} rowKey="stt" />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
