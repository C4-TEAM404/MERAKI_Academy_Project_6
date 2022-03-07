//====================================================//Require
const express = require("express");
const teacherRouter = express.Router();

//====================================================//Require Functions
const {
  CreateNewTeacher,
  GetAllTeacher,
  GetTeacherById,
  DeleteTeacherById,
} = require("../controllers/Teacher");

teacherRouter.post("/new", CreateNewTeacher);
teacherRouter.get("/getall", GetAllTeacher);
teacherRouter.get("/getbyid", GetTeacherById);
teacherRouter.delete("/deletebyid/:id", DeleteTeacherById);

//====================================================// module.exports
module.exports = teacherRouter;
