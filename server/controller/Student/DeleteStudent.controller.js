const Student = require("../../models/student.model.js");
const Class = require("../../models/class.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const deleteStudent = async (req, res) => {
  try {
    const studentId = req.query._id;

    // Xóa sinh viên từ collection Student
    const result = await Student.findByIdAndDelete(studentId);

    // Nếu không tìm thấy sinh viên
    if (!result) {
      return res.json(
        jsonGenerate(StatusCode.NOT_FOUND, "Sinh viên không tồn tại")
      );
    }

    // Tìm lớp học mà sinh viên đang học và gỡ bỏ sinh viên đó khỏi danh sách sinh viên của lớp
    const classInfo = await Class.findOne({ students: studentId });
    if (classInfo) {
      classInfo.students.pull(studentId); // Gỡ bỏ sinh viên khỏi danh sách sinh viên của lớp
      await classInfo.save();
    }

    return res.json(
      jsonGenerate(StatusCode.OK, "Xoá Sinh Viên thành công", result)
    );
  } catch (error) {
    console.error(error);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Lỗi nội bộ của máy chủ")
    );
  }
};

module.exports = deleteStudent;
