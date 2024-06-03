const express = require("express");

const {
  getAuthor,
  addAuthor,
  getAllAuthors,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

const router = express.Router(); // Correct

router.get("/", getAllAuthors);
router.get("/:authorId", getAuthor);

router.post("/", addAuthor);

router.patch("/:authorId", updateAuthor);

router.delete("/:authorId", deleteAuthor);

module.exports = router;
