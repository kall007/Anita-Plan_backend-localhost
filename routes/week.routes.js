const express = require("express");
const router = express.Router();
const Week = require("../models/Week.model");

// Route to create a new week
router.post("/week", async (req, res) => {
  try {
    const week = await Week.create(req.body).populate(["user", "plans"]);
    res.status(201).json({ week });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all weeks
router.get("/week", async (req, res) => {
  try {
    const weeks = await Week.find().populate(["user", "plans"]);
    res.json({ weeks });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get a specific week by ID
router.get("/week/:id", async (req, res) => {
  try {
    const week = await Week.findById(req.params.id).populate(["user", "plans"]);
    if (!week) {
      return res.status(404).json({ message: "week not found" });
    }
    res.json({ week });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to update a specific week by ID
router.put("/week/:id", async (req, res) => {
  try {
    const week = await Week.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!week) {
      return res.status(404).json({ message: "week not found" });
    }
    res.json({ week });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to delete a specific week by ID
router.delete("/week/:id", async (req, res) => {
  try {
    const week = await Week.findByIdAndDelete(req.params.id);
    if (!week) {
      return res.status(404).json({ message: "week not found" });
    }
    res.json({ message: "week deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
