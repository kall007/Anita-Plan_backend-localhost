const mongoose = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const calendarSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    plans: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Calendar = mongoose.model("calendar", calendarSchema);

module.exports = Calendar;
