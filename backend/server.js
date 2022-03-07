//====================================================//Require
const express = require("express");
const PORT = 5000;
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
//====================================================//import database
const connection = require("./database/db");

//====================================================// Import Routers
const teacherRouter = require("./Routes/Teacher");
const studentRouter = require("./Routes/Student");
const courseRouter = require("./Routes/Course");

//====================================================// Routes Middleware
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/course", courseRouter);
//====================================================// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
