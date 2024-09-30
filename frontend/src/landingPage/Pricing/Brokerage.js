import React from "react";

function Brokerage() {
  return (
    <div className="brokerage-container container">
      <div className="row">
        <div className="col-6 text-center">
          <a href="/" className="text-primary">
            Brokerage Calculator
          </a>
        </div>
        <div className="mb-5 col-6 text-center">
          <a href="/" className="text-primary">
            List of charges
          </a>
        </div>
        <ul className="ml-5 mt-5 col-6 fs-6 text-secondary pricing-info-list">
          <li className="pricing-info-item lh-2">
            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
            per order.
          </li>
          <li className="pricing-info-item lh-2">
            Digital contract notes will be sent via e-mail.
          </li>
          <li className="pricing-info-item lh-2">
            Physical copies of contract notes, if required, shall be charged ₹20
            per contract note. Courier charges apply.
          </li>
          <li className="pricing-info-item lh-2">
            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
            equity (whichever is lower).
          </li>
          <li className="pricing-info-item lh-2">
            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li className="pricing-info-item lh-2">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Brokerage;
