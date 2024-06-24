import * as XLSX from "xlsx";
import moment from "moment";

export const exportXLSX = (name, data) => {
  const formattedData = data.map((student) => ({
    "Mã sinh viên": student?.code,
    "Họ và tên": student?.fullName,
    "Ngày sinh": student?.date
      ? moment(student?.date).format("DD-MM-YYYY")
      : "",
    "Giới tính": student?.isSex,
    "Số CCCD": student?.cccd,
    "Ngày cấp CCCD": student?.date_cccd
      ? moment(student?.date_cccd).format("DD-MM-YYYY")
      : "",
    "Nơi cấp CCCD": student?.place_cccd,
    "Số điện thoại": student?.phone,
    Email: student?.email,
    "Họ tên người giám hộ": student?.guardianName,
    "Quan hệ với sinh viên": student?.relationshipWithStudent,
    "Số CCCD người giám hộ": student?.cccd_guardian,
    "Số điện thoại người giám hộ": student?.phone_guardian,
    "Dân tộc": student?.ethnic,
    "Tôn giáo": student?.religion,
    "Quốc tịch": student?.nationality,
    "Địa chỉ": student?.address,
    "Tỉnh/Thành phố": student?.province,
    "Quận/Huyện": student?.district,
    "Phường/Xã": student?.ward,
    "Đối tượng chính sách": student?.policyObject,
    "Đối tượng ưu tiên": student?.priorityObject,
    "Ngày vào đoàn": student?.date_group
      ? moment(student?.date_group).format("DD-MM-YYYY")
      : "",
    "Nơi vào đoàn": student?.place_group,
    "Ngày vào đảng": student?.date_party
      ? moment(student?.date_party).format("DD-MM-YYYY")
      : "",
    "Nơi vào đảng": student?.place_party,
    "Ngày nhập học": student?.dateAdmission
      ? moment(student?.dateAdmission).format("DD-MM-YYYY")
      : "",
    "Trình độ học vấn": student?.educationLevel,
    "Hình thức tuyển sinh": student?.typeOfAdmission,
    "Loại hình đào tạo": student?.typeOfTraining,
    "Hình thức đào tạo": student?.formOfTraining,
    "Đối tượng tuyển sinh": student?.admissionObject,
    Khóa: student?.course,
    Lớp: student?.classCourse?.className,
    Ngành: student?.career?.name,
  }));

  const columnWidths = {};
  formattedData.forEach((row) => {
    Object.keys(row).forEach((key) => {
      const value = row[key];
      const cellLength = value ? String(value).length : 10; // Độ dài của giá trị, nếu không có giá trị thì là 10
      if (!columnWidths[key] || columnWidths[key] < cellLength) {
        columnWidths[key] = cellLength;
      }
    });
  });

  const wscols = Object.keys(columnWidths).map((key) => ({
    wch: columnWidths[key] + 4, // cộng thêm một số cho mỗi ô để tránh trường hợp giá trị bị cắt
  }));

  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.json_to_sheet(formattedData);
  ws["!cols"] = wscols; // Áp dụng độ rộng cho từng cột
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, name);
};
