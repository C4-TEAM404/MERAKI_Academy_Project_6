//====================================================//Require
const express = require("express");
const teacherRouter = express.Router();

//====================================================//Require Functions
const {
  CreateNewTeacher,
  GetAllTeacher,
  GetTeacherById,
  DeleteTeacherById,
  UpdateTeacherById,
} = require("../controllers/Teacher");

const { authentication } = require("../Middleware/authentication");

teacherRouter.post("/new", CreateNewTeacher);
teacherRouter.get("/getall", GetAllTeacher);
teacherRouter.get("/getbyid", GetTeacherById);
teacherRouter.delete("/deletebyid/:id", DeleteTeacherById);
teacherRouter.put("/updatebyid", authentication, UpdateTeacherById);

//====================================================// module.exports
module.exports = teacherRouter;
