//====================================================//Require
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { MDBBtn } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

//CSS File
import "./Home.css";

const Introduction = () => {
  return (
    <div className="introMainDiv">
      <div className="Part1">
        <div className="part1Div">
          <div className="Message1">
            <div>
              <div className="hex">HEX</div>
              <div className="Training">Training Organization</div>
            </div>
            <div className="Message2">
              we proviet best education system for you amet mauris lobortis
              mauris inceptos eget. Urna imperdiet.
            </div>
            <div className="part1Buttons">
              <MDBBtn class="btn-primary" href="/login">
                LOGIN
              </MDBBtn>
              <MDBBtn class="btn-secondary " href="/SRegister">
                TRY HEX
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
            <Card className="shadow p-3 mb-5 bg-body rounded">
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
            <Card className="shadow p-3 mb-5 bg-body rounded">
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
            <Card className="shadow p-3 mb-5 bg-body rounded">
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
          </CardGroup>
        </div>
      </div>
      <div className="Part3">
        <div className="part3Div">
          <MDBCard
            style={({ width: "80%" }, { height: "100%" })}
            className="border-0 p-100"
          >
            <MDBRow>
              <MDBCol md="6">
                <MDBCardBody>
                  <MDBCardTitle className="TitlePart3">
                    Why Choose Us
                  </MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBListGroupItem
                    className="border-0 g-10"
                    style={{ height: "21vh" }}
                  >
                    <img
                      src="https://i.ibb.co/fQ134DJ/video-logo3.png"
                      className="img-thumbnail border-0 "
                      alt="..."
                      style={{ maxWidth: "5rem" }}
                    />
                    <div className="font-weight-bold fs-4">
                      {" "}
                      Online Certification
                    </div>
                    <div className="text-muted ">
                      Performance Based Certificate
                    </div>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="border-0 gap-10 g-20"
                    style={{ height: "21vh" }}
                  >
                    <img
                      src="https://i.ibb.co/375sGXY/video-logo.png"
                      className="img-thumbnail border-0"
                      alt="..."
                      style={{ maxWidth: "5rem" }}
                    />
                    <div className="font-weight-bold fs-4">
                      Best Education System
                    </div>
                    <div className="text-muted">
                      Advance Education Management
                    </div>
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="border-0"
                    style={{ height: "21vh" }}
                  >
                    <img
                      src="https://i.ibb.co/6XD428m/video-logo2.png"
                      className="img-thumbnail border-0"
                      alt="..."
                      style={{ maxWidth: "5rem" }}
                    />
                    <div className="font-weight-bold fs-4">
                      Learning Management
                    </div>
                    <div className="text-muted">LMS Integration </div>
                  </MDBListGroupItem>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md="6">
                <div className="ratio ratio-1x1">
                  <iframe
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </div>
      <div className="Part4">
        <div className="page4Details">
          <div className="popular">Our Instructor</div>
          <div className="details">
            Enim semper, gravida interdum nullam, pellentesque adipiscing
            scelerisque vitae dui, magnis platea. Ac sagittis ridiculus Est ac
            sollicitudin varius integer laoreet morbi porta
          </div>
          <div className="Popular_card">
            <CardGroup className="CardGroupPage4">
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/tD6L5zL/testimonial-author5.jpg"
                />
                <Card.Body>
                  <Card.Title class="text-center">
                    Jaxon Tucker <br />
                    Instructor
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img
                  style={({ width: "100%" }, { height: "150%" })}
                  variant="top"
                  src="https://i.ibb.co/VHPmSTR/testimonial-author.jpg"
                />
                <Card.Body>
                  <Card.Title class="text-center">
                    L. Bohan <br />
                    Teacher
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/8N3svBH/testimonial-author2.jpg"
                />
                <Card.Body>
                  <Card.Title class="text-center">
                    J. Renz
                    <br />
                    Teacher
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/hcGvZ2S/testimonial-author3.jpg"
                />
                <Card.Body>
                  <Card.Title class="text-center">
                    Alannah Varley <br /> Instructor
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
      <div className="Part5">
        <div className="Part5MainDiv" id="About">
          <div className="page4Details">
            <div className="popular">About Us</div>
            <div className="details">
              Enim semper, gravida interdum nullam, pellentesque adipiscing
              scelerisque vitae dui, magnis platea. Ac sagittis ridiculus Est ac
              sollicitudin varius integer laoreet morbi porta
            </div>
            <div className="Popular_card">
              <CardGroup className="CardGroupPage4">
                <Card className="shadow p-3 mb-5 bg-body rounded">
                  <Card.Img
                    variant="top"
                    src="https://i.ibb.co/cYLDLfd/123.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Omar Kataa</Card.Title>
                  </Card.Body>
                </Card>
                <Card className="shadow p-3 mb-5 bg-body rounded">
                  <Card.Img
                    style={({ width: "100%" }, { height: "150%" })}
                    variant="top"
                    src="https://i.ibb.co/SVT6Lz5/456.jpg"
                  />

                  <Card.Body>
                    <Card.Title>Haitham Alulaimi</Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
