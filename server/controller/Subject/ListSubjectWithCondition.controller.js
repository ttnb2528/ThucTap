const Subject = require("../../models/subject.model.js");

const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listSubjectWithCondition = async (req, res) => {
  try {
    const { code, name, type, career } = req.query;

    let condition = {};

    if (code) {
      condition.code = { $regex: code, $options: "i" };
    }

    if (name) {
      condition.name = { $regex: name, $options: "i" };
    }

    if (type !== "all") {
      condition.type = type;
    }

    if (career !== "all") {
      condition.career = career;
    }

    if (!code && !name && type === "all" && career === "all") {
      const result = await Subject.find().populate("career");
      return res.json(jsonGenerate(StatusCode.OK, "List subject", result));
    }

    const result = await Subject.find(condition).populate("career");
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

module.exports = listSubjectWithCondition;
