const Student = require("../../models/student.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const deleteStudent = async (req, res) => {
  try {
    console.log(req.query._id);
    const result = await Student.findByIdAndDelete({
      _id: req.query._id,
    });

    return res.json(jsonGenerate(StatusCode.OK, "Xoá Sinh Viên", result));
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = deleteStudent;
