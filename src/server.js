require("dotenv").config();
const express = require("express");
const cors = require("cors");

const healthRoute = require("./routes/health");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`RealtorGuard backend running on port ${PORT}`);
});
