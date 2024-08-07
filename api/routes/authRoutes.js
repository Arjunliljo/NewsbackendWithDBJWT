const express = require("express");
const router = express.Router();
const { login, verifyLogin, logout } = require("../controllers/authController");

//Login
router.post("/login", login);
router.get("/logout", logout);
router.get("/verify", verifyLogin);
module.exports = router;
