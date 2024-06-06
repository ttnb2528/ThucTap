const express = require("express");
const app = express();
const cors = require("cors");
const AuthMiddleware = require("../middelewares/AuthMiddleware.js");
const AuthRouter = require("./auth.route.js");
const UserRouter = require("./user.route.js");
const StudentRouter = require("./student.route.js");

// Middleware
app.use(cors());
app.use(express.json());
const router = express.Router();

app.use("/auth", AuthRouter);
app.use("/user",AuthMiddleware, UserRouter );
app.use("/student",AuthMiddleware, StudentRouter );


module.exports = app;