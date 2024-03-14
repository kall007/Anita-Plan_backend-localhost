const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  plan: [
    {
      type: Schema.Types.Mixed,
    },
  ],
});

const User = model("user", userSchema);

module.exports = User;
