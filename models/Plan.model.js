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
    ref: "User",
  },
});

const Plan = mongoose.model("plan", planSchema);

module.exports = Plan;
