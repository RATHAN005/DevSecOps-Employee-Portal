const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { getDashboardStats, getAttendance, getActivity } = require("../controllers/dashboardController");

router.get("/stats",      protect, getDashboardStats);
router.get("/attendance", protect, getAttendance);
router.get("/activity",   protect, getActivity);

module.exports = router;