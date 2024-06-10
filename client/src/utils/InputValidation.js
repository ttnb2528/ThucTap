export const name_validation = {
  name: "fullName",
  label: "Họ và tên",
  type: "text",
  id: "fullName",
  placeholder: "Nhập họ và tên",
  required: true,
};

export const code_validation = {
  name: "code",
  label: "Mã sinh viên",
  type: "text",
  id: "code",
  placeholder: "Nhập Mã sinh viên",
  required: true,
};

export const cccd_validation = {
  name: "cccd",
  label: "CMTND/CCCD/Hộ chiếu",
  type: "text",
  id: "cccd",
  placeholder: "Nhập căng cước công dân",
};

export const address_validation = {
  name: "address",
  label: "Địa chỉ",
  multiline: true,
  id: "address",
  placeholder: "Nhập địa chỉ",
  required: true,
};

export const province_validation = {
  name: "province",
  label: "tỉnh/Thành phố",
  multiline: true,
  id: "province",
  placeholder: "Nhập tỉnh/Thành phố",
  required: true,
};

export const district_validation = {
  name: "district",
  label: "Quận/Huyện",
  multiline: true,
  id: "district",
  placeholder: "Nhập Quận/Huyện",
  required: true,
};

export const wards_validation = {
  name: "wards",
  label: "Phường/Xã",
  multiline: true,
  id: "wards",
  placeholder: "Nhập Phường/Xã",
  required: true,
};

export const phone_validation = {
  name: "phone",
  label: "Số điện thoại",
  type: "text",
  id: "phone",
  placeholder: "Nhập số điện thoại",
  required: true,
};

export const ethnic_validation = {
  name: "ethnic",
  label: "dân tộc",
  type: "text",
  id: "ethnic",
  placeholder: "Nhập dân tộc",
  required: true,
};

export const nationality_validation = {
  name: "nationality",
  label: "quốc tịch",
  type: "text",
  id: "nationality",
  placeholder: "Nhập quốc tịch",
  required: true,
}

export const isSex_validation = {
  name: "isSex",
  label: "giới tính",
  select: true,
  id: "isSex",
  required: true,
  options: [
    {
      name: "Chọn giới tính",
      value: "",
    },
    {
      name: "Nam",
      value: "Nam",
    },
    {
      name: "Nữ",
      value: "Nữ",
    },
  ],
};

export const educationLevel_validation = {
  name: "educationLevel",
  label: "Trình độ học vấn",
  type: "text",
  id: "educationLevel",
  placeholder: "Nhập trình độ học vấn",
  required: true,
};

export const typeOfAdmission_validation = {
  name: "typeOfAdmission",
  label: "Hình thức tuyển sinh",
  type: "text",
  id: "typeOfAdmission",
  placeholder: "Nhập hình thức tuyển sinh",
  required: true,
};

export const typeOfTraining_validation = {
  name: "typeOfTraining",
  label: "Loại hình đào tạo",
  type: "text",
  id: "typeOfTraining",
  placeholder: "Nhập loại hình đào tạo",
  required: true,
};

export const formOfTraining_validation = {
  name: "formOfTraining",
  label: "Hình thức đào tạo",
  type: "text",
  id: "formOfTraining",
  placeholder: "Nhập hình thức đào tạo",
  required: true,
};

export const admissionObject_validation = {
  name: "admissionObject",
  label: "Đối tượng tuyển sinh",
  type: "text",
  id: "admissionObject",
  placeholder: "Nhập đối tượng tuyển sinh",
  required: true,
};

export const levelTraining_validation = {
  name: "levelTraining",
  label: "Trình độ đào tạo",
  type: "text",
  id: "levelTraining",
  placeholder: "Nhập trình độ đào tạo",
  required: true,
};

export const career_validation = {
  name: "career",
  label: "Ngành nghề",
  select: true,
  id: "career",
  required: true,
  options: [],
};
