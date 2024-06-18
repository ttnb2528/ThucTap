const Joi = require("joi");

const Career = require("../../models/career.model.js");
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
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

const validate = (data) => {
  const schema = Joi.object({
    code: Joi.string().required().label("code"),
    levelStraining: Joi.string().required().label("levelStraining"),
    Circulars: Joi.string().required().label("Circulars"),
    name: Joi.string().required().label("name"),
  }).unknown(true);

  return schema.validate(data);
};

module.exports = createCareer;
