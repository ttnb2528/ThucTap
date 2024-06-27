const Class = require("../../models/class.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const deleteClass = async (req, res) => {
  try {
    const { _id } = req.query;
    const result = await Class.findById(_id);

    if (result.students.length > 0) {
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "Không thể xóa lớp học vì lớp học đang chứa sinh viên"
        )
      );
    }

    const deleteClass = await Class.findByIdAndDelete(_id);

    return res.json(
      jsonGenerate(StatusCode.OK, "Xóa lớp học thành công", deleteClass)
    );
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, error.message)
    );
  }
};

module.exports = deleteClass;
