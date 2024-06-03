const Author = require("../Models/authorModel");

const getAllAuthors = async (req, res) => {
  const authors = await Author.find({});
  res.json(authors);
};

const getAuthor = async (req, res) => {
  const author = await Author.findById(req.params.authorId).exec();

  res.json(author);
};
const addAuthor = async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.json(author);
};
const updateAuthor = async (req, res) => {
  const updatedAuthor = await Author.findByIdAndUpdate(
    req.params.authorId,
    req.body,
    { new: true }
  );
  res.json(updatedAuthor);
};
const deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.authorId);
  res.send("Deleted");
};

module.exports = {
  getAuthor,
  getAllAuthors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
};
