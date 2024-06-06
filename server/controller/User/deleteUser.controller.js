const { jsonGenerate } = require("../../utils/helpers");
const { StatusCode } = require("../../utils/constants");
const User = require("../../models/user.model");



const deleteUser = async (req, res) => {
  try {
    let _id = req.query._id
    if (!_id)
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, "Không Có Id")
    );
    const data = await User.findByIdAndDelete(_id)
    return res.json(
      jsonGenerate(StatusCode.OK, "Xoá sinh viên", data)
    );
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = deleteUser;