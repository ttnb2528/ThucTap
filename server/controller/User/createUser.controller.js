const { jsonGenerate } = require("../../utils/helpers.js");
const { StatusCode } = require("../../utils/constants.js");
const User = require("../../models/user.model.js");
const Student = require("../../models/student.model.js");

const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const createRandomUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    // console.log(user);

    if (user)
      return res.json(
        jsonGenerate(
          StatusCode.MULTIPLECHOICE,
          "Email giáo viên đã tồn tại trong hệ thống"
        )
      );

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      ...req.body,
      role: "1",
      password: hashPassword,
    });

    return res.json(
      jsonGenerate(StatusCode.OK, "Tạo thành công", {
        user,
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
