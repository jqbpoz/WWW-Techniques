// app.js
const express = require("express");
const { connectDB } = require("./models/db");
require("dotenv").config();

const app = express();

// Connect to MySQL
connectDB();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware to serve static files
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/", calculatorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
