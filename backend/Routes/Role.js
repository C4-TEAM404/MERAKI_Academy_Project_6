//====================================================//Require
const express = require("express");
const roleRouter = express.Router();

//====================================================//Require Functions
const { CreateRole } = require("../controllers/Role");

roleRouter.post("/new", CreateRole);

//====================================================// module.exports
module.exports = roleRouter;
