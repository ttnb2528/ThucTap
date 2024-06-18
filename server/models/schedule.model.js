const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    career: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "career",
      required: true,
    },
    subject: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "subject",
      required: true,
    },
    dayOfWeek: {
      type: String,
      required: true,
    },
    session: {
      type: String,
      required: true,
    },
    periods: { type: String, required: true },
    room: { type: String, required: true },
    classPeriod: { type: String, required: true },
  },
  { timestamps: true }
);

const schedule = mongoose.model("schedule", scheduleSchema);

module.exports = schedule;
