const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, "Must have author name"],
    unique: true,
    trim: true,
  },
  authorImg: String,
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
