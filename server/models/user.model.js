const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
    },
    verified: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;

//role

// 1: teacher
// lv10 developer
