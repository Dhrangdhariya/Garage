const express = require('express');
const router = express.Router();
const { protect, admin } = require("../middleware/auth_middleware");
const { addWork, getUserWorks, confirmWork, rejectWork, getAllWorks, createReview, getReviews } = require("../controllers/work_controller");
router.post("/work", protect, addWork);
router.get("/work", protect, getUserWorks);
router.get("/admin/work", protect, admin, getAllWorks);
router.put("/admin/work/:id/confirm", protect, admin, confirmWork);
router.put("/admin/work/:id/reject", protect, admin, rejectWork);
router.get("/review", getReviews);
router.post("/review", protect, createReview);

module.exports = router;