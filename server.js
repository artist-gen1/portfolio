const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// dotenv Configuration
dotenv.config();

// Rest Object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, "./client/build")));

// Routes
app.use("/api/v1/portfolio", require("./routes/PortfolioRoute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
