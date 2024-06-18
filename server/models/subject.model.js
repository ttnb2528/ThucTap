const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
    career: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "career",
    },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

const Subject = mongoose.model("subject", subjectSchema);

module.exports = Subject;
