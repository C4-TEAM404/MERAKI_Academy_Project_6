//====================================================//Require
const connection = require("../database/db");

//====================================================//Create New Role
const CreateRole = (req, res) => {
  const role = req.body.role;
  const query = `INSERT INTO role (name) VALUE (?)`;
  const data = [role];
  if (!role) {
    res.status(404).json({
      success: false,
      message: "Please Enter The Role",
    });
  }
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(201).json({
        success: true,
        message: "Success role created",
        result: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "SERVER ERROR",
      });
    }
  });
};

module.exports = { CreateRole };
