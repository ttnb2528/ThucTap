const Joi = require("joi");
const Subject = require("../../models/subject.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const updateSubject = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.json(
      jsonGenerate(StatusCode.BAD_REQUEST, error.details[0].message)
    );
  }

  try {
    const { _id } = req.query;

    const result = await Subject.findById(_id);

    if (!result) {
      return res.json(
        jsonGenerate(StatusCode.MULTIPLECHOICE, "Không tìm thấy môn học")
      );
    }

    const existingSubject = await Subject.findOne({
      code: req.body.code,
      _id: {
        $ne: _id,
      },
    });

    const existingSubjectName = await Subject.findOne({
      name: req.body.name,
      _id: {
        $ne: _id,
      },
    });

    if (existingSubject || existingSubjectName) {
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "Mã hoặc tên môn học đã tồn tại trong hệ thống"
        )
      );
    }

    const subject = await Subject.findByIdAndUpdate(
      _id,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.json(
      jsonGenerate(StatusCode.OK, "Cập nhật môn học thành công", subject)
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

module.exports = updateSubject;
