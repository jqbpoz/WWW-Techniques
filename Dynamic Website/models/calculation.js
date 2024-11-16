const db = require("./db");

class Calculation {
  static async saveCalculation(values, weights, result) {
    const query = `INSERT INTO history (values, weights, result) VALUES (?, ?, ?)`;
    await db.execute(query, [
      JSON.stringify(values),
      JSON.stringify(weights),
      result,
    ]);
  }

  static async getHistory() {
    const [rows] = await db.execute(
      `SELECT * FROM history ORDER BY created_at DESC`
    );
    return rows;
  }
}

module.exports = Calculation;
