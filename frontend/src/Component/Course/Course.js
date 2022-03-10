import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import Card from "react-bootstrap/Card";
import { Grid, Row, Col } from "react-bootstrap";
import "./Course.css";

const Course = () => {
  const [allCourses, setAllCourses] = useState([]);
  const { courseId, setCourseId } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(6);
  // const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(0);

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
  const currentCourse = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const pageNumbers = [];

  //===================================================== getAllcategory

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

  //===================================================== Filter by category
  const filterByCategory = async (e) => {
    if (e.target.value == 0) {
      return getAllCourses();
    }
    setCategory(e.target.value);
    try {
      const res = await axios.post("http://localhost:5000/course/getByC", {
        Category: e.target.value,
      });
      setAllCourses(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);
  for (let i = 1; i <= Math.ceil(allCourses.length / coursePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="courseMainDiv">
      <div className="filterDiv">
        <select
          className="departmentDoctorFilter"
          defaultValue={0}
          onChange={filterByCategory}
        >
          <option value={0} disabled selected hidden>
            Filter by Category ...
          </option>
          <option value={0}>All</option>
          <option value={"software"}>software</option>
          <option value={"Language"}>Language</option>
          <option value={"sciences"}>sciences</option>
        </select>
      </div>
      <div className="allCourses">
        <Row xs={1} md={4} className="g-4">
          {currentCourse.map((_, idx) => (
            <Col>
              <Card
                onClick={(e) => {
                  setCourseId(_.id);
                }}
                defaultValue={_.id}
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
          {/* {filter
            ? filter.map((_, idx) => (
                <Col>
                  <Card
                    onClick={(e) => {
                      setCourseId(_.id);
                    }}
                    defaultValue={_.id}
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
              ))
            : allCourses.map((_, idx) => (
                <Col>
                  <Card
                    onClick={(e) => {
                      setCourseId(_.id);
                    }}
                    defaultValue={_.id}
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
              ))} */}
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
