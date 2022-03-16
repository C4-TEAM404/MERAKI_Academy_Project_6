import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Grid, Row, Col } from "react-bootstrap";
import "../Course/Course.css";

const Teacher_Page = () => {
  const history = useNavigate();
  const { login, setCourseId } = useContext(UserContext);
  const [allCourses, setAllCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(6);

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  const currentCourse = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const pageNumbers = [];

  useEffect(async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/teacher/teachercourse",
        {
          id: login.userId,
        }
      );
      console.log(res);
      setAllCourses(res.data.result);
    } catch (err) {
      throw new Error(err.response);
    }
  }, []);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  for (let i = 1; i <= Math.ceil(allCourses.length / coursePerPage); i++) {
    pageNumbers.push(i);
  }

  return <div></div>;
};

export default Teacher_Page;
