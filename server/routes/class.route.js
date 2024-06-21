const express = require("express");

const createClass = require("../controller/Class/createClass.controller.js");
const listClasses = require("../controller/Class/listClass.controller.js");
const deleteClass = require("../controller/Class/deleteClass.controller.js");
const updateClass = require("../controller/Class/updateClass.controller.js");

const router = express.Router();

router.post("/createClass", createClass);
router.get("/listClasses", listClasses);
router.delete("/deleteClass", deleteClass);
router.put("/updateClass", updateClass);

module.exports = router;
