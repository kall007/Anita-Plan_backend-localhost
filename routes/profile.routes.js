const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile.model");

// Route to create a new profile
router.post("/profile", async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json({ profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all profiles
router.get("/profile", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json({ profiles });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get a specific profile by ID
router.get("/profile/:id", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "profile not found" });
    }
    res.json({ profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to update a specific profile by ID
router.put("/profile/:id", async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json({ profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to delete a specific profile by ID
router.delete("/profile/:id", async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
