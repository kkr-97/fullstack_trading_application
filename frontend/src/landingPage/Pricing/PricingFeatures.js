import React from "react";

function PricingFeatures() {
  return (
    <div className="pricing-features container">
      <div className="row pricing-feature-container d-flex flex-column flex-md-row justify-content-space-around">
        <div className="pricing-item d-flex flex-column align-items-center col p-5">
          <img src="media/images/pricingEquity.svg" alt="equity pricing" />
          <h4 className="mb-4">Free account opening</h4>
          <p className="text-center text-secondary">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="pricing-item d-flex flex-column align-items-center col p-5">
          <img src="media/images/intradayTrades.svg" alt="equity pricing" />

          <h4 className="mb-4">Intraday and F&O trades</h4>
          <p className="text-center text-secondary">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="pricing-item d-flex flex-column align-items-center col p-5">
          <img src="media/images/pricingEquity.svg" alt="equity pricing" />
          <h4 className="mb-4">Free direct MF</h4>
          <p className="text-center text-secondary">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingFeatures;
