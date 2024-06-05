const { jsonGenerate } = require("../../utils/helpers");
const { StatusCode } = require("../../utils/constants");
const User = require("../../models/user.model");



const findOneUser = async (req, res) => {
  try {
    const data = await User.create({
        store:req.store,
        ...req.body,
    });
    return res.json(
      jsonGenerate(StatusCode.ACCEPTED, "create success", data)
    );
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = findOneUser;