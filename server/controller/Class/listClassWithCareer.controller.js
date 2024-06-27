const Class = require("../../models/class.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listClassWithCareer = async (req, res) => {
  const { _id } = req.query;

  if (_id) {
    try {
      const result = await Class.find({ career: _id })
        .populate("career")
        .populate("students");

      if (result.length > 0) {
        return res.json(jsonGenerate(StatusCode.OK, "Thành công", result));
      } else {
        return res.json(
          jsonGenerate(StatusCode.MULTIPLECHOICE, "Không có dữ liệu", result)
        );
      }
    } catch (error) {
      return res.json(
        jsonGenerate(
          StatusCode.INTERNAL_SERVER_ERROR,
          "Internal Server Error",
          error.message
        )
      );
    }
  } else {
    return res.json(jsonGenerate(StatusCode.BAD_REQUEST, "Thiếu thông tin"));
  }
};

module.exports = listClassWithCareer;
