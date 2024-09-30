import React from "react";
import PatnerCard from "./PatnerCard";

const partnersList = [
  {
    id: 1,
    name: "Fund House",
    link: "https://www.zerodhafundhouse.com/",
    logo: "media/images/zerodhaFundHouse.png",
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    id: 2,
    name: "SENSIBULL",
    link: "https://sensibull.com/",
    logo: "media/images/sensibullLogo.svg",
    description:
      "Options trading platform that lets youcreate strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    id: 3,
    name: "TIJORI",
    link: "https://www.tijorifinance.com/features/",
    logo: "media/images/tijoriLogo.png",
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    id: 4,
    name: "Streak",
    link: "https://www.streak.tech/home",
    logo: "media/images/streakLogo.png",
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    id: 5,
    name: "Small Case",
    link: "https://smallcase.zerodha.com/",
    logo: "media/images/smallcaseLogo.png",
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
  },
  {
    id: 6,
    name: "ditto",
    link: "https://joinditto.in/",
    logo: "media/images/dittoLogo.png",
    description:
      "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

function Patners() {
  return (
    <div className="patners-container container border-top mt-5">
      <div className="row">
        <div className="col-12 text-center p-5">
          <h2 className="mb-3">The Zerodha Universe</h2>
          <p className="m">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <ul className="row p-0 list-unstyled">
        {partnersList.map((item) => (
          <PatnerCard key={item.id} patnerDetails={item} />
        ))}
      </ul>
    </div>
  );
}

export default Patners;
