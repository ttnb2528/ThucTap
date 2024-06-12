const axios = require("axios");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const getDistrict = async (req, res) => {
  const { province_id } = req.query;
  try {
    const response = await axios.get(
      `https://vapi.vnappmob.com/api/province/district/${province_id}`
    );
    res.json(jsonGenerate(StatusCode.OK, "get District", response.data));
  } catch (error) {
    console.error("Error fetching provinces:", error);
    res
      .status(error.response ? error.response.status : 500)
      .send(error.response ? error.response.data : "Internal Server Error");
  }
};

module.exports = getDistrict;
