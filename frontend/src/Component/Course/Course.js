import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import Card from "react-bootstrap/Card";
import { Grid, Row, Col } from "react-bootstrap";
import "./Course.css";

const Course = () => {
  const [allCourses, setAllCourses] = useState([]);
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

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="courseMainDiv">
      <div className="allCourses">
        <Row xs={1} md={2} className="g-4">
          {allCourses.map((_, idx) => (
            <Col>
              <Card>
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
        {/* {allCourses.map((element, index) => {
          return (
            <div key={index}>
              <div>
                <div>{element.Title}</div>
                <div>{element.Author}</div>
                <div>{element.Price}</div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Course;
