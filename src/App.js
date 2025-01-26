import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import CostEstimation1 from "./pages/CostEstimation1";
import CostEstimation2 from "./pages/CostEstimation2"; // Import new page
import Services from "./pages/Services"; 
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cost-estimation" element={<CostEstimation1 />} />
          <Route path="/cost-estimation-calculator" element={<CostEstimation2 />} /> {/* Add new route */}
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
