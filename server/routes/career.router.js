const express = require("express");

const createCareer = require("../controller/Career/CreateCareer.controller.js");
const listCareer = require("../controller/Career/ListCareer.controller.js");
const deleteCareer = require("../controller/Career/deleteCareer.controller.js");
const editCareer = require("../controller/Career/editCareer.controller.js");

const router = express.Router();

router.post("/createCareer", createCareer);
router.get("/listCareer", listCareer);
router.delete("/deleteCareer", deleteCareer);
router.put("/editCareer", editCareer);

module.exports = router;
