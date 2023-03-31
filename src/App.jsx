import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Resume from "./Pages/Resume";

function App() {
  return (
    <div className="App pt-32">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
