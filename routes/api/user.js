const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");
const { jwtSecret } = require("../../config/keys");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields!" });
  }

  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
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
          .then(user =>
            jwt.sign(
              { id: user.id },
              jwtSecret,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;

                res.json({
                  token,
                  user
                });
              }
            )
          );
      });
    });
  });
});

module.exports = router;
