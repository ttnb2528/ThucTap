const Joi = require("joi");

const Student = require("../../models/student.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const updateStudent = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
    );
  }

  const _id = req.query._id;

  try {
    const result = await Student.findById(_id);

    if (!result) {
      return res.json(
        jsonGenerate(StatusCode.BAD_REQUEST, "Đã xảy ra lỗi", result)
      );
    }

    const update = await Student.findByIdAndUpdate(
      _id,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.json(jsonGenerate(StatusCode.OK, "Cập nhật sinh viên", update));
  } catch (error) {
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
    date_cccd: Joi.date().required().label("date_cccd"),
    place_cccd: Joi.string().required().label("place_cccd"),
    phone: Joi.string().required().label("phone"),
    ethnic: Joi.string().required().label("ethnic"),
    nationality: Joi.string().required().label("nationality"),
    address: Joi.string().required().label("address"),
    province: Joi.string().required().label("province"),
    district: Joi.string().required().label("district"),
    ward: Joi.string().required().label("wards"),
    dateAdmission: Joi.date().required().label("dateAdmission"),
    educationLevel: Joi.string().required().label("educationLevel"),
    typeOfAdmission: Joi.string().required().label("typeOfAdmission"),
    typeOfTraining: Joi.string().required().label("typeOfTraining"),
    formOfTraining: Joi.string().required().label("formOfTraining"),
    admissionObject: Joi.string().required().label("admissionObject"),
    levelTraining: Joi.string().required().label("levelTraining"),
    career: Joi.string().required().label("career"),
  }).unknown(true);

  return schema.validate(data);
};

module.exports = updateStudent;
