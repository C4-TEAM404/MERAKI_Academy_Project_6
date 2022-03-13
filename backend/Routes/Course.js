//====================================================//Require
const express = require("express");
const courseRouter = express.Router();

//====================================================//Require Functions
const {
  CreateNewCourse,
  GetAllCourses,
  GetCourseByCategory,
  GetCourseById,
  GetCourseByTitle,
  DeleteCourseById,
  UpdateCourseById,
  update_room_video_code,
} = require("../controllers/Course");

courseRouter.post("/new", CreateNewCourse);
courseRouter.get("/getall", GetAllCourses);
courseRouter.post("/getByC", GetCourseByCategory);
courseRouter.get("/getByid/:id", GetCourseById);
courseRouter.post("/getByT", GetCourseByTitle);
courseRouter.delete("/deletebyid/:id", DeleteCourseById);
courseRouter.put("/updatebyid/:id", UpdateCourseById);
courseRouter.put("/updateroomid", update_room_video_code);

//====================================================// module.exports
module.exports = courseRouter;
