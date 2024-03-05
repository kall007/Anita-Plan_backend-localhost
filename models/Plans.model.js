const mongoose = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const planSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Whats your plan?"],
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    startDateAndTime: {
      type: Number,
    },

    endDateAndTime: {
      type: Number,
    },
    participants: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Plan = mongoose.model("plan", planSchema);

module.exports = Plan;
