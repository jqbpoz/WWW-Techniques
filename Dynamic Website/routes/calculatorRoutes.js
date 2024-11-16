const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.get("/", calculatorController.getCalculatorPage);
router.post("/calculate", calculatorController.calculateWeightedAverage);
router.get("/previous", calculatorController.getPreviousResult);
router.get("/next", calculatorController.getNextResult);
router.get("/history", calculatorController.getHistoryPage);

module.exports = router;
