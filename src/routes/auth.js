import express from "express";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Temporary success response (DB comes later)
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: {
        name,
        email,
        role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
});

export default router;
