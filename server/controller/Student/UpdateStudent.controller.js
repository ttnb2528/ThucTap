const Student = require("../../models/student.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const updateStudent = async (req, res) => {
  const _id = req.query._id;
  try {
    const result = await Student.findById(_id);

    if (!result) {
      return res.json(
        jsonGenerate(StatusCode.BAD_REQUEST, "Đã xảy ra lỗi", result)
      );
    }

    const update = await Student.findByIdAndUpdate(
      _id,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.json(jsonGenerate(StatusCode.OK, "Cập nhật sinh viên", update));
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = updateStudent;
