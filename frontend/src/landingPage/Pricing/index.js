import React from "react";
import Hero from "./Hero";
import PricingFeatures from "./PricingFeatures";
import Brokerage from "./Brokerage";

import OpenAccount from "../OpenAccount";

function Pricing() {
  return (
    <div className="pricing">
      <Hero />
      <PricingFeatures />
      <OpenAccount />
      <Brokerage />
    </div>
  );
}

export default Pricing;
