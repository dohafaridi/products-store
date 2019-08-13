const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const mongodbURL = require("./config/keys").mongodbURL;

const app = express();

// Body parser middleware
app.use(express.json());

// Connect to the database
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log("Connected to mLab product-store database"))
  .catch(() => console.log("Database connection error!"));

// Routes
app.use("/api/products", require("./routes/api/product"));
app.use("/api/users", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
