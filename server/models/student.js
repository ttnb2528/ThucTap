const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    Code: { type: String, required: true },
    fullName: { type: String, required: true },

    isSex: { type: String },
    cccd: { type: String, required: true },
    ethnic: { type: String, required: true },
    address: { type: String, required: true },
    phone: {
      type: String,
    },
    status: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
