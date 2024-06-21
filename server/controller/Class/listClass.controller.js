const Class = require("../../models/class.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listClass = async (req, res) => {
  try {
    const result = await Class.find().populate("career").populate("students");
    return res.json(jsonGenerate(StatusCode.OK, "Thành công", result));
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, error.message)
    );
  }
};

module.exports = listClass;
