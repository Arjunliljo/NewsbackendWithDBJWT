const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  image_url: String,
  creator: String,
  category: String,
  keywords: String,
  description: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
