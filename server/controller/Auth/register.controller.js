const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const User = require("../../models/user.model");
const { jsonGenerate } = require("../../utils/helpers");
const { StatusCode } = require("../../utils/constants");

const Register = async (req, res) => {
  const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
  try {
    if (!req.body)
      return res.json(jsonGenerate(StatusCode.MULTIPLECHOICE, "error"));
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "User with given email already Exist!"
        )
      );

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      ...req.body,
      password: hashPassword,
    });

    return res.json(jsonGenerate(StatusCode.OK, "Create Success", user));
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = Register;
