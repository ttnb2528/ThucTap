const Class = require("../../models/class.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const deleteClass = async (req, res) => {
  try {
    const { _id } = req.query;
    const result = await Class.findByIdAndDelete(_id);
    if (!result) {
      return res.json(
        jsonGenerate(StatusCode.NOT_FOUND, "Không tìm thấy lớp học")
      );
    }
    return res.json(jsonGenerate(StatusCode.OK, "Xóa lớp học thành công"));
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, error.message)
    );
  }
};

module.exports = deleteClass;