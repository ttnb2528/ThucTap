const Career = require("../../models/career.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createCareer = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.json(
      jsonGenerate(StatusCode.BAD_REQUEST, "Tên ngành học không được để trống")
    );
  }
  try {
    const result = await Career.create({
      ...req.body,
    });

    return res.json(jsonGenerate(StatusCode.OK, "Tạo ngành học", result));
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = createCareer;
