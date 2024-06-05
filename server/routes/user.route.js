const express = require("express");
const listUser = require("../controller/User/listUser.controller");
const updateUser = require("../controller/User/updateUser.controller");
const findOneUser = require("../controller/User/findOneUser.controller.js");
const createRandomUser= require("../controller/User/createUser.controller.js");
const deleteUser = require("../controller/User/deleteUser.controller.js");

const router = express.Router();


router.get("/list", listUser);
router.post("/createRandom", createRandomUser);
router.post("/update", updateUser);
router.delete("/delete", deleteUser);
router.get("/findone", findOneUser);






module.exports = router;
