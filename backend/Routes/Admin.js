//====================================================//Require
const express = require("express");
const adminRouter = express.Router();
//====================================================//Require Functions

const { CreateNewAdmin } = require("../Controllers/Admin");

adminRouter.post("/new", CreateNewAdmin);

//====================================================// module.exports

module.exports = adminRouter;
