const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product.model.js");
const productRoute = require("./route/Product.Route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hey There Hello World");
});

mongoose
  .connect(
    "mongodb+srv://developerranjitnil2003:pgXuYUGjeCNNlRP9@backend.y9td0.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(4000, () => {
      console.log("Surver Run PORT 4000");
    });
  })

  .catch(() => {
    console.log("Connection Failed!");
  });
