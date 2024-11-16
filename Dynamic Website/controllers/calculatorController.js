const Result = require("../models/Result");

let currentIndex = 0;

exports.getCalculatorPage = async (req, res) => {
  const results = await Result.findAll({ order: [["created_at", "ASC"]] });
  const result = results.length > 0 ? results[currentIndex] : null;
  const values = result ? JSON.parse(result.values) : {};
  const weights = result ? JSON.parse(result.weights) : {};
  const rowCount = result
    ? Object.keys(values).filter((key) => key.startsWith("value")).length
    : 2;

  res.render("index", {
    values,
    weights,
    rowCount,
    result: result ? result.result : null,
  });
};

exports.calculateWeightedAverage = async (req, res) => {
  const values = {};
  const weights = {};
  for (let key in req.body) {
    if (key.startsWith("value") && req.body[key] !== "") {
      values[key] = parseFloat(req.body[key]);
    } else if (key.startsWith("weight") && req.body[key] !== "") {
      weights[key] = parseFloat(req.body[key]);
    }
  }

  let weightedSum = 0;
  let weightSum = 0;
  for (let key in values) {
    const weightKey = key.replace("value", "weight");
    if (!isNaN(values[key]) && !isNaN(weights[weightKey])) {
      weightedSum += values[key] * weights[weightKey];
      weightSum += weights[weightKey];
    }
  }

  const weightedAverage = weightSum ? weightedSum / weightSum : 0;
  const rowCount = Object.keys(req.body).filter((key) =>
    key.startsWith("value")
  ).length;

  const lastResult = await Result.findOne({ order: [["created_at", "DESC"]] });
  if (!lastResult || lastResult.result !== weightedAverage) {
    await Result.create({
      values: JSON.stringify(values),
      weights: JSON.stringify(weights),
      result: weightedAverage,
    });
  }

  const results = await Result.findAll({ order: [["created_at", "ASC"]] });
  currentIndex = results.length - 1;

  res.render("index", { result: weightedAverage, values, weights, rowCount });
};

exports.getPreviousResult = async (req, res) => {
  const results = await Result.findAll({ order: [["created_at", "ASC"]] });
  if (currentIndex > 0) {
    currentIndex--;
  }
  const previousResult = results[currentIndex];
  const values = JSON.parse(previousResult.values);
  const weights = JSON.parse(previousResult.weights);
  const rowCount = Object.keys(values).filter((key) =>
    key.startsWith("value")
  ).length;

  res.render("index", {
    result: previousResult.result,
    values,
    weights,
    rowCount,
  });
};

exports.getNextResult = async (req, res) => {
  const results = await Result.findAll({ order: [["created_at", "ASC"]] });
  if (currentIndex < results.length - 1) {
    currentIndex++;
  }
  const nextResult = results[currentIndex];
  const values = JSON.parse(nextResult.values);
  const weights = JSON.parse(nextResult.weights);
  const rowCount = Object.keys(values).filter((key) =>
    key.startsWith("value")
  ).length;

  res.render("index", { result: nextResult.result, values, weights, rowCount });
};

exports.getHistoryPage = (req, res) => {
  res.render("history");
};
