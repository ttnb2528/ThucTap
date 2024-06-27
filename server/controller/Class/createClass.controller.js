const Joi = require("joi");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");
const Class = require("../../models/class.model.js");

const createClass = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
    );
  }

  try {
    const { className, career } = req.body;
    const existingClass = await Class.findOne({ className, career });

    if (existingClass) {
      return res.json(
        jsonGenerate(StatusCode.MULTIPLECHOICE, "Lớp đã tồn tại")
      );
    }

    const result = await Class.create({
      ...req.body,
    });

    return res.json(
      jsonGenerate(StatusCode.OK, "Tạo lớp học thành công", result)
    );
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, error.message)
    );
  }
};

const validate = (data) => {
  const schema = Joi.object({
    className: Joi.string().required().label("Tên lớp"),
    // course: Joi.string().required().label("Khóa"),
    career: Joi.string().required().label("Tên ngành"),
    // year: Joi.string().required().label("Năm"),
  })
    .messages({
      "string.empty": "{#label} không được để trống",
      "any.required": "{#label} là bắt buộc",
      "string.base": "{#label} phải là chuỗi ký tự",
    })
    .unknown(true);

  return schema.validate(data);
};

module.exports = createClass;
