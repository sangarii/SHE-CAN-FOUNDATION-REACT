import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact//Contact";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About  title="About" subtitle="Us" title2="Our" subtitle2="Team" title3="Our" subtitle3="Value"/>} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
