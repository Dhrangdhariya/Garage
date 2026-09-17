const express = require('express');
const router = express.Router();
const { protect } = require("../middleware/auth_middleware");
const { register, login, verifyOTP, logout, getMe } = require('../controllers/auth_controller');

router.post("/register", register);
router.post("/login", login);
router.post("/verify-otp", verifyOTP);
router.post("/logout", logout);
router.get("/me", protect, getMe);

module.exports = router;