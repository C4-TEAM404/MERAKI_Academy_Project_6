import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register_Student from "./Component/Register_Student/Register_Student";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Register_Teacher from "./Component/Register_Teacher/Register_Teacher";
import Course_Details from "./Component/Course_Details/Course_Details";
import Create_Course from "./Component/Create_Course/Create_Course";
import Home from "./Component/Home/Home";
import Course from "./Component/Course/Course";
import Chat from "./Component/Chat/Chat";
import ClassRoom from "./Component/ClassRoom/ClassRoom";
import Payment from "./Component/Payment/Payment";
import Teacher_Page from "./Component/Teacher_Page/Teacher_Page";
import Student_Page from "./Component/Student_Page/Student_Page";

function App() {
  const [login, setLogin] = useState({});
  const [courseId, setCourseId] = useState({});
  const [roomName, setRoomName] = useState("");

  return (
    //     </div>
    //
    //
    //
    //     </div>

    //     <div class="input-group mb-3">
    //       <label class="input-group-text" for="inputGroupFile01">
    //         Upload video
    //       </label>
    //       <input
    //         type="file"
    //         class="form-control"
    //         id="inputGroupFile01"
    //         style={{ display: "none" }}
    //         onChange={video_handler}
    //       />
    //     </div>
    //     {video && (
    //       <div>
    //         <iframe width="420" height="345" src={video}></iframe>
    //       </div>
    //     )}

    //     <div class="input-group mb-3">
    //       <label class="input-group-text" for="inputGroupFile02">
    //         Upload image
    //       </label>
    //       <input
    //         type="file"
    //         class="form-control"
    //         id="inputGroupFile02"
    //         style={{ display: "none" }}
    //         onChange={image_handler}
    //       />
    //     </div>

    //     {image && (
    //       <div>
    //         <img src={image} class="h-1 img-fluid" alt="..." />
    //       </div>
    //     )}

    //     <button type="submit" class="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div className="App">
      <UserContext.Provider
        value={{
          login,
          setLogin,
          setCourseId,
          courseId,
          roomName,
          setRoomName,
        }}
      >
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/SRegister" element={<Register_Student />} />
          <Route path="/TRegister" element={<Register_Teacher />} />
          <Route path="/" element={<Home />} />
          <Route path="/coursedescryption" element={<Course_Details />} />
          <Route path="/createcourse" element={<Create_Course />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/video" element={<ClassRoom />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/teacherpage" element={<Teacher_Page />} />
          <Route path="/Teacher_Page" element={<Teacher_Page />} />
          <Route path="/Student_Page" element={<Student_Page />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export const UserContext = createContext();
