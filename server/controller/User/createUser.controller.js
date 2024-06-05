const { jsonGenerate } = require("../../utils/helpers");
const { StatusCode } = require("../../utils/constants");
const User = require("../../models/user.model");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const createRandomUser = async (req, res) => {
  try {
    const name = req.body.name;
    const randomCode = Math.random().toString(10).slice(-5);
    const generalEmail = `${name}${randomCode}@gmail.com`;

    console.log(generalEmail);

    let user = await User.findOne({ email: generalEmail });

    // console.log(user);

    if (user)
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "User with given email already Exist!"
        )
      );

    const randomPassword = Math.random().toString(10).slice(-6);
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(randomPassword, salt);

    user = await User.create({
      email: generalEmail,
      password: hashPassword,
      role: "1",
    });

    return res.json(
      jsonGenerate(StatusCode.OK, "Create Success", {
        user,
        originalPassword: randomPassword,
      })
    );
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
    );
  }
};

module.exports = createRandomUser;
