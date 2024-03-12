const mongoose = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const profileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  division: {
    type: String,
  },
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
