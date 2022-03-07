//====================================================//Require
const express = require("express");
const courseRouter = express.Router();

//====================================================//Require Functions
const { CreateNewCourse, GetAllCourses } = require("../controllers/Course");

courseRouter.post("/new", CreateNewCourse);
courseRouter.get("/getall", GetAllCourses);

//====================================================// module.exports
module.exports = courseRouter;
