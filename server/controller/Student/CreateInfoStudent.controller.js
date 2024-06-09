const Joi = require("joi");

const Student = require("../../models/student.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createInfoStudent = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
    );
  }
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

const validate = (data) => {
  const schema = Joi.object({
    code: Joi.string().required().label("code"),
    fullName: Joi.string().required().label("fullName"),
    date: Joi.date().required().label("date"),
    isSex: Joi.string().required().label("isSex"),
    cccd: Joi.string().required().label("cccd"),
    ethnic: Joi.string().required().label("ethnic"),
    address: Joi.string().required().label("address"),
    phone: Joi.string().required().label("phone"),
    levelTraining: Joi.string().required().label("levelTraining"),
    career: Joi.string().required().label("career"),
  });

  return schema.validate(data);
};

module.exports = createInfoStudent;
