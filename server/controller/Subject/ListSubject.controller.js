const Subject = require("../../models/subject.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listSubject = async (req, res) => {
  const result = await Subject.find();
  if (result) {
    res.json(jsonGenerate(StatusCode.OK, "List subject", result));
  } else {
    res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = listSubject;