const Joi = require("joi");

const Subject = require("../../models/subject.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createSubject = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.json(
      jsonGenerate(StatusCode.BAD_REQUEST, error.details[0].message)
    );
  }

  try {
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
    code: Joi.string().required().label("code"),
    name: Joi.string().required().label("name"),
    career: Joi.string().required().label("career"),
    type: Joi.string().required().label("type"),
  }).unknown(true);

  return schema.validate(data);
};

module.exports = createSubject;
