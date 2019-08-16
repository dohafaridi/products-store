const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { jwtSecret } = require("../../config/keys");

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

      jwt.sign(
        { id: user.id },
        jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;