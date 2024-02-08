const express = require("express");
const redirect = require("./controllers/redirects.controller");
const url = require("./controllers/url.controller");
const users = require("./controllers/user");
var cors = require("cors");
const errorMiddleware = require("./middlewares/errorMiddlewares");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ Message: "Hi there" });
});

app.use("/", redirect);
app.use("/api/url", url);
app.use("/api", users);
app.use("/dashboard", dashboard);

app.use(errorMiddleware);
module.exports = app;
