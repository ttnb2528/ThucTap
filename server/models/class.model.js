const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    className: { type: String, required: true },
    // course: { type: String, required: true },
    career: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "career",
      required: true,
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "student" }],
    // year: { type: Number, required: true },
  },
  { timestamps: true }
);

const Class = mongoose.model("class", classSchema);

module.exports = Class;
