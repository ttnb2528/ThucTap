const express = require("express");

const createSchedule = require("../controller/Schedule/createSchedule.controller.js");
const listSchedule = require("../controller/Schedule/listSchedule.controller.js");
const getSchedule = require("../controller/Schedule/getSchedule.controller.js");

const router = express.Router();

router.post("/createSchedule", createSchedule);
router.get("/listSchedule", listSchedule);
router.get("/getSchedule", getSchedule);

module.exports = router;
