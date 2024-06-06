const express = require("express");

const createCareer = require("../controller/Career/CreateCareer.controller.js");
const listCareer = require("../controller/Career/ListCareer.controller.js");


const router = express.Router();

router.post("/createCareer", createCareer);
router.get("/listCareer", listCareer);


module.exports = router;
