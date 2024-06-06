const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Career = mongoose.model("career", careerSchema);

module.exports = Career;
