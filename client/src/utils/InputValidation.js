export const name_validation = {
  name: "fullName",
  label: "Họ và tên",
  type: "text",
  id: "fullName",
  placeholder: "Nhập họ và tên",
};

export const code_validation = {
  name: "code",
  label: "Mã sinh viên",
  type: "text",
  id: "code",
  placeholder: "Nhập Mã sinh viên",
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
};

export const phone_validation = {
  name: "phone",
  label: "Số điện thoại",
  type: "text",
  id: "phone",
  placeholder: "Nhập số điện thoại",
};

export const ethnic_validation = {
  name: "ethnic",
  label: "dân tộc",
  type: "text",
  id: "ethnic",
  placeholder: "Nhập dân tộc",
};

export const isSex_validation = {
  name: "isSex",
  label: "giới tính",
  select: true,
  id: "isSex",
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

export const levelTraining_validation = {
  name: "levelTraining",
  label: "Trình độ đào tạo",
  type: "text",
  id: "levelTraining",
  placeholder: "Nhập trình độ đào tạo",
};

export const career_validation = {
  name: "career",
  label: "Ngành nghề",
  select: true,
  id: "career",
  options: [],
};
