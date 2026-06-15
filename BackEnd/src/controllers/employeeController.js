const Employee = require("../models/Employee");

// ── Get all employees (with search/filter) ────────────────
const getEmployees = async (req, res, next) => {
  try {
    const { search, department, status, page = 1, limit = 50 } = req.query;

    const filter = {};
    if (department) filter.department = department;
    if (status)     filter.status     = status;
    if (search) {
      filter.$or = [
        { name:  { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { position: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [employees, total] = await Promise.all([
      Employee.find(filter).select("-password").skip(skip).limit(Number(limit)).sort({ createdAt: -1 }),
      Employee.countDocuments(filter),
    ]);

    res.json({ employees, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    next(err);
  }
};

// ── Get single employee ───────────────────────────────────
const getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id).select("-password");
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

// ── Create employee ───────────────────────────────────────
const createEmployee = async (req, res, next) => {
  try {
    const bcrypt = require("bcryptjs");
    const { name, email, department, position, phone, status, role } = req.body;

    const existing = await Employee.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Default password = "Employee@123" (user should change it)
    const defaultPassword = await bcrypt.hash("Employee@123", 10);

    const employee = await Employee.create({
      name,
      email,
      password: defaultPassword,
      department: department || "General",
      position:   position   || "",
      phone:      phone      || "",
      status:     status     || "active",
      role:       role       || "employee",
    });

    const result = employee.toObject();
    delete result.password;

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

// ── Update employee ───────────────────────────────────────
const updateEmployee = async (req, res, next) => {
  try {
    // Prevent password update via this endpoint
    const { password, ...updateData } = req.body;

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select("-password");

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (err) {
    next(err);
  }
};

// ── Delete employee ───────────────────────────────────────
const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee };