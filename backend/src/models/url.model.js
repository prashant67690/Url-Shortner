const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema(
  {
    urlCode: {
      type: String,
      required: true,
    },
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    visited: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const URLModel = mongoose.model("Url", URLSchema);
module.exports = { URLModel };
