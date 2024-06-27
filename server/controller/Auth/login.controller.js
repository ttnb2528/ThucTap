const Joi = require("joi");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const User = require("../../models/user.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const Login = async (req, res) => {
  const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
  try {
    console.clear();
    const { error } = validate(req.body);
    if (error) {
      console.log(error);
      return res.json(
        jsonGenerate(
          StatusCode.BAD_REQUEST,
          "Username or password is not empty"
        )
      );
    }

    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user)
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "Username or password is incorrect 1"
        )
      );

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword)
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "Username or password is incorrect"
        )
      );

    const token = Jwt.sign({ userId: user._id }, JWT_TOKEN_SECRET);
    delete user.password;
    return res.json(
      jsonGenerate(StatusCode.OK, "User Login Successful", {
        _id: user?._id,
        email: user?.email,
        role: user?.role,
        verified: user?.verified,
        token: token,
      })
    );
  } catch (error) {}
};

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  }).message({
    "string.base": "{#label} phải là chuỗi",
    "string.email": "{#label} không đúng định dạng email",
    "any.required": "{#label} không được để trống",
  });
  return schema.validate(data);
};

module.exports = Login;
