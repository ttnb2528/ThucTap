const Career = require("../../models/Career.model");
const { StatusCode } = require("../../utils/constants");
const { jsonGenerate } = require("../../utils/helpers");

const deleteCareer = async (req, res) => {
  try {
    console.log(req.query._id);
    const result = await Career.findByIdAndDelete({
      _id: req.query._id,
    });

    return res.json(jsonGenerate(StatusCode.OK, "Xoá ngành", result));
  } catch (error) {
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = deleteCareer;
