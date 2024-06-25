const express = require("express");

const createSubject = require("../controller/Subject/CreateSubject.controller.js");
const listSubject = require("../controller/Subject/ListSubject.controller.js");
const deleteSubject = require("../controller/Subject/deleteSubject.controller.js");
const updateSubject = require("../controller/Subject/updateSubject.controller.js");

const router = express.Router();

router.post("/createSubject", createSubject);
router.get("/listSubject", listSubject);
router.delete("/deleteSubject", deleteSubject);
router.put("/updateSubject", updateSubject);

module.exports = router;
