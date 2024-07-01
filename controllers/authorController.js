const Author = require("../Models/authorModel");

const getAllAuthors = async (req, res) => {
  let authors;
  try {
    if (req.query.author) {
      authors = await Author.find({ author: req.query.author });
    } else authors = await Author.find({});
    res.status(200).json(authors);
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

const getAuthor = async (req, res) => {
  const author = await Author.findById(req.params.authorId).exec();

  res.json(author);
};
const addAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.json(author);
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
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
