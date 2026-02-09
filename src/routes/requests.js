const express = require("express");
const router = express.Router();
const Request = require("../models/Request");


// CREATE A NEW SHOWING REQUEST
router.post("/", async (req, res) => {
  try {
    const newRequest = new Request({
      agentName: req.body.agentName,
      propertyAddress: req.body.propertyAddress,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      date: req.body.date,
      time: req.body.time,
      timeZone: req.body.timeZone,
      duration: req.body.duration,
      status: "pending"
    });

    const savedRequest = await newRequest.save();

    res.status(201).json({
      success: true,
      requestId: savedRequest._id
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create request"
    });
  }
});


// GET REQUEST BY ID (STATUS PAGE)
router.get("/:id", async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found"
      });
    }

    res.json({
      success: true,
      request
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});


module.exports = router;
