require("dotenv").config({ path: "./src/.env" });

const app = require("./src/app");
const connectDB = require("./src/config/database");
const metricsMiddleware = require("./src/middleware/metricsMiddleware");
const { register } = require("./src/metrics/prometheus");

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.use(metricsMiddleware);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});