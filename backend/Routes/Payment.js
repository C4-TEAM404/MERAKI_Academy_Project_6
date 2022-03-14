//====================================================//Require
const express = require("express");
const PaymentRouter = express.Router();
//====================================================//Require Functions

const { Payment } = require("../controllers/Payment");

PaymentRouter.post("/", Payment);

module.exports = PaymentRouter;
