//====================================================//Require
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { MDBBtn } from "mdb-react-ui-kit";

//CSS File
import "./Home.css";

const Introduction = () => {
  return (
    <div className="introMainDiv">
      <div className="Part1">
        <div className="part1Div">
          <div className="Message1">
            <div>
              <div className="hex">HEX</div>{" "}
              <div className="Training">Training Organization</div>
            </div>
            <div className="Message2">
              we proviet best education system for you amet mauris lobortis
              mauris inceptos eget. Urna imperdiet.
            </div>
            <div className="part1Buttons">
              <MDBBtn>Primary</MDBBtn>
              <MDBBtn className="mx-2" color="secondary">
                Secondary
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="Part2">
        <div className="page2Details">
          <div className="popular">Our Popular Courses</div>
          <div className="details">
            Enim semper, gravida interdum nullam, pellentesque adipiscing
            scelerisque vitae dui, magnis platea. Ac sagittis ridiculus Est ac
            sollicitudin varius integer laoreet morbi porta
          </div>
        </div>
        <div className="Popular_card">
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://focusvocationalschool.com/wp-content/uploads/2020/12/170427-637363828865101045-16x9-1.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.learnfly.com/img/post_img/1335475250_1_5ev1xmjs2-sj4ddejfdnqa.png"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://udemycoupons.me/wp-content/uploads/2021/09/CSS-Complete-Course.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
      <div className="Part3">
        <div className="part3LeftSide">
          <div className="why">Why Choose Us</div>
          <div className="whyDesc">
            Auctor eleifend egestas felis a suscipit, amet ultricies orci. Eget
            nonummy ultrices magna ornare tellus molestie.
          </div>
          <div className="boxes">
            <div className="box">
              <div className="boxIcon">
                <img src="https://demo.themeix.com/html/eduzone/images/video-logo.png" />
              </div>
              <div className="boxDesc">
                loasdasdasdasdloasdasdasdasdloasdasdasdasdloasdasdasdasdloasdasdasdasdloasdasdasdasd
              </div>
            </div>
            <div className="box">2</div>
            <div className="box">3</div>
          </div>
        </div>
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/vlDzYIIOYmM"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="Part4">Part4</div>
      <div className="Part5">Part5</div>
    </div>
  );
};

export default Introduction;
