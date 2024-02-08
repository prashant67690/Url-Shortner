const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  // const token = req.cookies.token;
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = isAuthenticated;
