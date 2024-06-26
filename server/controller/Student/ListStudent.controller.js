const Student = require("../../models/student.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listStudent = async (req, res) => {
  const result = await Student.find().populate([
    { path: "career", model: "career" },
    { path: "classCourse", model: "class" },
    { path: "grades.subject", model: "subject" },
  ]);

  if (result) {
    res.json(jsonGenerate(StatusCode.OK, "List student", result));
  } else {
    res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = listStudent;
