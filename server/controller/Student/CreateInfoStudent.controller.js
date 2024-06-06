const Student = require("../../models/student.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createInfoStudent = async (req, res) => {
  const { code } = req.body;

  const result = await Student.findOne({
    code: code,
  });

  if (result) {
    return res.json(
      jsonGenerate(
        StatusCode.MULTIPLECHOICE,
        "Student code is duplicated, try again."
      )
    );
  }

  try {
    const data = await Student.create({
      ...req.body,
    });

    if (data) {
      return res.json(
        jsonGenerate(StatusCode.OK, "Student created successfully", data)
      );
    }
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = createInfoStudent;
