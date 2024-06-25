const { required } = require("joi");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    fullName: { type: String, required: true },
    date: { type: Date, required: true },
    isSex: { type: String, required: true },
    cccd: { type: String, required: true },
    date_cccd: { type: Date, required: true },
    place_cccd: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    guardianName: { type: String },
    relationshipWithStudent: { type: String },
    cccd_guardian: { type: String },
    phone_guardian: { type: String },
    ethnic: { type: String },
    religion: { type: String },
    nationality: { type: String },
    address: { type: String },
    province: { type: String },
    district: { type: String },
    ward: { type: String },
    policyObject: { type: String },
    priorityObject: { type: String },
    date_group: { type: Date },
    place_group: { type: String },
    date_party: { type: Date },
    place_party: { type: String },
    dateAdmission: { type: Date },
    educationLevel: { type: String },
    typeOfAdmission: { type: String },
    typeOfTraining: { type: String },
    formOfTraining: { type: String },
    admissionObject: { type: String },
    course: { type: String, required: true },
    classCourse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
      required: true,
    },
    career: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "career",
      required: true,
    },
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
