const Joi = require("joi");

const Career = require("../../models/Career.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createCareer = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.json(
      jsonGenerate(StatusCode.BAD_REQUEST, error.details[0].message)
    );
  }

  try {
    const result = await Career.create({
      ...req.body,
    });

    return res.json(
      jsonGenerate(StatusCode.OK, "Tạo ngành học thành công", result)
    );
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
      "string.empty": "{#label} Không được để trống",
      "string.base": "{#label} phải là chuỗi",
      "any.required": "{#label} Không được để trống",
    })
    .unknown(true);

  return schema.validate(data);
};

module.exports = createCareer;
