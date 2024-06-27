const Joi = require("joi");

const schedule = require("../../models/schedule.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createSchedule = async (req, res) => {
  const { error } = validateTeacher(req.body);
  if (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
    );
  }

  try {
    // Lấy các lịch học hiện tại trong cùng buổi và ngày trong tuần
    const existingSchedules = await schedule.find({
      year: req.body.year,
      period: req.body.period,
      dayOfWeek: req.body.dayOfWeek,
      session: req.body.session,
      room: req.body.room,
    });

    // Tách các tiết học từ chuỗi `classPeriod`
    const newClassPeriods = req.body.classPeriod.split(",").map(Number);

    // Kiểm tra sự trùng lặp về buổi và số tiết
    for (let existingSchedule of existingSchedules) {
      const existingClassPeriods = existingSchedule.classPeriod
        .split(",")
        .map(Number);
      for (let period of newClassPeriods) {
        if (existingClassPeriods.includes(period)) {
          return res.json(
            jsonGenerate(
              StatusCode.MULTIPLECHOICE,
              "Trùng tiết học hoặc buổi với một môn học khác"
            )
          );
        }
      }
    }

    const result = await schedule.create({
      ...req.body,
    });

    if (result) {
      return res.json(
        jsonGenerate(StatusCode.OK, "Sắp lịch thành công", result)
      );
    }
  } catch (err) {
    console.log(err);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

const validateTeacher = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().required().label("Tên giáo viên"),
    career: Joi.string().required().label("Ngành học"),
    subject: Joi.string().required().label("Môn học"),
    dayOfWeek: Joi.string()
      .valid("Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7")
      .required()
      .label("Thứ"),
    session: Joi.string().valid("Sáng", "Chiều").required().label("Buổi"),
    year: Joi.string().required().label("Năm học"),
    period: Joi.string()
      .valid("Học kỳ 1", "Học kỳ 2", "Học kỳ 3", "Học kỳ 4")
      .required()
      .label("Học kỳ"),
    classPeriod: Joi.string().required().label("Tiết học"),
    room: Joi.string().required().label("Phòng học"),
  }).message({
    "string.base": "{#label} phải là chuỗi",
    "string.empty": "{#label} không được để trống",
    "any.required": "{#label} không được để trống",
    "string.valid": "{#label} không hợp lệ",
  });

  return schema.validate(data);
};

module.exports = createSchedule;
