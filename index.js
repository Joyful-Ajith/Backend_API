const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const authRoute = require("./routes/auth.route");

const app = express();
app.use(express.json());

// Routes
app.use("/api/products1", productRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Node API with Authentication!");
});

// MongoDB Connection
mongoose
  .connect("mongodb+srv://ajithaji1902:AxuV8efkqvcnzJet@cluster0.iqdeg.mongodb.net/NODE_API", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((error) => console.error("Connection failed:", error.message));
