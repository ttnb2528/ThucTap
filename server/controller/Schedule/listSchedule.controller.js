const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");
const regTeach = require("../../models/schedule.model.js");

const listSchedule = async (req, res) => {
  try {
    const result = await regTeach
      .find()
      .populate("subject");
    if (result) {
      return res.json(jsonGenerate(StatusCode.OK, "Success", result));
    }
  } catch (err) {
    console.log(err);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = listSchedule;
