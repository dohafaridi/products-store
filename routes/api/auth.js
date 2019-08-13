const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../../models/User");

const router = express.Router();

router.get("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email and Password fields are mandatory" });
  }

  User.findOne({ email }).then(user => {
    if (!user) {
      return res
        .status(401)
        .json({ error: "Email and/or Password are incorrect!" });
    }

    bcrypt.compare(user.password, hash, (_, isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      res.json(user);
    });
  });
});

module.exports = router;
