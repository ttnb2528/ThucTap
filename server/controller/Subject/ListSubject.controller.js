const Subject = require("../../models/subject.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listSubject = async (req, res) => {
  try {
    const result = await Subject.find().populate("career");
    if (result) {
      return res.json(jsonGenerate(StatusCode.OK, "List subject", result));
    } else {
      return res.json(
        jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "No subjects found")
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
};

module.exports = listSubject;
