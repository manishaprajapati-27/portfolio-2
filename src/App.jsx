// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/assets/scss/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={About} path="/about" />
        <Route Component={Contact} path="/contact" />
        <Route Component={Work} path="/work" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
