const Joi = require("joi");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const User = require("../../models/user.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");




const callBack = async (req, res) => {
  const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
  try {
    return res.json(
        jsonGenerate(StatusCode.NO_CONTENT, "Call Back")
      );
  } catch (error) {}
};


module.exports = callBack;
