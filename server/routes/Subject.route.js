const express = require("express");

const createSubject = require("../controller/Subject/CreateSubject.controller.js");
const listSubject = require("../controller/Subject/ListSubject.controller.js");

const router = express.Router();

router.post("/createSubject", createSubject);
router.get("/listSubject", listSubject);

module.exports = router;
