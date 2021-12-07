const mongoose = require("mongoose");

const User = mongoose.model("User", {
  //name of user
  name: {
    type: String,
    required: true,
  },
  //date of birth
  DOB: {
    type: String,
    required: true,
  },
  //status (pause/active)
  status: {
    type: String,
    default: "Active",
  },
});

module.exports = User;
