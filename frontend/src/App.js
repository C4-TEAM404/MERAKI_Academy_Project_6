import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
export const UserContext = createContext();
import Header from "../src/Component/Header/Header";
import Footer from "../src/Component/Footer/Footer";
import Introduction from "../src/Component/Introduction/Introduction";
function App() {
  const [login, setLogin] = useState({});
  return (
    <div className="App">
     <Header />
      <UserContext.Provider value={{ login, setLogin }}>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} 
    
     
     
        <Route path="/" element={<Introduction />} />
     
      <Footer />
           </Routes>
           </UserContext.Provider>
    </div>
  );
}

export default App;
