const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Need a userName"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Need an Email"],
  },
  password: {
    type: String,
    required: [true, "Need a passoword"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
