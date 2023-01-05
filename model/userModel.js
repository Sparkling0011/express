const mongoose = require("mongoose");
const md5 = require("../utils/md5");

const { Schema, model } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
  },
  createTime: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = model("user", userSchema);
