const express = require("express");
const router = express.Router();
const protect   = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");
const { getAuditLogs } = require("../controllers/auditController");

router.get("/audit-logs", protect, adminOnly, getAuditLogs);

module.exports = router;
