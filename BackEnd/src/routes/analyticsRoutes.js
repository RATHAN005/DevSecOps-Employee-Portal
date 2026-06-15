const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { getGrowth, getDepartmentBreakdown, getLeaveSummary, getTurnover } = require("../controllers/analyticsController");

router.get("/growth",      protect, getGrowth);
router.get("/departments", protect, getDepartmentBreakdown);
router.get("/leave",       protect, getLeaveSummary);
router.get("/turnover",    protect, getTurnover);

module.exports = router;
