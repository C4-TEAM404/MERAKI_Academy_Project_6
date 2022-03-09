import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import Card from "react-bootstrap/Card";
import { Grid, Row, Col } from "react-bootstrap";
import "./Course.css";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const history = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const { courseId, setCourseId } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(4);

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  const currentCourse = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const pageNumbers = [];

  const getAllCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/course/getall");
      if (res.data.success) {
        setAllCourses(res.data.result);
      } else throw Error;
    } catch (error) {
      if (!error.response.data.success) {
      }
    }
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    getAllCourses();
  }, []);
  for (let i = 1; i <= Math.ceil(allCourses.length / coursePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="courseMainDiv">
      <div className="allCourses">
        <Row xs={1} md={2} className="g-4 ">
          {currentCourse.map((_, idx) => (
            <Col>
              <Card
                style={{ width: "100%", height: "100%" }}
                onClick={(e) => {
                  setCourseId(_.id);
                  history("/coursedescryption");
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://www.learnfly.com/img/post_img/1335475250_1_5ev1xmjs2-sj4ddejfdnqa.png"
                />
                <Card.Body>
                  <Card.Title>{_.Title}</Card.Title>
                  <Card.Text>{_.Author}</Card.Text>
                  <Card.Text>{_.Price}</Card.Text>
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

export default Course;
