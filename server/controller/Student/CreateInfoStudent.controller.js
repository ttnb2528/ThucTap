const Joi = require("joi");

const Student = require("../../models/student.model.js");
const Class = require("../../models/class.model.js");
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");

const createInfoStudent = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.MULTIPLECHOICE, error.details[0].message)
    );
  }
  const { code, classCourse } = req.body;

  const existingStudent = await Student.findOne({
    code: code,
  });

  if (existingStudent) {
    return res.json(
      jsonGenerate(
        StatusCode.MULTIPLECHOICE,
        "Mã sinh viên đã tồn tại trong hệ thống"
      )
    );
  }

  try {
    const newStudent = await Student.create({
      ...req.body,
    });

    if (newStudent) {
      const classInfo = await Class.findById(classCourse);
      if (!classInfo) {
        return res.json(
          jsonGenerate(StatusCode.MULTIPLECHOICE, "Lớp học không tồn tại")
        );
      }

      classInfo.students.push(newStudent._id);
      await classInfo.save();

      return res.json(
        jsonGenerate(StatusCode.OK, "Student created successfully", newStudent)
      );
    }
  } catch (error) {
    console.log(error);
    return res.json(
      jsonGenerate(StatusCode.SERVER_ERROR, "Internal Server Error")
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

    // cccd: Joi.string().required().label("cccd"),
    // date_cccd: Joi.date().required().label("date_cccd"),
    // place_cccd: Joi.string().required().label("place_cccd"),
    // phone: Joi.string().required().label("phone"),
    // ethnic: Joi.string().required().label("ethnic"),
    // nationality: Joi.string().required().label("nationality"),
    // address: Joi.string().required().label("address"),
    // province: Joi.string().required().label("province"),
    // district: Joi.string().required().label("district"),
    // ward: Joi.string().required().label("wards"),
    // dateAdmission: Joi.date().required().label("dateAdmission"),
    // educationLevel: Joi.string().required().label("educationLevel"),
    // typeOfAdmission: Joi.string().required().label("typeOfAdmission"),
    // typeOfTraining: Joi.string().required().label("typeOfTraining"),
    // formOfTraining: Joi.string().required().label("formOfTraining"),
    // admissionObject: Joi.string().required().label("admissionObject"),
    // levelTraining: Joi.string().required().label("levelTraining"),
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

module.exports = createInfoStudent;
