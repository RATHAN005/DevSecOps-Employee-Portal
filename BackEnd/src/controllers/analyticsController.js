const Employee = require("../models/Employee");

// ── Employee growth over time ─────────────────────────────
const getGrowth = async (req, res, next) => {
  try {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const now = new Date();
    const data = [];

    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const count = await Employee.countDocuments({ createdAt: { $lte: d } });
      data.push({ label: months[d.getMonth()], value: count });
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
};

// ── Department breakdown ──────────────────────────────────
const getDepartmentBreakdown = async (req, res, next) => {
  try {
    const result = await Employee.aggregate([
      { $group: { _id: "$department", count: { $sum: 1 } } },
      { $project: { _id: 0, name: "$_id", count: 1 } },
      { $sort: { count: -1 } },
    ]);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

// ── Leave summary ─────────────────────────────────────────
const getLeaveSummary = async (req, res, next) => {
  try {
    const total = await Employee.countDocuments();
    const onLeave = await Employee.countDocuments({ status: "on-leave" });

    const data = [
      { label: "Annual",  value: Math.round(total * 0.05), pct: 70 },
      { label: "Sick",    value: Math.round(total * 0.03), pct: 45 },
      { label: "Unpaid",  value: Math.round(total * 0.01), pct: 20 },
      { label: "On Leave",value: onLeave, pct: Math.round((onLeave / Math.max(total, 1)) * 100) },
    ];

    res.json(data);
  } catch (err) {
    next(err);
  }
};

// ── Turnover / retention ──────────────────────────────────
const getTurnover = async (req, res, next) => {
  try {
    const total      = await Employee.countDocuments();
    const terminated = await Employee.countDocuments({ status: "terminated" });
    const retention  = total > 0 ? Math.round(((total - terminated) / total) * 100) : 100;
    const turnover   = 100 - retention;

    res.json({ retention, turnover, total, terminated });
  } catch (err) {
    next(err);
  }
};

module.exports = { getGrowth, getDepartmentBreakdown, getLeaveSummary, getTurnover };
