const regTeach = require("../../models/schedule.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const getSchedule = async (req, res) => {
  try {
    const schedules = await regTeach.find().populate("subject");

    const timetable = {};

    schedules.forEach((entry) => {
      const period = entry.periods;
      const day = entry.dayOfWeek;
      const session = entry.session;
      const room = entry.room;

      // Initialize period if it doesn't exist
      if (!timetable[period]) {
        timetable[period] = {};
      }

      // Initialize day if it doesn't exist within the period
      if (!timetable[period][day]) {
        timetable[period][day] = { "sáng": [], "chiều": [] };
      }

      // Initialize session if it doesn't exist within the day
      if (!timetable[period][day][session]) {
        timetable[period][day][session] = [];
      }

      // Add the entry to the timetable
      timetable[period][day][session].push({
        teacher: entry.fullName,
        subject: entry.subject.name,
        room: room,
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
