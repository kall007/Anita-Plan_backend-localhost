const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan.model");

// Route to create a new plan
router.post("/plans", async (req, res) => {
  try {
    const plan = await Plan.create(req.body);
    res.status(201).json({ plan });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all plans
router.get("/plans", async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json({ plans });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get a specific plan by ID
router.get("/plans/:id", async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json({ plan });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to update a specific plan by ID
router.put("/plans/:id", async (req, res) => {
  try {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json({ plan });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to delete a specific plan by ID
router.delete("/plans/:id", async (req, res) => {
  try {
    const plan = await Plan.findByIdAndDelete(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
