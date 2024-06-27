const Joi = require("joi");
const { jsonGenerate } = require("../../utils/helpers.js");
const { StatusCode } = require("../../utils/constants.js");
const Class = require("../../models/class.model.js");

const updateClass = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
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

    const { className, career } = req.body;

    const existingClass = await Class.findOne({
      className,
      career,
      _id: {
        $ne: _id, // Thêm điều kiện này để loại bỏ lớp học hiện tại khỏi kiểm tra trùng lặp
      },
    });

    if (existingClass) {
      return res.json(
        jsonGenerate(StatusCode.MULTIPLECHOICE, "Lớp học đã tồn tại")
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
    year: Joi.number().required().label("Năm"),
  })
    .messages({
      "string.empty": "{#label} không được để trống",
      "any.required": "{#label} là bắt buộc",
      "string.base": "{#label} phải là chuỗi ký tự",
      "number.base": "{#label} phải là số",
    })
    .unknown(true);

  return schema.validate(data);
};

module.exports = updateClass;
