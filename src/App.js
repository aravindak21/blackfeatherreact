// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import CostEstimation1 from "./pages/CostEstimation1";
import Services from "./pages/Services"; // Add other pages as needed
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cost-estimation" element={<CostEstimation1 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
