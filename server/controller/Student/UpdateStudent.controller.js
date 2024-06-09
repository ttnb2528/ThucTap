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
    ethnic: Joi.string().required().label("ethnic"),
    address: Joi.string().required().label("address"),
    phone: Joi.string().required().label("phone"),
    levelTraining: Joi.string().required().label("levelTraining"),
    career: Joi.string().required().label("career"),
  });

  return schema.validate(data);
};

module.exports = updateStudent;
