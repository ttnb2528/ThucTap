const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    code: { type: String },
    fullName: { type: String },
    date: { type: Date },
    isSex: { type: String },
    cccd: { type: String },
    ethnic: { type: String },
    address: { type: String },
    phone: {
      type: String,
    },
    levelTraining: { type: String },
    career: [{ type: mongoose.Schema.Types.ObjectId, ref: "career" }],
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
