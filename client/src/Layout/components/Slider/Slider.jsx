import React from "react";
import { Link } from "react-router-dom";
import { Collapse } from "antd";

// utils
import IconWrapper from "~/utils/IconWrapper/IconWrapper";

// icons
import { FaGraduationCap, FaSquareCheck, FaGears } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import {
  PiWarningCircleFill,
  PiNotepadFill,
  PiArrowCircleUpLight,
  PiNotebookFill,
  PiHouseSimple,
} from "react-icons/pi";
import { BiSolidChevronRightSquare } from "react-icons/bi";
import {
  FaAddressBook,
  FaSuitcase,
  FaExchangeAlt,
  FaChevronCircleRight,
  FaChalkboardTeacher,
} from "react-icons/fa";
import {
  RiSettings5Fill,
  RiBarChartBoxFill,
  RiGraduationCapFill,
  RiGraduationCapLine,
  RiFolderSettingsFill,
} from "react-icons/ri";
import { LiaHandPointRight } from "react-icons/lia";

const Slider = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let items = [];
  if (user.role === "10") {
    items = [
      {
        key: "1",
        label: (
          <Link
            to="/dangkychitieutuyensinh"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={FaGraduationCap} />
            <span className="ml-2">Quản lý tuyển sinh</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link
                  to="/dangkychitieutuyensinh"
                  className="flex items-center"
                >
                  <IconWrapper icon={HiUserGroup} />
                  <span className="ml-2">Đăng ký chỉ tiêu</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/quanlythontintuyensinh"
                  className="flex items-center"
                >
                  <IconWrapper icon={PiWarningCircleFill} />
                  <span className="ml-2">Quản lý thông tin tuyển sinh</span>
                </Link>
              </li>
              <li>
                <Link to="/xacnhannhaphoc" className="flex items-center">
                  <IconWrapper icon={FaSquareCheck} />
                  <span className="ml-2">Xác nhận nhập học</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <Link
            to="/nhaptruong"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={FaAddressBook} />
            <span className="ml-2">Quản lý HSSV</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link to="/nhaptruong" className="flex items-center">
                  <IconWrapper icon={FaSuitcase} />
                  <span className="ml-2">Nhập trường</span>
                </Link>
              </li>
              <li>
                <Link to="/phanlop" className="flex items-center">
                  <IconWrapper icon={LiaHandPointRight} />
                  <span className="ml-2">Phân lớp</span>
                </Link>
              </li>

              <li>
                <Link to="/chuyennganh" className="flex items-center">
                  <IconWrapper icon={FaExchangeAlt} />
                  <span className="ml-2">Chuyển ngành</span>
                </Link>
              </li>

              <li>
                <Link to="/chuyenlop" className="flex items-center">
                  <IconWrapper icon={BiSolidChevronRightSquare} />
                  <span className="ml-2">Chuyển lớp</span>
                </Link>
              </li>

              <li>
                <Link to="/capnhatlylichsinhvien" className="flex items-center">
                  <IconWrapper icon={PiArrowCircleUpLight} />
                  <span className="ml-2">Cập nhật lý lịch sinh viên</span>
                </Link>
              </li>

              <li>
                <Link to="/nghiencuukhoahoc" className="flex items-center">
                  <IconWrapper icon={PiArrowCircleUpLight} />
                  <span className="ml-2">Nghiên cứu khoa học</span>
                </Link>
              </li>

              <li>
                <Link to="/khenthuong" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Khen thưởng</span>
                </Link>
              </li>

              <li>
                <Link to="/kyluat" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Kỷ luật</span>
                </Link>
              </li>

              <li>
                <Link to="/kythikynangnghe" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Kỳ thi kỹ năng nghề</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
      {
        key: "3",
        label: (
          <Link
            to="/quanlyhocvu"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={FaAddressBook} />
            <span className="ml-2">Quản lý đào tạo</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link to="/quanlyhocvu" className="flex items-center">
                  <IconWrapper icon={PiNotebookFill} />
                  <span className="ml-2">Quản lý học vụ</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/quanlyhocsinhtotnghiep"
                  className="flex items-center"
                >
                  <IconWrapper icon={RiGraduationCapFill} />
                  <span className="ml-2">Quản lý HSSV tốt nghiệp</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/quanlyhocsinhsautotnghiep"
                  className="flex items-center"
                >
                  <IconWrapper icon={RiGraduationCapLine} />
                  <span className="ml-2">Quản lý HSSV sau tốt nghiệp</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
      {
        key: "4",
        label: (
          <Link
            to="/hosocanbo"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={FaAddressBook} />
            <span className="ml-2">Quản lý cán bộ nhà giáo</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link to="/hosocanbo" className="flex items-center">
                  <IconWrapper icon={FaAddressBook} />
                  <span className="ml-2">Hồ sơ cán bộ quản lý</span>
                </Link>
              </li>
              <li>
                <Link to="/hosonhagiao" className="flex items-center">
                  <IconWrapper icon={FaAddressBook} />
                  <span className="ml-2">Hồ sơ nhà giáo</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
      {
        key: "5",
        label: (
          <Link
            to="/qlcsvc_phonghoc"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={RiSettings5Fill} />
            <span className="ml-2">Quản lý cơ sở vật chất</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link to="/qlcsvc_phonghoc" className="flex items-center">
                  <IconWrapper icon={PiHouseSimple} />
                  <span className="ml-2">Phòng học</span>
                </Link>
              </li>
              <li>
                <Link to="/qlcsvc_thietbi" className="flex items-center">
                  <IconWrapper icon={RiFolderSettingsFill} />
                  <span className="ml-2">Trang thiết bị</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
      {
        key: "6",
        label: (
          <Link
            to="/thongtinchung"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={FaGears} />
            <span className="ml-2">Thiết lập chung</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link to="/thongtinchung" className="flex items-center">
                  <IconWrapper icon={PiWarningCircleFill} />
                  <span className="ml-2">Thông tin chung CSGDNN</span>
                </Link>
              </li>
              <li>
                <Link to="/quydinhdanhma" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Quy định đánh mã</span>
                </Link>
              </li>
              <li>
                <Link to="/nganhnghedaotao" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Ngành nghề đào tạo</span>
                </Link>
              </li>
              <li>
                <Link to="/monhoc" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Môn học</span>
                </Link>
              </li>
              <li>
                <Link to="/khoahoc" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Khóa học</span>
                </Link>
              </li>
              <li>
                <Link to="/lopkhoahoc" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Lớp Khóa học</span>
                </Link>
              </li>
              <li>
                <Link to="/hinhthuckyluat" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">hình thức kỷ luật</span>
                </Link>
              </li>
              <li>
                <Link to="/hinhthuckhenthuong" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Hình thức khen thưởng</span>
                </Link>
              </li>
              <li>
                <Link to="/thoikhoabieu" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Thời khóa biểu</span>
                </Link>
              </li>
              <li>
                <Link to="/donvitructhuoc" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Đơn vị trực thuộc</span>
                </Link>
              </li>
              <li>
                <Link to="/kythikynangnghe" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Thông tin kỳ thi kỹ năng nghề</span>
                </Link>
              </li>
              <li>
                <Link to="/lophocvu" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Lý do học vụ</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
      {
        key: "7",
        label: (
          <Link
            to="/baocaothongke"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={PiNotepadFill} />
            <span className="ml-2">Báo cáo thống kê</span>
          </Link>
        ),
        children: "",
      },
      {
        key: "8",
        label: (
          <Link
            to="/baocaotaichinh"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={RiBarChartBoxFill} />
            <span className="ml-2">Quản lý báo cáo tài chính</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link to="/baocaotaichinh" className="flex items-center">
                  <IconWrapper icon={FaChevronCircleRight} />
                  <span className="ml-2">Báo cáo tài chính</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
    ];
  } else {
    items = [
      {
        key: "1",
        label: (
          <Link
            to="/nhaptruong"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={FaAddressBook} />
            <span className="ml-2">Quản lý HSSV</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link to="/capnhatlylichsinhvien" className="flex items-center">
                  <IconWrapper icon={PiArrowCircleUpLight} />
                  <span className="ml-2">Lý lịch sinh viên</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <Link
            to="/baocaothongke"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={PiNotepadFill} />
            <span className="ml-2">Thống kê</span>
          </Link>
        ),
        children: "",
      },
      {
        key: "4",
        label: (
          <Link
            to="/tietgiangday"
            className="font-bold text-base flex items-center"
          >
            <IconWrapper icon={FaChalkboardTeacher} />
            <span className="ml-2">Giảng dạy</span>
          </Link>
        ),
        children: (
          <div className="ml-4 mt-2">
            <ul className="space-y-2 [&>li]:cursor-pointer">
              <li>
                <Link to="/tietgiangday" className="flex items-center">
                  <IconWrapper icon={FaAddressBook} />
                  <span className="ml-2">Tiết giảng dạy</span>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
    ];
  }

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="slider basis-2/6 flex flex-col pt-8 w-full max-w-[300px] h-auto min-h-[100vh] bg-neutral-100">
      <Collapse
        key={items.key}
        onChange={onChange}
        items={items}
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={() => {
          return;
        }}
        style={{
          background: "none",
        }}
      />
      ;
    </div>
  );
};

export default Slider;
