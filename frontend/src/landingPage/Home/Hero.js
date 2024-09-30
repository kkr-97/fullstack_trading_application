import React from "react";
import SignupButton from "../SignupButton";

function Hero() {
  return (
    <div className="home-hero container">
      <div className="row text-center">
        <div className="col-12 hero-section">
          <img
            src="/media/images/homeHero.png"
            alt="hero"
            className="home-hero-img mt-5 mb-5 ml-auto mr-auto w-100"
          />
          <h1 className="hero-title mt-5 mb-3">Invest in everything</h1>
          <h5 className="hero-paragraph mt-0 mb-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </h5>
          <SignupButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;
