const express = require("express");
const router = express.Router();

/**
 * POST /api/auth/signup
 * MOCK SIGNUP (agent or observer)
 */
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!["agent", "observer"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    return res.json({
      success: true,
      token: "mock-jwt-token",
      user: {
        name,
        email,
        role,
        status: role === "observer" ? "pending" : "active",
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
});

/**
 * POST /api/auth/login
 * MOCK LOGIN (agent + observer)
 */
router.post("/login", async (req, res) => {
  try {
   const { email, password } = req.body;
const role = req.body.role || "agent";

if (!email || !password) {
  return res.status(400).json({
    success: false,
    message: "Email and password are required",
  });
}
const { email, password } = req.body;
const role = req.body.role || "agent";


 


if (!email || !password) {
  return res.status(400).json({
    success: false,
    message: "Email and password are required",
  });
}

    if (!["agent", "observer"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    return res.json({
      success: true,
      token: "mock-jwt-token",
      user: {
        email,
        role,
        status: role === "observer" ? "pending" : "active",
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
});

module.exports = router;
