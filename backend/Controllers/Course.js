//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//CreateNewCourse
const CreateNewCourse = async (req, res) => {
  let {
    Title,
    Description,
    Price,
    Language,
    Schedule,
    Author,
    Requirements,
    Category,
    roleId,
  } = req.body;
  const query = `INSERT INTO course (Title,Description,Price,Language,Schedule,Author,Requirements,Category,roleId) VALUES (?,?,?,?,?,?,?,?,?)
  `;
  const data = [
    Title,
    Description,
    Price,
    Language,
    Schedule,
    Author,
    Requirements,
    Category,
    roleId,
  ];
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: "Create Course Successfully",
        result: result,
      });
    } else {
      return res.status(409).json({
        success: false,
        message: " This Course already exists",
      });
    }
  });
};
//====================================================//GetAllCourses
const GetAllCourses = (req, res) => {
  const query = `SELECT course.Title,course.Description,course.Description,course.Price,course.language,course.Schedule,course.Author,course.Requirements,course.Category FROM course where is_deleted=0`;

  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    // result are the data returned by mysql server
    return res.status(200).json({
      success: true,
      massage: `All the Courses `,
      results: result,
    });
  });
};

//====================================================//GetCourseByCategory
const GetCourseByCategory = (req, res) => {
  const Category = req.body.Category;
  const query = `SELECT course.Title,course.Description,course.Description,course.Price,course.language,course.Schedule,course.Author,course.Requirements,course.Category FROM course where is_deleted=0 and category=? `;
  const data = [Category];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    // result are the data returned by mysql server
    return res.status(200).json({
      success: true,
      massage: `All the ${Category} Courses`,
      results: result,
    });
  });
};

module.exports = { CreateNewCourse, GetAllCourses, GetCourseByCategory };
