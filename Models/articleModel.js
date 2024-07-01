const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  heading: String,
  author: String,
  image: String,
  btnContent: String,
  btnContent: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
