const Average = require("../models/Average");

exports.saveData = async (req, res) => {
  try {
    const data = req.body;
    await Average.create(data);
    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await Average.getAll();
    res.render("index", { data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Server Error");
  }
};

exports.loadData = async (req, res) => {
  try {
    const data = await Average.getAll();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error loading data:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
