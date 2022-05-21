const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: Number,
  email: {
    type: String,
    required: true,
  },
});

module.exports = User = model("User", userSchema);
