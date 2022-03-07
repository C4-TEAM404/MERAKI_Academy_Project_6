//====================================================//Require
const express = require("express");
const teacherRouter = express.Router();

//====================================================//Require Functions
const { TestFunction } = require("../controllers/Teacher");

teacherRouter.get("/", TestFunction);

//====================================================// module.exports
module.exports = teacherRouter;
