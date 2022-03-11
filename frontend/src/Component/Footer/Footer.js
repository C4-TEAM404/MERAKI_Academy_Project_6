//====================================================//Require
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

//CSS File
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterMainDiv">
      <MDBFooter
        className="text-center"
        color="white"
        bgColor="#292726"
        style={({ width: "100%" }, { height: "100%" })}
      >
        <MDBContainer className="p-4">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <MDBCol md="5" start="12">
                  <MDBInput
                    contrast
                    type="email"
                    label="Email address"
                    className="mb-4"
                  />
                </MDBCol>

                <div className="col-auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0 ">
                  <li>
                    <a
                      href="http://localhost:3000/home"
                      className="text-white "
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/home" className="text-white">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:3000/Course"
                      className="text-white"
                    >
                      Course
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:3000/login"
                      className="text-white "
                    >
                      LOGIN
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-left">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="http://localhost:3000/Register"
                      className="text-white"
                    >
                      REGISTER
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Register And Account
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Services & Help
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Support Forum
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Register And Account
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Services & Help
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Support Forum
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Faq & Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Services & Help
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Register And Account
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-white" href="http://localhost:3000/home/">
            HEX Company
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
