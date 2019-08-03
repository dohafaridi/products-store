const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./routes/api/product");
const mongodbURL = require("./config/keys").mongodbURL;

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// Connect to the database
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log("Connected to mLab product-store database"))
  .catch(() => console.log("Database connection error!"));

// Routes
app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
