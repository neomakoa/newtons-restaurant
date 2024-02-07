import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./header";
import Home from "./home";
import Menu from "./menu";
import Locations from "./locations";
import Footer from "./footer";
import { bg } from "./assets/images";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="locations" element={<Locations />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
