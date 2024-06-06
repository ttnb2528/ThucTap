const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    code: { type: String },
    fullName: { type: String },

    isSex: { type: String },
    cccd: { type: String },
    ethnic: { type: String },
    address: { type: String },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
