import React from "react";
import { Table } from "antd";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// icons
import { PiArrowCircleUpLight } from "react-icons/pi";

const UpdateInfoStudent = () => {
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
      title: "Ngày sinh",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
    },

    {
      title: "CMTND/CCCCD/Hộ chiếu",
      dataIndex: "idCard",
      key: "idCard",
    },
    {
      title: "Dân tộc",
      dataIndex: "peoples",
      key: "peoples",
    },
    {
      title: "Địa chỉ liên hệ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phường/Xã",
      dataIndex: "wards",
      key: "wards",
    },
    {
      title: "Quận/Huyện",
      dataIndex: "district",
      key: "district",
    },

    {
      title: "Tỉnh/TP",
      dataIndex: "province",
      key: "province",
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
      date: "25/11/2003",
      gender: "Nam",
      idCard: "086203002299",
      peoples: "Kinh",
      address: "300b, Nguyễn Huệ",
      wards: "Thị trấn Chợ Mới",
      district:"Chợ Mới",
      province: "An Giang",
      status: "Pass",
    },
    {
      stt: "2",
      idEnroll: "B2111898",
      name: "Dương Thiên Tấn",
      date: "25/11/2003",
      gender: "Nam",
      idCard: "086203002299",
      peoples: "Kinh",
      address: "300b, Nguyễn Huệ",
      wards: "Thị trấn Chợ Mới",
      district:"Chợ Mới",
      province: "An Giang",
      status: "Pass",
    },
    {
      stt: "3",
      idEnroll: "B2111898",
      name: "Dương Thiên Tấn",
      date: "25/11/2003",
      gender: "Nam",
      idCard: "086203002299",
      peoples: "Kinh",
      address: "300b, Nguyễn Huệ",
      wards: "Thị trấn Chợ Mới",
      district:"Chợ Mới",
      province: "An Giang",
      status: "Pass",
    },
  ];
  return (
    <div className="flex-1">
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

          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Lưu tất cả
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

export default UpdateInfoStudent;
