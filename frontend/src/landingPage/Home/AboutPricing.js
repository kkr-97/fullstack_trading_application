import React from "react";

function AboutPricing() {
  return (
    <div className="container mb-5 mt-5 pt`-5">
      <div className="row about-pricing-container">
        <div className="pricing-description col-12 col-md-6">
          <h2>Unbeatable Pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="text-primary text-decoration-none" href="/pricing">
            See pricing
          </a>
        </div>
        <div className="pricing-list-container d-flex flex-column flex-md-row align-items-center align-items-md--start col-12 col-md-6">
          <div className="pricing-item d-flex flex-column ">
            <img src="media/images/pricingEquity.svg" alt="equity pricing" />
            <p>
              Free account
              <br />
              opening
            </p>
          </div>
          <div className="pricing-item d-flex flex-column ">
            <img src="media/images/pricingEquity.svg" alt="equity pricing" />
            <p>
              Free equity delivery
              <br />
              and direct mutual funds
            </p>
          </div>
          <div className="pricing-item d-flex flex-column ">
            <img src="media/images/intradayTrades.svg" alt="intraday pricing" />
            <p>
              Intraday and
              <br />
              F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPricing;
