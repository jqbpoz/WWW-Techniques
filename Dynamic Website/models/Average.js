const db = require("./db");

class Average {
  static async getAll() {
    const connection = await db;
    const [rows] = await connection.query("SELECT * FROM averages");
    return rows.map((row) => JSON.parse(row.data));
  }

  static async create(data) {
    const connection = await db;
    await connection.query("INSERT INTO averages (data) VALUES (?)", [
      JSON.stringify(data),
    ]);
  }

  static async delete(id) {
    const connection = await db;
    await connection.query("DELETE FROM averages WHERE id = ?", [id]);
  }
}

module.exports = Average;
