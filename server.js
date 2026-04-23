const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// routes
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on ${process.env.PORT}`)
);