//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

  //====================================================//useContext
  const { courseId } = useContext(UserContext);
  //====================================================//useEffect

  useEffect(async () => {
    try {
      const res = await axios.get(
        `http:localhost:5000/course/getByid/:${courseId}`
      );
      console.log(res);
      setTitle(res.data.Title);
      setDescryption(res.data.Description);
      setPrice(res.data.Price);
      setLanguage(res.data.language);
      setSchedual(res.data.Author);
      setAuthor(res.data.Author);
      setRequirements(res.data.Requirements);
      setCategory(res.data.Category);
      setVideo(res.data.Video);
      setImage(res.data.image);
    } catch (err) {
      throw new Error(err);
    }
  }, []);
  const loading = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "project4");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/omarkataa/video/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log(file.secure_url);
  };

  //====================================================//return

  return (
    <div>
      <input type="file" onChange={loading} />

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
    </div>
  );
};

export default Course_Details;
