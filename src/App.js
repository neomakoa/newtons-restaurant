import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Locations from "./pages/locations";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="wallpaper">
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
    </motion.div>
  );
}

export default App;
