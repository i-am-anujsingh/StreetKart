// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 10000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
const vendorRoutes = require("./routes/vendorRoutes");
const authRoutes = require("./routes/authRoutes");
const marketRoutes = require("./routes/marketRoutes");
const resaleRoutes = require("./routes/resaleRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Mount routes
app.use("/vendors", vendorRoutes);
app.use("/auth", authRoutes);
app.use("/market", marketRoutes);
app.use("/resale", resaleRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("API is working!");
});

// DB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => console.log("DB error: ", err));