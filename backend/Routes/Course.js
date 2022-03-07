//====================================================//Require
const express = require("express");
const courseRouter = express.Router();

//====================================================//Require Functions
const {
  CreateNewCourse,
  GetAllCourses,
  GetCourseByCategory,
  GetCourseByTitle,
  DeleteCourseById,
} = require("../controllers/Course");

courseRouter.post("/new", CreateNewCourse);
courseRouter.get("/getall", GetAllCourses);
courseRouter.get("/getByC", GetCourseByCategory);
courseRouter.get("/getByT", GetCourseByTitle);
courseRouter.delete("/deletebyid/:id", DeleteCourseById);

//====================================================// module.exports
module.exports = courseRouter;
