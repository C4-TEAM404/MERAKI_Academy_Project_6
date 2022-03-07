//====================================================//Require
const express = require("express");
const courseRouter = express.Router();

//====================================================//Require Functions
const { TestFunction } = require("../controllers/Course");

courseRouter.get("/", TestFunction);

//====================================================// module.exports
module.exports = courseRouter;
