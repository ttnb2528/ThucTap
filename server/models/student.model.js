const { required } = require("joi");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    fullName: { type: String, required: true },
    date: { type: Date, required: true },
    isSex: { type: String, required: true },
    cccd: { type: String, required: true },
    ethnic: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    levelTraining: { type: String, required: true },
    career: [
      { type: mongoose.Schema.Types.ObjectId, ref: "career", required: true },
    ],
    grades: [
      {
        subject: { type: mongoose.Schema.Types.ObjectId, ref: "subject" },
        scores: [
          {
            type: { type: String },
            score: { type: Number },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
