const client = require("prom-client");

const register = new client.Registry();

client.collectDefaultMetrics({
  register,
});

const httpRequestsTotal = new client.Counter({
  name: "employee_portal_http_requests_total",
  help: "Total HTTP requests",
  labelNames: ["method", "route", "status"],
});

const httpRequestDuration = new client.Histogram({
  name: "employee_portal_http_request_duration_seconds",
  help: "Request duration",
  labelNames: ["method", "route"],
});

register.registerMetric(httpRequestsTotal);
register.registerMetric(httpRequestDuration);

module.exports = {
  register,
  httpRequestsTotal,
  httpRequestDuration,
};