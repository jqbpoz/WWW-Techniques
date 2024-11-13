const express = require("express");
const app = express();
const averageRoutes = require("./routes/averageRoutes");
const db = require("./models/db"); // Importuj plik db.js, aby zainicjalizować bazę danych

// Ustawienia
app.set("view engine", "ejs"); // Ustaw EJS jako silnik szablonów
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Dodaj parsowanie JSON

// Obsługa tras
app.use("/", averageRoutes);

// Uruchomienie serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open your browser and navigate to: http://localhost:${PORT}`);
});
