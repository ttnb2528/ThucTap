const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    levelStraining: { type: String, required: true },
    Circulars: { type: String, required: true },
    name: { type: String, required: true },
    levelDecision: { type: String },
    numberDecision: { type: String },
    dateDecision: { type: Date },
  },
  { timestamps: true }
);

const Career = mongoose.model("career", careerSchema);

module.exports = Career;
