const express = require("express");

const getProvinces = require("../controller/Location/getProvince.controller.js");
const getDistrict = require("../controller/Location/getDistrict.controller.js");
const getWard = require("../controller/Location/getWard.controller.js");

const router = express.Router();

router.get("/province", getProvinces);
router.get("/district", getDistrict);
router.get("/ward", getWard);

module.exports = router;
