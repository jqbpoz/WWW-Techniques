require("dotenv").config();
const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

async function initDb() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  // Utwórz bazę danych, jeśli nie istnieje
  await connection.query("CREATE DATABASE IF NOT EXISTS todo_db");

  // Użyj bazy danych
  await connection.query("USE todo_db");

  // Wykonaj skrypt SQL do utworzenia tabeli
  const sql = fs.readFileSync(path.join(__dirname, "../database.sql"), "utf8");
  await connection.query(sql);

  await connection.end();
}

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

initDb()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((err) => {
    console.error("Error initializing database:", err);
  });

module.exports = connection;
