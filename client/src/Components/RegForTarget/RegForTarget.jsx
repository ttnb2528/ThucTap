import React from "react";
import { Table } from "antd";
const RegForTarget = () => {
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Trình độ đào tạo",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Thông tư",
      dataIndex: "circulars",
      key: "circulars",
    },
    {
      title: "Ngành nghề đào tạo",
      dataIndex: "career",
      key: "career",
    },
    {
      title: "CTĐKHĐ(người)",
      dataIndex: "ctdkhd",
      key: "ctdkhd",
    },
    {
      title: "TXĐCT(người)",
      dataIndex: "txdct",
      key: "txdct",
    },
    {
      title: "Năm đăng ký",
      dataIndex: "regYear",
      key: "regYear",
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
      level: "Cao đẳng",
      circulars: 10,
      career: "Tin học văn phòng",
      ctdkhd: 20,
      txdct: 20,
      regYear: 2024,
    },
    {
      stt: "2",
      level: "Cao đẳng",
      circulars: 10,
      career: "Tài chính",
      ctdkhd: 20,
      txdct: 20,
      regYear: 2024,
    },
    {
      stt: "3",
      level: "Cao đẳng",
      circulars: 10,
      career: "Du lịch",
      ctdkhd: 20,
      txdct: 20,
      regYear: 2024,
    },
  ];
  return (
    <div className="flex-1">
      <div>
        <h1 className="p-2 uppercase text-xl font-semibold">
          Đăng ký chỉ tiêu hoạt động, tuyển sinh
        </h1>
      </div>
      <div className="dash"></div>
      <div className="search m-4 mb-5 flex justify-between gap-5">
        <div className="search-input basis-10/12 grid grid-cols-5 gap-5">
          <div className="flex flex-col justify-center">
            <label htmlFor="yearOfReg">Năm đăng ký*</label>
            <input id="yearOfReg" type="text" placeholder="Năm đăng ký" />
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
            <label htmlFor="dateCreated">Ngày tạo</label>
            <input id="dateCreated" type="text" placeholder="Chọn ngày tạo" />
          </div>
        </div>

        <div className="flex flex-col basis-2/12 justify-end items-center">
          <div></div>
          <button className="w-32 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
            Tìm Kiếm
          </button>
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
              Lưu tất cả
            </button>
          </div>
        </div>

        <div className="mt-3">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default RegForTarget;
