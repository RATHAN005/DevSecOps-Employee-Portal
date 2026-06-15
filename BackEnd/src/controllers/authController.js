const bcrypt = require("bcryptjs");
const Employee = require("../models/Employee");
const generateToken = require("../utils/generateTokens");

// ── Register ──────────────────────────────────────────────
const register = async (req, res, next) => {
  try {
    const { name, email, password, role, department, position, phone } = req.body;

    const existing = await Employee.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await Employee.create({
      name,
      email,
      password: hashedPassword,
      role: role || "employee",
      department: department || "General",
      position:   position   || "",
      phone:      phone      || "",
    });

    const token = generateToken(employee._id);

    res.status(201).json({
      token,
      user: {
        id:         employee._id,
        name:       employee.name,
        email:      employee.email,
        role:       employee.role,
        department: employee.department,
        position:   employee.position,
      },
    });
  } catch (err) {
    next(err);
  }
};

// ── Login ─────────────────────────────────────────────────
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const employee = await Employee.findOne({ email });
    if (!employee) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, employee.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(employee._id);

    res.json({
      token,
      user: {
        id:         employee._id,
        name:       employee.name,
        email:      employee.email,
        role:       employee.role,
        department: employee.department,
        position:   employee.position,
      },
    });
  } catch (err) {
    next(err);
  }
};

// ── Get current user ──────────────────────────────────────
const getMe = async (req, res, next) => {
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

// ── Change password ───────────────────────────────────────
const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const employee = await Employee.findById(req.user._id);
    if (!employee) {
      return res.status(404).json({ message: "User not found" });
    }

    const valid = await bcrypt.compare(currentPassword, employee.password);
    if (!valid) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    employee.password = await bcrypt.hash(newPassword, 10);
    await employee.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login, getMe, changePassword };