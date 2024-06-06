const { jsonGenerate } = require("../../utils/helpers.js");
const { StatusCode } = require("../../utils/constants.js");
const User = require("../../models/user.model.js");
const Student = require("../../models/student.model.js");

const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const createRandomUser = async (req, res) => {
  try {
    const { name, role } = req.body;
    const nameRole = role === "1" ? "teacher" : false;

    if (!nameRole) {
      return res.json(
        jsonGenerate(StatusCode.MULTIPLECHOICE, "Role is not valid")
      );
    }

    const randomCode = Math.random().toString(10).slice(-5);
    const generalEmail = `${name}${randomCode}@${nameRole}.com`;

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
      role: role,
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
