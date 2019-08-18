const express = require("express");

const Product = require("../../models/Product");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get("/", (_, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products));
});

router.post("/", auth, (req, res) => {
  new Product({ name: req.body.name })
    .save()
    .then(product => res.json(product));
});

router.delete("/:id", auth, (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
