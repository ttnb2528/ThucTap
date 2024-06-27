const Joi = require("joi");

const Subject = require("../../models/subject.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createSubject = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
    );
  }

  try {
    const { code, name } = req.body;
    const existingSubject = await Subject.findOne({
      code: code,
    });

    const existingSubjectName = await Subject.findOne({
      name: name,
    });

    if (existingSubject || existingSubjectName) {
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "Mã hoặc tên môn học đã tồn tại trong hệ thống"
        )
      );
    }

    const result = await Subject.create({
      ...req.body,
    });
    return res.json(
      jsonGenerate(StatusCode.OK, "Thêm môn học thành công", result)
    );
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal Server Error")
    );
  }
};

const validate = (data) => {
  const schema = Joi.object({
    code: Joi.string().required().label("Mã môn học"),
    name: Joi.string().required().label("Tên môn học"),
    career: Joi.string().required().label("Ngành"),
    type: Joi.string().required().label("Loại"),
  })
    .messages({
      "string.empty": "{#label} không được để trống",
      "any.required": "{#label} là bắt buộc",
      "string.base": "{#label} phải là chuỗi ký tự",
    })
    .unknown(true);

  return schema.validate(data);
};

module.exports = createSubject;
