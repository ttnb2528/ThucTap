const { required } = require("joi");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    fullName: { type: String, required: true },
    date: { type: Date, required: true },
    isSex: { type: String, required: true },
    cccd: { type: String },
    date_cccd: { type: Date },
    place_cccd: { type: String },
    phone: { type: String, required: true },
    email: { type: String },
    guardianName: { type: String },
    relationshipWithStudent: { type: String },
    cccd_guardian: { type: String },
    phone_guardian: { type: String },
    ethnic: { type: String, required: true },
    religion: { type: String },
    nationality: { type: String, required: true },
    address: { type: String, required: true },
    province: { type: String, required: true },
    district: { type: String, required: true },
    wards: { type: String, required: true },
    policyObject: { type: String },
    priorityObject: { type: String },
    date_group: { type: Date },
    place_group: { type: String },
    dare_party: { type: Date },
    place_party: { type: String },
    dateAdmission: { type: Date, required: true },
    educationLevel: { type: String, required: true },
    typeOfAdmission: { type: String, required: true },
    typeOfTraining: { type: String, required: true },
    formOfTraining: { type: String, required: true },
    admissionObject: { type: String, required: true },
    levelTraining: { type: String, required: true },
    course: { type: String },
    classCourse: { type: String },
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
