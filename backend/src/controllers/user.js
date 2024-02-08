const express = require("express");
const User = require("../models/User.model");
const isAuthenticated = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const result = await User.findOne({ username, password, email });
    if (!result) {
      const creation = await User.create({ username, password, email });
      res.status(200).json({ msg: "User Created Successfully" });
    } else {
      res.status(403).send("User Already Exists");
    }
  } catch (e) {
    res.status(502).send("Server Error");
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = User.findOne({ username, password });
  if (!user) return res.status(400).send("Invalid username or password");

  // Create JWT token
  const token = jwt.sign({ id: user.id }, process.env.JWT_KEY);

  // Set cookie with JWT token
  res.cookie("token", token, { httpOnly: true });
  res.json({ token, msg: "Logged in successfully" });
});

router.get("/logout", (req, res) => {
  // Clear cookie
  res.clearCookie("token");
  res.status(200).json({ msg: "Logged out successfully" });
});

router.get("/me", isAuthenticated, (req, res) => {
  res.status(200).json({ user: req.user, msg: "Welcome to your profile!" });
});

module.exports = router;
