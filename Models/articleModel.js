const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  heading: String,
  image: String,
  author: String,
  authorImg: String,
  category: String,
  btnContent: String,
  description: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
