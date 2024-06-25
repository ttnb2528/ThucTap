const Career = require("../../models/Career.model.js");

const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listCareerWithCondition = async (req, res) => {
  try {
    const { code, name, levelStraining } = req.query;

    let filter = {};

    if (code) {
      filter.code = { $regex: code, $options: "i" };
    }

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (levelStraining !== "all") {
      filter.levelStraining = levelStraining;
    }

    if (!code && !name && levelStraining === "all") {
      const result = await Career.find();

      return res.json(jsonGenerate(StatusCode.OK, "List career", result));
    }

    const result = await Career.find(filter);

    return res.json(jsonGenerate(StatusCode.OK, "List career", result));
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

module.exports = listCareerWithCondition;
