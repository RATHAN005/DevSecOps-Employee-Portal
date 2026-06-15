const bcrypt = require("bcryptjs");
const Employee = require("../models/Employee");

// ── Update profile ────────────────────────────────────────
const updateProfile = async (req, res, next) => {
  try {
    const { name, phone } = req.body;

    const employee = await Employee.findByIdAndUpdate(
      req.user._id,
      { name, phone },
      { new: true, runValidators: true }
    ).select("-password");

    if (!employee) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(employee);
  } catch (err) {
    next(err);
  }
};

// ── Get own profile ───────────────────────────────────────
const getProfile = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.user._id).select("-password");
    if (!employee) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

module.exports = { getProfile, updateProfile };
