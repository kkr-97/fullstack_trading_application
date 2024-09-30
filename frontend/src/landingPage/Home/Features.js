import React from "react";

function Features() {
  return (
    <div className="container">
      <div className="row features-container">
        <div className="col-12 col-md-5">
          <h2>Trust with confidence</h2>
          <ul className="features-list-container">
            <li className="feature-item">
              <h4>Customer-first always</h4>
              <p>
                That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </li>
            <li className="feature-item">
              <h4>No spam or gimmicks</h4>
              <p>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </li>
            <li className="feature-item">
              <h4>The Zerodha universe</h4>
              <p>
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </li>
            <li className="feature-item">
              <h4>Do better with money</h4>
              <p>
                With initiatives like{" "}
                <a
                  className="text-decoration-none"
                  href="https://support.zerodha.com/category/trading-and-markets/kite-features/nudges/articles/what-is-nudge"
                >
                  Nudge
                </a>{" "}
                and{" "}
                <a
                  className="text-decoration-none"
                  href="https://support.zerodha.com/category/console/profile/killswitch/articles/what-is-the-kill-switch"
                >
                  Kill Switch
                </a>
                , we don't just facilitate transactions, but actively help you
                do better with your money.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-7 ml-auto ml-md-auto text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Features"
            className="feature-img"
          />
          <div className="explore-more">
            <a
              href="/products"
              className="m-auto text-primary text-decoration-none"
            >
              Explore our products
            </a>
            <a href="/" className="m-auto text-primary text-decoration-none">
              Try Kite demo
            </a>
          </div>
        </div>
        <img
          src="media/images/pressLogos.png"
          className="w-50 mt-4 mb-5 m-auto"
          alt="Press Logos"
        />
      </div>
    </div>
  );
}

export default Features;
