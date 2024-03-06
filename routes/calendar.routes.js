const express = require("express");
const router = express.Router();
const Calendar = require("../models/Calendar.model");

// Route to create a new calendar
router.post("/calendars", async (req, res) => {
  try {
    const calendar = await Calendar.create(req.body);
    res.status(201).json({ calendar });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all calendars
router.get("/calendars", async (req, res) => {
  try {
    const calendars = await Calendar.find();
    res.json({ calendars });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get a specific calendar by ID
router.get("/calendars/:id", async (req, res) => {
  try {
    const calendar = await Calendar.findById(req.params.id);
    if (!calendar) {
      return res.status(404).json({ message: "Calendar not found" });
    }
    res.json({ calendar });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to update a specific calendar by ID
router.put("/calendars/:id", async (req, res) => {
  try {
    const calendar = await Calendar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!calendar) {
      return res.status(404).json({ message: "Calendar not found" });
    }
    res.json({ calendar });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to delete a specific calendar by ID
router.delete("/calendars/:id", async (req, res) => {
  try {
    const calendar = await Calendar.findByIdAndDelete(req.params.id);
    if (!calendar) {
      return res.status(404).json({ message: "Calendar not found" });
    }
    res.json({ message: "Calendar deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
