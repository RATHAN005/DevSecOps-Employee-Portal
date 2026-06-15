const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { register, login, getMe, changePassword } = require("../controllers/authController");

router.post("/register",         register);
router.post("/login",            login);
router.get( "/me",    protect,   getMe);
router.post("/change-password",  protect, changePassword);
router.post("/logout", protect,  (req, res) => res.json({ message: "Logged out" }));

module.exports = router;