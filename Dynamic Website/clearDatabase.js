const { sequelize } = require("./models/db");
const Result = require("./models/Result");

const clearDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected");

    // Usuń wszystkie rekordy z tabeli history
    await Result.destroy({ where: {}, truncate: true });
    console.log("Database cleared");
  } catch (err) {
    console.error("Unable to connect to the database:", err.message);
  } finally {
    await sequelize.close();
  }
};

clearDatabase();
