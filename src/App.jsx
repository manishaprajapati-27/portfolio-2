// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";
import NoPage from "./pages/404/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/assets/scss/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route Component={Home} path="/" element={<Home />} />
        <Route Component={About} path="/about" element={<About />} />
        <Route Component={Contact} path="/contact" element={<Contact />} />
        <Route Component={Work} path="/work" element={<Work />} />
        <Route Component={NoPage} path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
