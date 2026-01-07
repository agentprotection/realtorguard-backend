require("dotenv").config();
const express = require("express");
const cors = require("cors");

const healthRoute = require("./routes/health");
const authRoute = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRoute);
app.use("/api/auth", authRoute);

// Root check (optional but helpful)
app.get("/", (req, res) => {
  res.json({ status: "RealtorGuard API running" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`RealtorGuard backend running on port ${PORT}`);
});
