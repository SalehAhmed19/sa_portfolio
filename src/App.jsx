import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <div className="App pt-32">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
