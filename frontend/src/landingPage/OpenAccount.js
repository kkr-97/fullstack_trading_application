import React from "react";
import SignupButton from "./SignupButton";

function OpenAccount() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="hero-title mt-5 mb-3">Open a Zerodha account</h2>
          <p className="hero-paragraph mt-0 mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <SignupButton />
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
