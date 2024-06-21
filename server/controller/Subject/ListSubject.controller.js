const Subject = require("../../models/subject.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listSubject = async (req, res) => {
  try {
    const { idCareer } = req.query;

    if (!idCareer) {
      const result = await Subject.find().populate("career");
      if (result) {
        res.json(jsonGenerate(StatusCode.OK, "List subject", result));
      } else {
        res.json(
          jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "No subjects found")
        );
      }
    } else {
      const result = await Subject.find({ career: idCareer }).populate(
        "career"
      );
      if (result) {
        res.json(jsonGenerate(StatusCode.OK, "List subject", result));
      } else {
        res.json(
          jsonGenerate(
            StatusCode.INTERNAL_SERVER_ERROR,
            "No subjects found for the specified career"
          )
        );
      }
    }
  } catch (error) {
    console.error("Error in listSubject:", error);
    res.json(
      jsonGenerate(
        StatusCode.INTERNAL_SERVER_ERROR,
        "Internal Server Error",
        error.message
      )
    );
  }
};

module.exports = listSubject;
