// models/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected");

    // Synchronizuj modele z bazą danych
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (err) {
    console.error("Unable to connect to the database:", err.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
