const Student = require("../../models/student.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const listStudentWithCondition = async (req, res) => {
  try {
    const { fullName, cccd, course, career, classCourse } = req.query;
    console.log(fullName);
    console.log(cccd);
    console.log(course);
    console.log(career);
    console.log(classCourse);
    let filter = {};

    if (course !== "all") {
      filter.course = course;
    }

    if (career !== "all") {
      filter.career = career;
    }

    if (classCourse !== "all") {
      filter.classCourse = classCourse;
    }

    if (fullName) {
      filter.fullName = { $regex: fullName, $options: "i" };
    }

    if (cccd) {
      filter.cccd = { $regex: cccd, $options: "i" };
    }

    if (
      course === "all" &&
      career === "all" &&
      classCourse === "all" &&
      !fullName &&
      !cccd
    ) {
      const result = await Student.find().populate([
        { path: "career", model: "career" },
        { path: "classCourse", model: "class" },
        { path: "grades.subject", model: "subject" },
      ]);

      return res.json(jsonGenerate(StatusCode.OK, "List student", result));
    }

    const result = await Student.find(filter).populate([
      { path: "career", model: "career" },
      { path: "classCourse", model: "class" },
      { path: "grades.subject", model: "subject" },
    ]);

    return res.json(jsonGenerate(StatusCode.OK, "List student", result));
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = listStudentWithCondition;
