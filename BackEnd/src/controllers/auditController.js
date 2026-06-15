// Audit log controller — returns mock audit entries until a full AuditLog model is built
const getAuditLogs = async (req, res, next) => {
  try {
    // TODO: replace with real AuditLog model queries
    const logs = [
      { id: 1, user: "admin@portal.com", action: "Created employee record", timestamp: new Date().toISOString(), severity: "info" },
      { id: 2, user: "hr@portal.com",    action: "Updated employee salary",  timestamp: new Date(Date.now() - 3600000).toISOString(), severity: "warning" },
      { id: 3, user: "admin@portal.com", action: "Deleted employee #102",    timestamp: new Date(Date.now() - 7200000).toISOString(), severity: "danger" },
    ];

    res.json(logs);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAuditLogs };
