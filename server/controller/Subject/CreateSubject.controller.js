const Subject = require("../../models/subject.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createSubject = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.json(jsonGenerate(StatusCode.BAD_REQUEST, "Name is required"));
  }

  try {
    const result = await Subject.create({
      name,
    });
    return res.json(
      jsonGenerate(StatusCode.ACCEPTED, "Create success", result)
    );
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = createSubject;