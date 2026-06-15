const {
  httpRequestsTotal,
  httpRequestDuration,
} = require("../metrics/prometheus");

const metricsMiddleware = (req, res, next) => {
  const end = httpRequestDuration.startTimer();

  res.on("finish", () => {
    httpRequestsTotal.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode,
    });

    end({
      method: req.method,
      route: req.route?.path || req.path,
    });
  });

  next();
};

module.exports = metricsMiddleware;