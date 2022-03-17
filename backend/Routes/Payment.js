//====================================================//Require
const express = require("express");
const PaymentRouter = express.Router();
//====================================================//Require Functions

const { Payment, CreateUser_Course } = require("../controllers/Payment");

PaymentRouter.post("/", Payment);
PaymentRouter.post("/usercourse", CreateUser_Course);

module.exports = PaymentRouter;
