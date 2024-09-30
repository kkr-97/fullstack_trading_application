import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./landingPage/Home";
import About from "./landingPage/About";
import Pricing from "./landingPage/Pricing";
import Products from "./landingPage/Products";
import NotFound from "./landingPage/NotFound";

import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
