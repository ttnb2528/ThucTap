const Joi = require("joi");

const Student = require("../../models/student.model.js");
const Class = require("../../models/class.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const updateStudent = async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
    );
  }

  try {
    const { _id } = req.query;

    const existingStudent = await Student.findById(_id);
    if (!existingStudent) {
      return res.json(
        jsonGenerate(StatusCode.NOT_FOUND, "Không tìm thấy sinh viên")
      );
    }

    // Check if classCourse is changed, then update student in new class
    if (req.body.classCourse !== existingStudent.classCourse.toString()) {
      const newClass = await Class.findById(req.body.classCourse);

      if (!newClass) {
        return res.json(
          jsonGenerate(StatusCode.MULTIPLECHOICE, "Lớp học không tồn tại")
        );
      }

      const oldClass = await Class.findById(existingStudent.classCourse);
      if (oldClass) {
        oldClass.students.pull(existingStudent._id);
        await oldClass.save();
      }

      newClass.students.push(existingStudent._id);
      await newClass.save();
    }

    const update = await Student.findByIdAndUpdate(
      _id,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.json(jsonGenerate(StatusCode.OK, "Cập nhật sinh viên", update));
  } catch (error) {
    return res.json(
      jsonGenerate(
        StatusCode.SERVER_ERROR,
        "Internal Server Error",
        error.message
      )
    );
  }
};

const validate = (data) => {
  const schema = Joi.object({
    code: Joi.string().required().label("Mã sinh viên"),
    fullName: Joi.string().required().label("Họ và tên"),
    date: Joi.date().required().label("Ngày sinh"),
    isSex: Joi.string().required().label("Giới tính"),
    career: Joi.string().required().label("Ngành"),
    classCourse: Joi.string().required().label("Lớp"),
    course: Joi.string().required().label("Khóa học"),
  })
    .messages({
      "string.empty": "{#label} không được để trống",
      "any.required": "{#label} là bắt buộc",
      "string.base": "{#label} phải là chuỗi ký tự",
      "date.base": "{#label} phải là ngày tháng",
    })
    .unknown(true);

  return schema.validate(data);
};

module.exports = updateStudent;
