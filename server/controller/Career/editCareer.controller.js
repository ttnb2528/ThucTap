const Joi = require("joi");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");
const Career = require("../../models/Career.model.js");

const editCareer = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
    );
  }

  try {
    const _id = req.query._id;
    const result = await Career.findById(_id);

    if (!result) {
      return res.json(
        jsonGenerate(StatusCode.MULTIPLECHOICE, "Không tìm thấy ngành", result)
      );
    }

    const existingCareerName = await Career.findOne({
      name: req.body.name,
      _id: {
        $ne: _id,
      },
    });

    const existingCareerCode = await Career.findOne({
      code: req.body.code,
      _id: {
        $ne: _id,
      },
    });

    if (existingCareerName || existingCareerCode) {
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "Mã hoặc tên ngành học đã tồn tại trong hệ thống"
        )
      );
    }

    const update = await Career.findByIdAndUpdate(
      _id,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.json(jsonGenerate(StatusCode.OK, "Cập nhật ngành học", update));
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error", error)
    );
  }
};

const validate = (data) => {
  const schema = Joi.object({
    code: Joi.string().required().label("Mã ngành"),
    levelStraining: Joi.string().required().label("Trình độ đào tạo"),
    Circulars: Joi.string().required().label("Thông tư"),
    name: Joi.string().required().label("Tên ngành"),
  })
    .messages({
      "string.empty": "{#label} không được để trống",
      "any.required": "{#label} là bắt buộc",
      "string.base": "{#label} phải là chuỗi ký tự",
    })
    .unknown(true);

  return schema.validate(data);
};

module.exports = editCareer;
