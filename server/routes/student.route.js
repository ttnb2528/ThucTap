const express = require("express");

const createInfoStudent = require("../controller/Student/CreateInfoStudent.controller.js");
const listStudent = require("../controller/Student/ListStudent.controller.js");
const listStudentWithCondition = require("../controller/Student/ListStudentWithCondition.controller.js");
const deleteStudent = require("../controller/Student/deleteStudent.controller.js");
const updateStudent = require("../controller/Student/UpdateStudent.controller.js");

const router = express.Router();

router.post("/createInfoStudent", createInfoStudent);
router.get("/listStudent", listStudent);
router.get("/listStudentWithCondition", listStudentWithCondition);
router.delete("/deleteStudent", deleteStudent);
router.put("/updateStudent", updateStudent);

module.exports = router;
