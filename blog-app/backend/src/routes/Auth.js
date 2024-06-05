const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/auth");

router.post("/login", (req, res) => {
  login(req, res);
});

router.post("/register", (req, res) => {
  register(req, res);
});

module.exports = router;
