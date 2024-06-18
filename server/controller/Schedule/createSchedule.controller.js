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
    fullName: Joi.string().required(),
    career: Joi.string().required(),
    subject: Joi.string().required(),
    dayOfWeek: Joi.string().valid("2", "3", "4", "5", "6", "7").required(),
    session: Joi.string().valid("sáng", "chiều").required(),
    periods: Joi.string().valid("kỳ 1", "kỳ 2", "kỳ 3", "kỳ 4").required(),
    classPeriod: Joi.string().required(),
    room: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = createSchedule;
