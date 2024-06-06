const Career = require("../../models/career.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listCareer = async (req, res) => {
  const result = await Career.find();
  if (result) {
    res.json(jsonGenerate(StatusCode.OK, "List career", result));
  } else {
    res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = listCareer;