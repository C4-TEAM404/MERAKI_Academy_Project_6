import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

//CSS File
import "./Create_Course.css";

const Create_Course = () => {
  const history = useNavigate();
  const { login } = useContext(UserContext);
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
  const [teacherId, setTeacherId] = useState("");

  //====================================================//function

  const title_handler = (e) => {
    setTitle(e.target.value);
  };
  const descryption_handler = (e) => {
    setDescryption(e.target.value);
  };
  const price_handler = (e) => {
    setPrice(e.target.value);
  };
  const language_handler = (e) => {
    setLanguage(e.target.value);
  };
  const schedual_handler = (e) => {
    setSchedual(e.target.value);
  };
  const author_handler = (e) => {
    setAuthor(e.target.value);
  };
  const requirements_handler = (e) => {
    setRequirements(e.target.value);
  };
  const category_handler = (e) => {
    setCategory(e.target.value);
  };
  const video_handler = async (e) => {
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
    setVideo(file.secure_url);
    console.log(file.secure_url);
  };

  const image_handler = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "project4");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/omarkataa/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    console.log(file.secure_url);
  };

  const submit_handler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5000/course/new`, {
        Title: title,
        Description: descryption,
        Price: price,
        Language: language,
        Schedule: schedual,
        Author: author,
        Requirements: requirements,
        Category: category,
        Video: video,
        image,
        teacher_Id: login.userId,
        roleId: 2,
      });

      console.log(res);
      history("/");
    } catch (err) {
      throw new Error(err);
    }
  };

  //====================================================//return
  return (
    <div className="te">
      <form onSubmit={submit_handler}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={title}
            onChange={title_handler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={descryption}
            onChange={descryption_handler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={price}
            onChange={price_handler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Language
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={language}
            onChange={language_handler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Schedule
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={schedual}
            onChange={schedual_handler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Author
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={author}
            onChange={author_handler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Requirements
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={requirements}
            onChange={requirements_handler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Category
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={category}
            onChange={category_handler}
          />
        </div>

        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupFile01">
            Upload video
          </label>
          <input
            type="file"
            class="form-control"
            id="inputGroupFile01"
            style={{ display: "none" }}
            onChange={video_handler}
          />
        </div>
        {video && (
          <div>
            <iframe width="420" height="345" src={video}></iframe>
          </div>
        )}

        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupFile02">
            Upload image
          </label>
          <input
            type="file"
            class="form-control"
            id="inputGroupFile02"
            style={{ display: "none" }}
            onChange={image_handler}
          />
        </div>

        {image && (
          <div>
            <img src={image} class="h-1 img-fluid" alt="..." />
          </div>
        )}

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create_Course;
