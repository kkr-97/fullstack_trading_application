import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="products-hero container">
      <div className="row border-bottom text-center p-5">
        <h1 className="mb-2">Technology</h1>
        <h3 className=" mb-2 text-secondary">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="small text-secondary mt-3 pb-5">
          Check out our{" "}
          <Link to="/" className="text-primary">
            investment offerings →
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
