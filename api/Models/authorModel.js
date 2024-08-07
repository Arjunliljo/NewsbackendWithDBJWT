const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, "Must have author name"],
    unique: true,
    trim: true,
  },
  authorImg: String,
  createdAt: { type: Date, default: Date.now },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
