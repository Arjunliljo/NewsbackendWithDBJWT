const express = require("express");
const {
  getArticle,
  getAllArticle,
  updateArticle,
  addArticle,
  deleteArticle,
} = require("../controllers/articleController");

const router = express.Router();

router.get("/test", (req, res) => res.json({ message: "Working" }));

router.get("/", getAllArticle);
router.get("/:articleId", getArticle);
router.post("/", addArticle);
router.patch("/:articleId", updateArticle);
router.delete("/:articleId", deleteArticle);

module.exports = router;
