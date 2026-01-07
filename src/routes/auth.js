const express = require("express");
const router = express.Router();

/**
 * POST /api/auth/signup
 * MOCK SIGNUP – TEMPORARY
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

    return res.status(201).json({
      success: true,
      message: "Account created successfully (mock)",
      user: {
        name,
        email,
        role,
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
 * MOCK LOGIN – TEMPORARY
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required",
      });
    }

    // ✅ MOCK AUTH — accept ANY credentials
    return res.status(200).json({
      success: true,
      message: "Login successful (mock)",
      token: "mock-jwt-token",
      user: {
        email,
        role: "agent",
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
