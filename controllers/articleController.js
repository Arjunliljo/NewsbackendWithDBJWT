const Article = require("../Models/articleModel");

const getAllArticle = async (req, res) => {
  const article = await Article.find({});
  res.json(article);
};
const getArticle = async (req, res) => {
  const article = await Article.findById(req.params.articleId).exec();

  res.json(article);
};
const addArticle = async (req, res) => {
  const aritcle = new Article(req.body);
  await aritcle.save();
  res.json(aritcle);
};
const updateArticle = async (req, res) => {
  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.articleId,
    req.body,
    { new: true }
  );
  res.json(updatedArticle);
};
const deleteArticle = async (req, res) => {
  await Article.findByIdAndDelete(req.params.articleId);
  res.send("deleted");
};

module.exports = {
  getArticle,
  getAllArticle,
  addArticle,
  updateArticle,
  deleteArticle,
};
