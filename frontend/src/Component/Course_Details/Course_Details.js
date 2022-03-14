//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

//CSS File
import "./Course_Details.css";

const Course_Details = () => {
  //====================================================//useState

  const [title, setTitle] = useState("");
  const [descryption, setDescryption] = useState("");
  const [price, setPrice] = useState("");
  const [language, setLanguage] = useState("");
  const [schedual, setSchedual] = useState("");
  const [author, setAuthor] = useState("");
  const [requirements, setRequirements] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [showroom, setShowroom] = useState([]);

  //====================================================//useContext
  const { login, courseId } = useContext(UserContext);
  //====================================================//useEffect

  useEffect(async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/course/getByid/${courseId}`
      );
      console.log(res);
      setTitle(res.data.results[0].Title);
      setDescryption(res.data.results[0].Description);
      setPrice(res.data.results[0].Price);
      setLanguage(res.data.results[0].language);
      setSchedual(res.data.results[0].Author);
      setAuthor(res.data.results[0].Author);
      setRequirements(res.data.results[0].Requirements);
      setCategory(res.data.results[0].Category);
      setVideo(res.data.results[0].Video);
      setImage(res.data.results[0].image);
      const res1 = await axios.post(`http://localhost:5000/course/usercourse`, {
        courseId: courseId,
        userId: login.userId || 1,
        roleId: login.roleId || 2,
      });
      console.log(res1);
      setShowroom(res1.data.result);
    } catch (err) {
      console.log(err.response);
      throw new Error(err);
    }
  }, []);

  //====================================================//return

  return (
    <div>
      <dl class="row">
        <img src={image} class="img-fluid " alt="..." />
        <dt class="col-sm-3">Title</dt>
        <dd class="col-sm-9">{title}</dd>

        <dt class="col-sm-3">Description</dt>
        <dd class="col-sm-9">{descryption}</dd>

        <dt class="col-sm-3">Price</dt>
        <dd class="col-sm-9">{price}</dd>

        <dt class="col-sm-3">language</dt>
        <dd class="col-sm-9">{language}</dd>
        <dt class="col-sm-3">Schedule</dt>
        <dd class="col-sm-9">{schedual}</dd>
        <dt class="col-sm-3">Author</dt>
        <dd class="col-sm-9">{author}</dd>
        <dt class="col-sm-3">Requirements</dt>
        <dd class="col-sm-9">{requirements}</dd>
        <dt class="col-sm-3">Category</dt>
        <dd class="col-sm-9">{category}</dd>
        <dt class="col-sm-3">Video</dt>
        <dd class="col-sm-9">
          <iframe
            width="420"
            height="345"
            src="https://res.cloudinary.com/omarkataa/video/upload/v1646854892/project4/vvbb3cpjhgdzqm27djke.mp4"
          ></iframe>
        </dd>
      </dl>
      {showroom.length && <Link to="/video">video</Link>}
    </div>
  );
};

export default Course_Details;
