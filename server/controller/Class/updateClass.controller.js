const Joi = require("joi");
const { jsonGenerate } = require("../../utils/helpers.js");
const { StatusCode } = require("../../utils/constants.js");
const Class = require("../../models/class.model.js");

const updateClass = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.json(
      jsonGenerate(StatusCode.BAD_REQUEST, error.details[0].message)
    );
  }

  const { _id } = req.query;
  try {
    const result = await Class.findById(_id);

    if (!result) {
      return res.json(
        jsonGenerate(StatusCode.MULTIPLECHOICE, "Không tìm thấy lớp học")
      );
    }

    const update = await Class.findByIdAndUpdate(
      _id,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.json(
      jsonGenerate(StatusCode.OK, "Cập nhật lớp học thành công", update)
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
    course: Joi.string().required().label("Khóa"),
    career: Joi.string().required().label("Tên ngành"),
    year: Joi.string().required().label("Năm"),
  })
    .messages({
      "string.empty": "{#label} không được để trống",
      "any.required": "{#label} là bắt buộc",
      "string.base": "{#label} phải là chuỗi ký tự",
    })
    .unknown(true);

  return schema.validate(data);
};

module.exports = updateClass;
