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
  // required: true,
};

export const ethnic_validation = {
  name: "ethnic",
  label: "dân tộc",
  type: "text",
  id: "ethnic",
  placeholder: "Nhập dân tộc",
};

export const nationality_validation = {
  name: "nationality",
  label: "quốc tịch",
  type: "text",
  id: "nationality",
  placeholder: "Nhập quốc tịch",
};

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
};

export const typeOfAdmission_validation = {
  name: "typeOfAdmission",
  label: "Hình thức tuyển sinh",
  type: "text",
  id: "typeOfAdmission",
  placeholder: "Nhập hình thức tuyển sinh",
};

export const typeOfTraining_validation = {
  name: "typeOfTraining",
  label: "Loại hình đào tạo",
  type: "text",
  id: "typeOfTraining",
  placeholder: "Nhập loại hình đào tạo",
};

export const formOfTraining_validation = {
  name: "formOfTraining",
  label: "Hình thức đào tạo",
  type: "text",
  id: "formOfTraining",
  placeholder: "Nhập hình thức đào tạo",
};

export const admissionObject_validation = {
  name: "admissionObject",
  label: "Đối tượng tuyển sinh",
  type: "text",
  id: "admissionObject",
  placeholder: "Nhập đối tượng tuyển sinh",
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

export const cccd_validation = {
  name: "cccd",
  label: "CMTND/CCCD/Hộ chiếu",
  type: "text",
  id: "cccd",
  placeholder: "Nhập căng cước công dân",
  required: true,
};

export const place_cccd_validation = {
  name: "place_cccd",
  label: "Nơi cấp",
  type: "text",
  value: "Cục cảnh sát quản lý hành chính về trật tự xã hội",
  id: "place_cccd",
  placeholder: "Nhập nơi cấp",
  required: true,
};

export const email_validation = {
  name: "email",
  label: "Email",
  type: "email",
  id: "email",
  placeholder: "Nhập email",
};

export const guardianName_validation = {
  name: "guardianName",
  label: "Họ và tên người giám hộ",
  type: "text",
  id: "guardianName",
  placeholder: "Nhập họ và tên người giám hộ",
};

export const relationshipWithStudent_validation = {
  name: "relationshipWithStudent",
  label: "Quan hệ với sinh viên",
  type: "text",
  id: "relationshipWithStudent",
  placeholder: "Nhập quan hệ với sinh viên",
};

export const cccd_guardian_validation = {
  name: "cccd_guardian",
  label: "CMTND/CCCD/Hộ chiếu người giám hộ",
  type: "text",
  id: "cccd_guardian",
  placeholder: "Nhập căng cước công dân người giám hộ",
};

export const phone_guardian_validation = {
  name: "phone_guardian",
  label: "Số điện thoại người giám hộ",
  type: "text",
  id: "phone_guardian",
  placeholder: "Nhập số điện thoại người giám hộ",
};

export const religion_validation = {
  name: "religion",
  label: "Tôn giáo",
  type: "text",
  id: "religion",
  placeholder: "Nhập tôn giáo",
};

export const policyObject_validation = {
  name: "policyObject",
  label: "Đối tượng chính sách",
  type: "text",
  id: "policyObject",
  placeholder: "Nhập đối tượng chính sách",
};

export const priorityObject_validation = {
  name: "priorityObject",
  label: "Đối tượng ưu tiên",
  type: "text",
  id: "priorityObject",
  placeholder: "Nhập đối tượng ưu tiên",
};

export const place_group_validation = {
  name: "place_group",
  label: "Nơi vào đoàn",
  type: "text",
  id: "place_group",
  placeholder: "Nhập nơi vào đoàn",
};

export const place_party_validation = {
  name: "place_party",
  label: "Nơi vào đảng",
  type: "text",
  id: "place_party",
  placeholder: "Nhập nơi vào đảng",
};

const yearCourse = new Date().getFullYear();
const courses = [
  `${yearCourse - 1} - ${yearCourse}`,
  `${yearCourse} - ${yearCourse + 1}`,
  `${yearCourse + 1} - ${yearCourse + 2}`,
];

export const course_validation = {
  name: "course",
  label: "Khóa",
  select: true,
  id: "course",
  placeholder: "Nhập khóa",
  required: true,
  options: [
    { name: "Chọn khóa", value: "" },
    ...courses.map((course) => ({
      name: course,
      value: course,
    })),
  ],
};

export const classCourse_validation = {
  name: "classCourse",
  label: "Lớp",
  select: true,
  required: true,
  id: "classCourse",
  placeholder: "Nhập lớp",
  options: [],
};
