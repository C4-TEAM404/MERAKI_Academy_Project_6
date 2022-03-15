//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import Payment from "../Payment/Payment";

//CSS File
import "./Course_Details.css";

const Course_Details = () => {
  //====================================================//useState

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [language, setLanguage] = useState("");
  const [schedual, setSchedual] = useState("");
  const [author, setAuthor] = useState("");
  const [requirements, setRequirements] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");

  //====================================================//useContext
  const { courseId } = useContext(UserContext);
  //====================================================//useEffect

  useEffect(async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/course/getByid/${courseId}`
      );
      console.log(res, "---------------");
      setTitle(res.data.results[0].Title);
      setDescription(res.data.results[0].Description);
      setPrice(res.data.results[0].Price);
      setLanguage(res.data.results[0].language);
      setSchedual(res.data.results[0].Author);
      setAuthor(res.data.results[0].Author);
      setRequirements(res.data.results[0].Requirements);
      setCategory(res.data.results[0].Category);
      setVideo(res.data.results[0].Video);
      setImage(res.data.results[0].image);
    } catch (err) {
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
        <dd class="col-sm-9">{description}</dd>
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
        <dt class="col-sm-3">Enroll</dt>
        <dd class="col-sm-9">
          <Payment Title={title} description={description} price={price} />
        </dd>
        <dt class="col-sm-3">Video</dt>
        <dd class="col-sm-9">
          <iframe
            width="420"
            height="345"
            src="https://res.cloudinary.com/omarkataa/video/upload/v1646854892/project4/vvbb3cpjhgdzqm27djke.mp4"
          ></iframe>
        </dd>
      </dl>
    </div>
  );
};

export default Course_Details;
