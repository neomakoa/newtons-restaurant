import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Locations from "./pages/locations";
import Footer from "./components/footer";
import { bg } from "./assets/images/images";

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
