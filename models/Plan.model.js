const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
