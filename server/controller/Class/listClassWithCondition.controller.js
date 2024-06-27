const Class = require("../../models/class.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listClassWithCondition = async (req, res) => {
  try {
    const { course, career } = req.query;

    let filter = {};

    if (course !== "all") {
      filter.course = course;
    }

    if (career !== "all") {
      filter.career = career;
    }

    if (course === "all" && career === "all") {
      const result = await Class.find().populate("career").populate("students");
      return res.json(jsonGenerate(StatusCode.OK, "Thành công", result));
    }

    const result = await Class.find(filter)
      .populate("career")
      .populate("students");

    if (result) {
      return res.json(jsonGenerate(StatusCode.OK, "Thành công", result));
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

module.exports = listClassWithCondition;
