import React from "react";
import moment from "moment";

// icons
import { GrLinkPrevious } from "react-icons/gr";

const ModalViewInfo = ({ handleHideModal, data }) => {
  console.log(data);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-30 flex justify-center items-center">
      <div
        className="w-[90%] h-[90%] bg-white rounded-md relative overflow-y-scroll"
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
        <div className="pl-3 my-2 font-bold">Lý lịch</div>
        <div className="mt-3 ml-5 grid md:grid-cols-3 gap-5 p-3">
          <div className="flex w-full">
            <div className="font-semibold">Mã sinh viên:</div>
            <div className="ml-2">{data.code}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Họ và tên:</div>
            <div className="ml-2">{data.fullName}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Giới tính:</div>
            <div className="ml-2">{data.isSex}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Ngày sinh:</div>
            <div className="ml-2">{moment(data.date).format("DD-MM-YYYY")}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Email:</div>
            <div className="ml-2">{data.email}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Số điện thoại:</div>
            <div className="ml-2">{data.phone}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Tôn giáo:</div>
            <div className="ml-2">{data.religion}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Dân tộc:</div>
            <div className="ml-2">{data.ethnic}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Quốc tịch:</div>
            <div className="ml-2">{data.nationality}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Khóa:</div>
            <div className="ml-2">{data.course}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Lớp:</div>
            <div className="ml-2">{data.classCourse}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">CNTND/CCCD/Hộ chiếu:</div>
            <div className="ml-2">{data.cccd}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Ngày cấp:</div>
            <div className="ml-2">
              {moment(data.date_cccd).format("DD-MM-YYYY")}
            </div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Nơi cấp:</div>
            <div className="ml-2">{data.place_cccd}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Đối tượng chính sách:</div>
            <div className="ml-2">{data.policyObject}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Đối tượng ưu tiên:</div>
            <div className="ml-2">{data.priorityObject}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Ngày vào đoàn:</div>
            <div className="ml-2">
              {data?.date_group
                ? moment(data?.date_group).format("DD-MM-YYYY")
                : ""}
            </div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Nơi vào đoàn:</div>
            <div className="ml-2">{data.place_group}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Ngày vào đảng:</div>
            <div className="ml-2">
              {data.date_party
                ? moment(data.date_party).format("DD-MM-YYYY")
                : ""}
            </div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Nơi vào đảng:</div>
            <div className="ml-2">{data.place_party}</div>
          </div>
        </div>
        <div className="dash"></div>
        <div className="pl-3 my-2 font-bold">Thông tin Giám hộ</div>

        <div className="mt-3 ml-5 grid md:grid-cols-2 gap-5 p-3">
          <div className="flex w-full">
            <div className="font-semibold">Họ tên người giám hộ:</div>
            <div className="ml-2">{data.guardianName}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Mối quan hệ:</div>
            <div className="ml-2">{data.relationshipWithStudent}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">
              CMTND/CCCD/Hộ chiếu(Người giám hộ):
            </div>
            <div className="ml-2">{data.cccd_guardian}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Số điện thoại(người giám hộ):</div>
            <div className="ml-2">{data.phone_guardian}</div>
          </div>
        </div>
        <div className="dash"></div>
        <div className="pl-3 my-2 font-bold">Thông tin địa chỉ</div>
        <div className="mt-3 ml-5 grid md:grid-cols-2 gap-5 p-3">
          <div className="flex w-full">
            <div className="font-semibold">Địa chỉ:</div>
            <div className="ml-2">{data.address}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Tỉnh/thành phố:</div>
            <div className="ml-2">{data.province}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Quận/huyện:</div>
            <div className="ml-2">{data.district}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Xã/phường/thị trấn:</div>
            <div className="ml-2">{data.ward}</div>
          </div>
        </div>

        <div className="dash"></div>
        <div className="pl-3 my-2 font-bold">Thông tin tuyển sinh</div>
        <div className="mt-3 ml-5 grid md:grid-cols-2 gap-5 p-3">
          <div className="flex w-full">
            <div className="font-semibold">Thời gian tuyến sinh:</div>
            <div className="ml-2">
              {moment(data.dateAdmission).format("DD-MM-YYYY")}
            </div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Trình độ văn hóa:</div>
            <div className="ml-2">{data.educationLevel}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Hình thức tuyển sinh:</div>
            <div className="ml-2">{data.typeOfAdmission}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Hình thức đào tạo:</div>
            <div className="ml-2">{data.typeOfTraining}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Loại hình đào tạo:</div>
            <div className="ml-2">{data.formOfTraining}</div>
          </div>

          <div className="flex w-full">
            <div className="font-semibold">Đối tượng tuyển sinh:</div>
            <div className="ml-2">{data.admissionObject}</div>
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
        <div className="flex justify-end my-3 mr-5">
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
