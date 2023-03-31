import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App pt-32">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
