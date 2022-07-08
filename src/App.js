import React from "react";
import Navbar from "./components/Navbar";
import CarouselContainer from "./components/CarouselContainers.js";
import MyPortfolio from "./components/MyPortfolio";
import { Routes, Route } from "react-router-dom";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/MyPortfolio" element={<MyPortfolio />} />
        <Route path="/CarouselContainer" element={<CarouselContainer />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Sidebar" element={<Sidebar />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
