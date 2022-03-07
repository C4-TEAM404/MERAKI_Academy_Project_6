import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Header from "../src/Component/Header/Header";
import Footer from "../src/Component/Footer/Footer";
import Introduction from "../src/Component/Introduction/Introduction";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
