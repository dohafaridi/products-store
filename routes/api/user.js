const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../../models/User");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields!" });
  }

  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    bcrypt.genSalt(10, (_, salt) => {
      bcrypt.hash(password, salt, (err, password) => {
        if (err) throw err;

        new User({
          name,
          email,
          password
        })
          .save()
          .then(user => res.json(user));
      });
    });
  });
});

module.exports = router;
