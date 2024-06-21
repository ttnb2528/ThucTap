const regTeach = require("../../models/schedule.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const getSchedule = async (req, res) => {
  try {
    const schedules = await regTeach.find().populate("subject").populate("career");

    const timetable = [];

    schedules.forEach((entry) => {
      timetable.push({
        year: entry.year,
        career: entry.career.name,
        period: entry.period,
        day: entry.dayOfWeek,
        session: entry.session,
        room: entry.room,
        teacher: entry.fullName,
        subject: entry.subject.code,
        classPeriod: entry.classPeriod,
      });
    });

    return res.json(jsonGenerate(StatusCode.OK, "Success", timetable));
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = getSchedule;
