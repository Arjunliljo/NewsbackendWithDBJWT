const Article = require("../Models/articleModel");

const getAllArticle = async (req, res) => {
  const article = await Article.find({}).sort({ createdAt: -1 });
  res.json(article);
};
const getArticle = async (req, res) => {
  const article = await Article.findById(req.params.articleId).exec();

  res.json(article);
};
const addArticle = async (req, res) => {
  try {
    const aritcle = new Article(req.body);
    await aritcle.save();
    res.json(aritcle);
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
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
