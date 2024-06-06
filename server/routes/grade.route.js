const express = require("express");

const createGrade = require("../controller/Grade/CreateGrade.controller.js");
const listGrade = require("../controller/Grade/ListGrade.controller.js");

const router = express.Router();

router.post("/createGrade", createGrade);
router.get("/listGrade", listGrade);

module.exports = router;
