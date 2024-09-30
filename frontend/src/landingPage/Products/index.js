import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Patners from "./Patners";

import "./index.css";

const featureList = [
  {
    title: "Kite",
    description:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    imgLink: "media/images/kite.png",
    link: "https://zerodha.com/products/kite",
  },
  {
    title: "Console",
    description:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    imgLink: "media/images/console.png",
    link: "https://zerodha.com/products/console",
  },
  {
    title: "Coin",
    description:
      "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    imgLink: "media/images/coin.png",
    link: "https://coin.zerodha.com/",
  },
  {
    title: "Kite Connect API",
    description:
      "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    imgLink: "media/images/kiteconnect.png",
    link: "https://kite.trade/",
  },
  {
    title: "Varsity mobile",
    description:
      "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    imgLink: "media/images/varsity.png",
    link: "https://play.google.com/store/apps/details?id=com.zerodha.varsity",
  },
];

function Products() {
  return (
    <div className="container mt-5 products-container">
      <Hero />
      <ul className="p-0 list-unstyled">
        {featureList.map((feature, index) => {
          if (index % 2 === 0) {
            return <LeftImage key={index} details={feature} />;
          } else {
            return <RightImage key={index} details={feature} />;
          }
        })}
      </ul>
      <Patners />
    </div>
  );
}

export default Products;
