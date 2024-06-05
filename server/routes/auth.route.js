const express = require("express");
const Register = require("../controller/Auth/register.controller");
const Login = require("../controller/Auth/login.controller");

const callBack = require("../controller/Auth/callBack.controller");
const router = express.Router();


router.post("/login", Login);
router.post("/register", Register);

router.get("/callback", callBack);


module.exports = router;
