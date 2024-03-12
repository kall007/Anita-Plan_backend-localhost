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
});

const Plan = mongoose.model("plan", planSchema);

module.exports = Plan;
