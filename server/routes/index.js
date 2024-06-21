const express = require("express");
const app = express();
const cors = require("cors");
const AuthMiddleware = require("../middelewares/AuthMiddleware.js");
const AuthRouter = require("./auth.route.js");
const UserRouter = require("./user.route.js");
const StudentRouter = require("./student.route.js");
const Career = require("./career.router.js");
const Subject = require("./Subject.route.js");
const schedule = require("./schedule.route.js");
const classRoom = require("./class.route.js");

const Location = require("./location.route.js");

// Middleware
app.use(cors());
app.use(express.json());
const router = express.Router();

app.use("/auth", AuthRouter);
app.use("/location", Location);

app.use("/user", AuthMiddleware, UserRouter);
app.use("/student", AuthMiddleware, StudentRouter);
app.use("/student", AuthMiddleware, StudentRouter);
app.use("/career", AuthMiddleware, Career);
app.use("/subject", AuthMiddleware, Subject);
app.use("/schedule", AuthMiddleware, schedule);
app.use("/class", AuthMiddleware, classRoom);

module.exports = app;
