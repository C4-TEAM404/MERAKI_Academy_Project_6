import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Grid, Row, Col } from "react-bootstrap";
import "../Course/Course.css";
const Student_Page = () => {
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
        "http://localhost:5000/student/getCourseById",
        {
          id: login.userId,
        }
      );
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

  return (
    <div>
      <div className="allCourses">
        <Row xs={1} md={4} className="g-4">
          {currentCourse.map((_, idx) => (
            <Col>
              <Card
                className="cardCourse"
                onClick={(e) => {
                  setCourseId(_.id);
                  history("/coursedescryption");
                }}
              >
                <Card.Img
                  variant="top"
                  className="imagCardCourse"
                  src="https://www.learnfly.com/img/post_img/1335475250_1_5ev1xmjs2-sj4ddejfdnqa.png"
                />
                <Card.Body>
                  <Card.Title>{_.Title}</Card.Title>
                  <Card.Text>{_.Author}</Card.Text>
                  <Card.Text>Price : {_.Price} $</Card.Text>
                  <Card.Text>Start In : {_.start}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="paginationDiv">
          <ul className="paginationUl">
            {pageNumbers.map((number) => {
              return (
                <li>
                  <a
                    className="paginationUl"
                    href="#"
                    onClick={() => {
                      paginate(number);
                    }}
                  >
                    {number}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Student_Page;