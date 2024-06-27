const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  author: String,
  authorImg: String,
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
