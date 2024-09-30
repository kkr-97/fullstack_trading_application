import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import AboutPricing from "./AboutPricing";
import Educate from "./Educate";

import "./index.css";
import OpenAccount from "../OpenAccount";

function Home() {
  return (
    <div className="home-page-container">
      <Hero />
      <Features />
      <AboutPricing />
      <Educate />
      <OpenAccount />
    </div>
  );
}

export default Home;
