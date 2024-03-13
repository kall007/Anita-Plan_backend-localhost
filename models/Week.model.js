const mongoose = require("mongoose");

const weekSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  dayOfWeek: {
    type: String,
    required: true,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  plans: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "plan",
  },
});

const Week = mongoose.model("week", weekSchema);

module.exports = Week;
