const Subject = require("../../models/subject.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const deleteSubject = async (req, res) => {
  try {
    const { _id } = req.query;
    const subject = await Subject.findByIdAndDelete(_id);
    if (!subject) {
      return res.json(
        jsonGenerate(StatusCode.MULTIPLECHOICE, "không tìm thấy môn học")
      );
    }
    res.json(jsonGenerate(StatusCode.OK, "Xóa môn học thành công"));
  } catch (error) {
    res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = deleteSubject;
