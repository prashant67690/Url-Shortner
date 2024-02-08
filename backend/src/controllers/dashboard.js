const express = require("express");
const User = require("../models/User.model");
const { URLModel } = require("../models/url.model");
const isAuthenticated = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/", isAuthenticated, async (req, res) => {
  const result = await URLModel.find({ user: req.user._id });
  if (result) {
    res.status(200).json({ result, msg: "Sucessfull" });
  } else {
    res.status(404).json({ msg: "error happend" });
  }
});

router.delete("/", isAuthenticated, async (req, res) => {
  const shortUrl = req.body.shortUrl;
  const longUrl = req.body.longUrl;

  const result = await URLModel.deleteOne({ shortUrl, longUrl });
  if (result) {
    return res.status(200).json({ msg: "Deleted" });
  } else {
    return res.status(404).json({ msg: "Error" });
  }
});

router.put("/", isAuthenticated, async (req, res) => {
  const shortUrl = req.body.shortUrl;
  const newShortUrl = req.body.newShortUrl;
  const newLongUrl = req.body.newLongUrl;

  try {
    const result = await URLModel.findOneAndUpdate(
      { shortUrl, longUrl },
      { shortUrl: newShortUrl, longUrl: newLongUrl },
      { new: true }
    );
    if (result) {
      return res.status(200).json({ msg: "Deleted" });
    } else {
      return res.status(404).json({ msg: "Error" });
    }
  } catch (e) {
    return res.status(502).json({ msg: "Server Error" });
  }
});

module.exports = router;
