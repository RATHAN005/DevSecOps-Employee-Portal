const express = require("express");
const router = express.Router();
const protect   = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");
const { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeController");

router.get(   "/",    protect,              getEmployees);
router.get(   "/:id", protect,              getEmployee);
router.post(  "/",    protect, adminOnly,   createEmployee);
router.put(   "/:id", protect, adminOnly,   updateEmployee);
router.delete("/:id", protect, adminOnly,   deleteEmployee);

module.exports = router;