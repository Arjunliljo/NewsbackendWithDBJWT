const express = require("express");
const {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userContoller");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:userId", getUser);
router.post("/", addUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
