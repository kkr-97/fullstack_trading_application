import React from "react";

function Educate() {
  return (
    <div className="container">
      <div className="educate-container row">
        <div className="mt-5 col-12 col-md-6">
          <a
            href="https://zerodha.com/varsity"
            className="text-decoration-none"
          >
            <img
              src="media/images/education.svg"
              alt="Varsity"
              className="varsity-img"
            />
          </a>
        </div>
        <div className="mt-5 col-12 col-md-6 mb-5 educate-list-container">
          <h2 className="mt-5 mb-5">Free and open market education</h2>
          <div className="educate-item">
            <p className="mt-0">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="https://zerodha.com/varsity"
              className="text-decoration-none text-primary"
            >
              Varsity
            </a>
          </div>
          <div className="educate-item mt-4">
            <p className="mt-0">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="https://tradingqna.com/"
              className="text-decoration-none text-primary"
            >
              TradingQ&A
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educate;
