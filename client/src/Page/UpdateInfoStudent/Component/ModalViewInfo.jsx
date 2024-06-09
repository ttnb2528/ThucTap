import React from "react";
import moment from "moment";

// icons
import { GrLinkPrevious } from "react-icons/gr";

const ModalViewInfo = ({ handleHideModal, data }) => {
  console.log(data);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[50%] h-[50%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className="flex justify-between items-center my-3 text-2xl font-semibold"
          onClick={handleHideModal}
        >
          <span className="pl-3">
            <GrLinkPrevious />
          </span>
          <h1>Thông tin Sinh viên</h1>
          <div></div>
        </div>
        <div className="dash"></div>
        <div className="mt-3 grid md:grid-cols-2 gap-5 p-3">
          <div className="flex w-full">
            <div className="font-semibold">Họ và tên:</div>
            <div className="ml-2">{data.fullName}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Mã sinh viên:</div>
            <div className="ml-2">{data.code}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Ngày sinh:</div>
            <div className="ml-2">{moment(data.date).format("DD-MM-YYYY")}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Giới tính:</div>
            <div className="ml-2">{data.isSex}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">CNTND/CCCD/Hộ chiếu:</div>
            <div className="ml-2">{data.cccd}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Dân tộc:</div>
            <div className="ml-2">{data.ethnic}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Địa chỉ:</div>
            <div className="ml-2">{data.address}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Số điện thoại:</div>
            <div className="ml-2">{data.phone}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Trình độ đào tạo:</div>
            <div className="ml-2">{data.levelTraining}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Ngành nghề:</div>
            <div className="pl-2">
              {data.career.map((c) => {
                return c.name;
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-3 mr-5">
          <button
            onClick={handleHideModal}
            className="bg-blue-500 text-white py-2 px-5 rounded-md hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalViewInfo;
