const express = require("express");
const router = express.Router();
const averageController = require("../controllers/averageController");

router.get("/", averageController.getData);
router.post("/save", averageController.saveData);
router.get("/load", averageController.loadData);

module.exports = router;
