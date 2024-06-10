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
    phone: Joi.string().required().label("phone"),
    ethnic: Joi.string().required().label("ethnic"),
    nationality: Joi.string().required().label("nationality"),
    address: Joi.string().required().label("address"),
    province: Joi.string().required().label("province"),
    district: Joi.string().required().label("district"),
    wards: Joi.string().required().label("wards"),
    dateAdmission: Joi.date().required().label("dateAdmission"),
    educationLevel: Joi.string().required().label("educationLevel"),
    typeOfAdmission: Joi.string().required().label("typeOfAdmission"),
    typeOfTraining: Joi.string().required().label("typeOfTraining"),
    formOfTraining: Joi.string().required().label("formOfTraining"),
    admissionObject: Joi.string().required().label("admissionObject"),
    levelTraining: Joi.string().required().label("levelTraining"),
    career: Joi.string().required().label("career"),
  });

  return schema.validate(data);
};

module.exports = createInfoStudent;
